/**********
Overview:
This file contains all of the code running in the background that makes
resumeBuilder.js possible. We call these helper functions because they support
your code in this course.
**********/


/*
These are HTML strings. JavaScript functions are used
to replace the %data% placeholder text you see in each.
*/

/* HEADER */
var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderRole = '<span>%data%</span><hr>';

/* CONTACTS */
var HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text"><a href="#">%data%</a></span></li>';
var HTMLmobile = '<li class="flex-item"><span class="orange-text">mobile</span><span class="white-text"><a href="#">%data%</a></span></li>';
var HTMLemail = '<li class="flex-item"><span class="orange-text">email</span><span class="white-text"><a href="#">%data%</a></span></li>';
var HTMLtwitter = '<li class="flex-item"><span class="orange-text">twitter</span><span class="white-text"><a href="#">%data%</a></span></li>';
var HTMLgithub = '<li class="flex-item"><span class="orange-text">github</span><span class="white-text"><a href="#">%data%</a></span></li>';
var HTMLlocation = '<li class="flex-item"><span class="orange-text">location</span><span class="white-text"><a href="#">%data%</a></span></li>';
var HTMLbioPic = '<img src="%data% " alt="title" class="biopic">';
var HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';
var HTMLstatus = '<span class="status">%data%</span>';

/* SKILLS */
var HTMLskillsStart = '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-column"></ul>';
var HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li>';

/* EDUCATION */
var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a href="#">%data%';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolDegree = ' -- %data%</a>';
var HTMLschoolMajor = '<br><div class="major-text">%data%</div>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolURL = '<br><a href="#">%data%</a>';

/* ONLINE CLASSES */
var HTMLonlineClasses = '<h3>Online Classes</h3>';
var HTMLonlineTitle = '<a href="#">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="dates-text">%data%</div>';
var HTMLonlineURL = '<br><a href="#">%data%</a>';

/* WORK */
var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a href="#">%data%';
var HTMLworkTitle = ' - %data%</a>';
var HTMLworkDates = '<div class="dates-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p><br>%data%</p>';

/* PROJECTS */
var HTMLprojectStart = '<div class="proj-entry"></div>';
var HTMLprojectTitle = '<a href="#">%data%</a>';
var HTMLprojectDates = '<div class="dates-text">%data%</div>';
var HTMLprojectDescription = '<p><br>%data%</p>';
var HTMLprojectImage = '<img src="%data%">';
var HTMLprojectURL = '<br><a href="#">%data%</a>';

/* FOOTER */
var internationalizeButton = '<button>Internationalize</button>';
var googleMap = '<div id="map"></div>';


/*
Helper code that hooks up your code to the button you'll be
appending. This runs a function that internationalizes the name.
*/
$(document).ready(function() {
  $('button').click(function() {
    var $name = $('#name');
    var iName = inName($name.text()) || function(){};
    $name.html(iName);
  });
});

/*
The next few lines about mouse clicks are for collecting click
Locations. Nothing is currently done with this information other
than logging to the console.
*/
var clickLocations = [];    // initialize array of clickLocations
function logClicks(x,y) {
  clickLocations.push(
    {
      x: x,
      y: y
    }
  );
  console.log('x location: ' + x + '; y location: ' + y);
}
$(document).click(function(loc) {
  // TODO: Future code to use click info will go here.
});


/*******************************************************************************
 *                      CUSTOM GOOGLE MAP GENERATION
 ******************************************************************************/

/*
This next section is where we generate the custom Google Map for the website.
See the documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
*/
var map;    // declares a global map variable

