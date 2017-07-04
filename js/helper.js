/*
Overview:
This file contains all of the code running in the background that makes
resumeBuilder.js possible. We call these helper functions because they support
your code in this course.
<p>
These are HTML strings. JavaScript functions are used
to replace the %data% placeholder text you see in each.*/
/* HEADER */
let HTMLheaderName = '<h1 id="name">%data%</h1>';
let HTMLheaderRole = '<span>%data%</span>';

/* CONTACTS */
let HTMLbioStart = '<div class="bio-entry"></div>';
let HTMLbioPic = '<img src="%data%" alt="profile" class="biopic">';
let HTMLwelcomeMsg = '<span class="welcome-message text-primary-color">%data%</span>';

// let HTMLstatus = '<br><span class="status secondary-text-color">Status: %data%</span>';
let HTMLmobileIcon = '<a href="#"><img alt="mobile" src="%data%" width="48" height="48"></a>';
let HTMLemailIcon = '<a href="#"><img alt="email" src="%data%" width="48" height="48"></a>';
let HTMLtwitterIcon = '<a href="#"><img alt="twitter" src="%data%" width="48" height="48"></a>';
let HTMLgithubIcon = '<a href="#"><img alt="github" src="%data%" width="48" height="48"></a>';
let HTMLlocationIcon = '<a href="#"><img alt="location" src="%data%" width="48" height="48"></a>';

/* SKILLS */
let HTMLskillsStart = `<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-column"></ul>`;
let HTMLskills = '<li class="flex-item"><span class="text-primary-color">%data%</span></li>';

/* EDUCATION */
let HTMLschoolStart = '<div class="education-entry"></div>';
let HTMLschoolName = '<hr><a href="#">%data%';
let HTMLschoolLocation = '<div class="location-text secondary-text-color">%data%</div>';
let HTMLschoolDegree = ' -- %data%</a>';
let HTMLschoolMajor = '<div class="major-text">%data%</div>';
let HTMLschoolDates = '<div class="date-text secondary-text-color">%data%</div>';

/* COURSES */
const HTMLcoursesStart = `<hr><h4 id="courses-h4">Related Courses</h4><ul id="courses" class="flex-column"></ul>`;
let HTMLcourses  = '<li class="flex-item indent"><span class="primary-text-color">%data% (#)</span></li>';

/* WORK */
let HTMLworkStart = '<div class="work-entry"></div>';
let HTMLworkEmployer = '<hr><a href="#">%data%';
let HTMLworkTitle = ' - %data%</a>';
let HTMLworkDates = '<div class="date-text">%data%</div>';
let HTMLworkLocation = '<div class="location-text secondary-text-color">%data%</div>';
let HTMLworkDescription = '<p>%data%</p>';

/* PROJECTS */
let HTMLprojectStart = '<div class="proj-entry"></div>';
let HTMLprojectTitle = '<hr><a href="#">%data%</a>';
let HTMLprojectDates = '<div class="date-text">%data%</div>';
let HTMLprojectDescription = '<p>%data%</p>';

let HTMLprojectImage = '<img src="#" alt="screen-shot" class="project-image">';

/* MAP */
// let googleMap = '<div id="map"></div>';

// Scroll-to-top button.
let footerButton = '<button onclick="scrollToTop()" class="fab-main">^</button>';

// /*
// Helper code that hooks up your code to the button you'll be
// appending. This runs a function that internationalizes the name.
// */
// $(document).ready(function() {
//   $('button').click(function() {
//     let $name = $('#name');
//     let iName = inName($name.text()) || function(){};
//     $name.html(iName);
//   });
// });

/*
Simple helper function to scroll to the top of the page. Used by the
Scroll to top button.
 */
function scrollToTop() {
  document.body.scrollTop = 0; // For Chrome, Safari and Opera
  document.documentElement.scrollTop = 0; // For IE and Firefox
}

/*
The next few lines about mouse clicks are for collecting click
Locations. Nothing is currently done with this information other
than logging to the console.
*/
let clickLocations = [];    // initialize array of clickLocations
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
let map;    // declares a global map variable

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

  let locations;  // variable for the

  let mapOptions = {
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
    let locations = [];

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
    let lat = placeData.geometry.location.lat();  // latitude from the place service
    let lon = placeData.geometry.location.lng();  // longitude from the place service
    let name = placeData.formatted_address;   // name of the place from the place service
    let bounds = window.mapBounds;            // current boundaries of the map window

    // marker is an object with additional data about the pin for a single location
    let marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });

    // infoWindows are the little helper windows that open when you click
    // or hover over a pin on a map. They usually contain more information
    // about a location.
    let infoWindow = new google.maps.InfoWindow({
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
    let service = new google.maps.places.PlacesService(map);

    // Iterates through the array of locations, creates a search object for each location
      locations.forEach(function(place){
      // the search request object
      let request = {
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