/*
The initializeMap() function is called when page is loaded. From there, the
script iterates through all of the objects in the resume, collects the location
strings and sends off those locations to the Google Place Search service. From
there, the place search service results are turned into location pins on the
map itself.

Your Challenge:
Your goal is to add an overlay with the name of each city that will appear when
a user clicks on your map. Start by checking out the createMapMarker() function
in helper.js, which includes a few lines that add an event listener to the map
that fires off an event when each marker gets clicked.
*/
function initializeMap() {

  var locations;  // variable for the

  var mapOptions = {
    disableDefaultUI: true
  };

  /*
  For the map to be displayed, the googleMap var must be
  appended to #mapDiv in resumeBuilder.js.
  */
  map = new google.maps.Map(document.querySelector('#map'), mapOptions);

  /*
  locationFinder() returns an array of every location string from the JSONs
  written for bio, education, and work.
  */
  function locationFinder() {

    // initializes an empty array
    var locations = [];

    // adds the single location property from bio to the locations array
    locations.push(bio.contacts.location);

    // iterates through school locations and appends each location to
    // the locations array. Note that forEach is used for array iteration
    // as described in the Udacity FEND Style Guide:
    // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
    education.schools.forEach(function(school){
      locations.push(school.location);
    });

    // iterates through work locations and appends each location to
    // the locations array. Note that forEach is used for array iteration
    // as described in the Udacity FEND Style Guide above.
    work.jobs.forEach(function(job){
      locations.push(job.location);
    });

    return locations;
  }

  /*
  The createMapMarker(placeData) reads Google Places search results to create map pins.
  -placeData is the object returned from search results containing information
  about a single location.
  -createMapMarker() also creates an infoWindow object that will determines the
  properties of the overlay.
  */
  function createMapMarker(placeData) {

    // The next lines save location data from the search result object to local variables
    var lat = placeData.geometry.location.lat();  // latitude from the place service
    var lon = placeData.geometry.location.lng();  // longitude from the place service
    var name = placeData.formatted_address;   // name of the place from the place service
    var bounds = window.mapBounds;            // current boundaries of the map window

    // marker is an object with additional data about the pin for a single location
    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });

    // infoWindows are the little helper windows that open when you click
    // or hover over a pin on a map. They usually contain more information
    // about a location.
    var infoWindow = new google.maps.InfoWindow({
      /*
      Try formatting the content of the infoWindow, which is simply a string
      that contains the overlay's HTML. Right now it's set to name, which is
      just the name of the city. Try learning some HTML and CSS to make the
      overlay really stand out!
      */
      content: name
    });

    // Your goal is to add an overlay with the name of each city that will
    // appear when a user clicks on your map.
    // Can you figure out the right function to call within the event listener to
    // ensure that the infoWindow object opens when a user clicks on a location?
    google.maps.event.addListener(marker, 'click', function() {
      // your code goes here!
      // To Open an Info Window:
      // When you create an info window, it is not displayed automatically on
      // the map. To make the info window visible, you need to call the open()
      // method on the InfoWindow, passing it the Map on which to open and
      // the Marker with which to anchor it.
      infoWindow.open(map, marker);
    });

    // this is where the pin actually gets added to the map.
    // bounds.extend() takes in a map location object
    bounds.extend(new google.maps.LatLng(lat, lon));
    // fit the map to the new marker
    map.fitBounds(bounds);
    // center the map
    map.setCenter(bounds.getCenter());
  }

  /*
  callback(results, status) makes sure the search returned results for a location.
  If so, it creates a new map marker for that location.
  */
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);
    }
  }

  /*
  pinPoster(locations) takes in the array of locations created by locationFinder()
  and fires off Google place searches for each location
  */
  function pinPoster(locations) {

    // creates a Google place search service object. PlacesService does the work of
    // actually searching for location data.
    var service = new google.maps.places.PlacesService(map);

    // Iterates through the array of locations, creates a search object for each location
      locations.forEach(function(place){
      // the search request object
      var request = {
        query: place
      };

      // Actually searches the Google Maps API for location data and runs the callback
      // function with the search results after each search.
      service.textSearch(request, callback);
    });
  }

  // Sets the boundaries of the map based on pin locations
  window.mapBounds = new google.maps.LatLngBounds();

  // locations is an array of location strings returned from locationFinder()
  locations = locationFinder();

  // pinPoster(locations) creates pins on the map for each location in
  // the locations array
  pinPoster(locations);

}

/*
Uncomment the code below when you're ready to implement a Google Map!
*/

// Calls the initializeMap() function when the page loads
//window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
//window.addEventListener('resize', function(e) {
  //Make sure the map bounds get updated on page resize
//  map.fitBounds(mapBounds);
//});
