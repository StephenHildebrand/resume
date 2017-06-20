/*
resumeBuilder.js contains code that builds the resume
dynamically when the  website, index.html, is opened.

Example Link Creation:
var a = document.createElement('a');
var linkText = document.createTextNode("my title text");
a.appendChild(linkText);
a.title = "my title text";
a.href = "http://example.com";
document.body.appendChild(a);
*/

var headerEntry = "#header";

var bio = {
  name: "Stephen Hildebrand",
  role: "Software Developer (site under construction)",
  contacts: {
    // NEW
    mobile: {
      text: "(919) 891-0611",
      url: "tel:+19198910611",
      icon: "images/icons/phone"
    },
    email: {
      text: "sfhildeb@gmail.com",
      url: "mailto:sfhildeb@gmail.com",
      icon: "images/icons/email"
    },
    twitter: {
      text: "@stephenhildy",
      url: "https://twitter.com/stephenhildy",
      icon: "images/icons/twitter"
    },
    github: {
      text: "StephenHildebrand",
      url: "https://github.com/StephenHildebrand",
      icon: "images/icons/github"
    },
    linkedin: {
      text: "stephen-hildebrand",
      url: "https://www.linkedin.com/in/stephen-hildebrand/",
      icon: "images/icons/linkedin"
    },
    location: {
      text: "Durham, NC",
      url: "https://www.google.com/maps/place/Research+Triangle+Park,+Durham,+NC/@35.9056729,-78.9049698,13z/data=!3m1!4b1!4m5!3m4!1s0x89acef904ec94683:0x202efebab527bbcc!8m2!3d35.8991678!4d-78.8636402",
      icon: "images/icons/location"
    }
    // OLD
    // mobile: "(919) 891-0611",
    // email: "sfhildeb@gmail.com",
    // twitter: "@stephenhildy",
    // github: "StephenHildebrand",
    // location: "Durham, NC"
  },
  welcomeMsg: "Bright, driven student with a diverse academic background, \
  a focus on computer programming and a passion for coding.",
  status: "For hire",
  skills: [
    "Java, C, Assembly (2 years)",
    "JavaScript, HTML, CSS (<1 year)",
    "Android/XML (<1 year)",
    "Spring (<1 year)",
    "Linux server builder/maintainer (personal)",
    "Fluent in English/Spanish",
  ],
  bioPic: "images/formal.jpg",
  display: displayBio
}

var education = {
  "schools": [
    {
      name: "North Carolina State University",
      location: "Raleigh, NC",
      degree: "Undergraduate Certificate",
      major: "Computer Programming",
      dates: "2015-2016",
      url: "https://www.ncsu.edu"
    },
    {
      name: "Southern College of Optometry",
      location: "Memphis, TN",
      degree: "Doctor of Optometry (incomplete)",
      major: "Optometry",
      dates: "2013-2015",
      url: "https://www.sco.edu"
    },
    {
      name: "North Carolina State University",
      location: "Raleigh, NC",
      degree: "Bachelor of Science",
      major: "Biological Sciences",
      dates: "2008-2013",
      url: "https://www.ncsu.edu"
    },
    {
      name: "North Carolina State University",
      location: "Raleigh, NC",
      degree: "Bachelor of Arts",
      major: "Spanish Language & Literature",
      dates: "2008-2013",
      url: "https://www.ncsu.edu"
    }
  ],
  "onlineCourses": [
    {
      title: "JavaScript Basics",
      school: "Udacity",
      dates: "2017",
      url: "https://www.udacity.com/"
    }
  ],
  display: displayEducation
}

var work = {
  "jobs": [
    {
      employer: "Recreational Equipment Inc.",
      title: "Customer Service (Front-line)",
      location: "Cary, NC",
      dates: "May 2011 - Jul 2013",
      description: "Resolved customer issues. Assisted customers with \
      exchanges, repairs, refunds and purchasing product that meets \
      their unique needs.\n"
    },
    {
      employer: "La Pizza Volante",
      title: "Assistant Manager",
      location: "Cary, NC",
      dates: "Apr 2008 - Aug 2009",
      description: "Directed restaurant operations. Helped owner with \
      hiring of staff. Managed purchase of supplies. Planned and executed \
      business promotion and advertising. Prepared, served and delivered \
      food.\n"
    }
  ],
  display: displayWork
}

var projects = {
  "projects": [
    {
      title: "Movie Manager",
      dates: "2016",
      description: "Movie rental manager written in Java. Allows user to \
      check-out movies from a database containing limited digital copies. \
      Allows users to track watched movies. Allows for multiple users.",
      images: [
        "images/placeholder.png",
        "images/placeholder.png"
      ],
      url: "https://github.com/StephenHildebrand/MovieManager"
    },
    {
      title: "Spell-check",
      dates: "2016",
      description: "Interactive command-line application written in C. \
      Allows user to check spelling of a text file using default or custom \
      word dictionary.",
      images: [
        "images/placeholder.png",
        "images/placeholder.png"
      ],
      url: "https://github.com/StephenHildebrand/spellcheck"
    },
    {
      title: "Divi Notes",
        dates: "2017",
        description: "Notes manager written in Java for Android. Implements \
        unique interface for seeing all notes from a single overview. ",
        images: [
          "images/placeholder.png",
          "images/placeholder.png"
        ],
        url: "https://github.com/StephenHildebrand/"
      }
  ],
  display: displayProjects
}

/*
 $(document).click() is a jQuery event handler on the page, which is a
 fancy way of saying that it will hold some code that runs every time a
 user clicks on the page. The function (that doesn't have a name, making
 it an anonymous function) that gets passed into .click() will be run
 every time a user clicks on the page. Also, loc is a jQuery event object
 that contains information about the click event.
 */
$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x, y);
});

// Takes in a string of two names and returns an internationalized version
// that looks like: Cameron PITTMAN.
function inName(name) {
  name = name.trim().split(" ");
  console.log(name);
  var first = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
  var last = name[1].toUpperCase();
  return first + " " + last;
}

/*
Function to display the bio. jQuery’s selector.append() and selector.prepend()
functions are used to modify index.html.

selector.append() makes an element appear at the end of a selected section.
selector.prepend() makes an element appear at the beginning of a selected section.
*/
function displayBio() {

  $(headerEntry).prepend(HTMLheaderRole.replace("%data%", bio.role));
  $(headerEntry).prepend(HTMLheaderName.replace("%data%", bio.name));

  var topContactsEntry = "#topContacts";
  $(topContactsEntry).append(HTMLmobile.replace("%data%", bio.contacts.mobile.text).replace("#", bio.contacts.mobile.url));
  $(topContactsEntry).append(HTMLemail.replace("%data%", bio.contacts.email.text).replace("#", bio.contacts.email.url));
  $(topContactsEntry).append(HTMLgithub.replace("%data%", bio.contacts.github.text).replace("#", bio.contacts.github.url));
  $(topContactsEntry).append(HTMLtwitter.replace("%data%", bio.contacts.twitter.text).replace("#", bio.contacts.twitter.url));
  $(topContactsEntry).append(HTMLlocation.replace("%data%", bio.contacts.location.text).replace("#", bio.contacts.location.url));


  $(headerEntry).append(HTMLbioPic.replace("%data%", bio.bioPic));
  $(headerEntry).append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg));

  /*
  Display the bio skills.
  1)  Write an if statement that checks for any skills in the bio object.
  2)  If true, .append() HTMLskillsStart to the div with id=header.
  3)  Then .append() the skills to the element with id=skills using
  HTMLskills to format each skill.
  */
  if(bio.skills.length > 0) {
      $(headerEntry).append(HTMLskillsStart);
      for (var i = 0; i < bio.skills.length; i++) {
          $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
      }
  }
}
bio.display();

/*
Displays the education information.
*/
function displayEducation() {
  if(education.schools.length > 0) {
    $("#education").append(HTMLschoolStart);
    for (sch in education.schools) {
      // var formattedName = HTMLschoolName.replace("%data%", education.schools[sch].name).replace("%url%", education.schools[sch].url);
      var formattedName = HTMLschoolName.replace("%data%", education.schools[sch].name).replace("#", education.schools[sch].url);
      var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[sch].degree);
      var formattedDates = HTMLschoolDates.replace("%data%", education.schools[sch].dates);
      var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[sch].location);
      var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[sch].major);

      var eduEntry = ".education-entry";
      $(eduEntry).append(formattedName + formattedDegree);
      $(eduEntry).append(formattedDates);
      $(eduEntry).append(formattedLocation);
      $(eduEntry).append(formattedMajor);
    }
  }
}
education.display();

/*
Appends all project info to the Projects section. Each new project is started
using HTMLprojectStart from helper.js.
*/
function displayProjects() {
  // for (var p = 0; p < projects.length; p++) {
  if (projects.projects.length > 0) {
    for (proj in projects.projects) {
      $("#projects").append(HTMLprojectStart);

      var formattedTitle = HTMLprojectTitle.replace(
          "%data%", projects.projects[proj].title).replace(
          "#", projects.projects[proj].url);
      var projEntry = $(".proj-entry:last");

      projEntry.append(formattedTitle);

      var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[proj].dates);
      projEntry.append(formattedDates);

      var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[proj].description);
      projEntry.append(formattedDescription);

      // Check for 1 or more images.
      if (projects.projects[proj].images.length > 0) {
        // for (var img = 0; img < projects.images.length; img++) {
        for (image in projects.projects[proj].images) {
          var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[proj].images[image]);
          $(projEntry).append(formattedImage);
        }
      }
    }
  }
}
// displayProjects();
projects.display();

// (1) Write a for-in loop that iterates over all jobs in your work object and
// .append()s a new HTMLworkStart element for each one, (2) formats each
// job's employer with HTMLworkEmployer and each job title with HTMLworkTitle,
// and (3) .append()s a concatenation of employer and title each to the
// element with class work-entry last.
function displayWork() {
  if(work.jobs.length > 0) {
    for (j in work.jobs) {
      $("#workExperience").append(HTMLworkStart);
      var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[j].employer);
      var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[j].title);
      var formattedDates = HTMLworkDates.replace("%data%", work.jobs[j].dates);
      var formattedDesc = HTMLworkDescription.replace("%data%", work.jobs[j].description);

      var workEntry = $(".work-entry:last");
      workEntry.append(formattedEmployer + " " + formattedTitle);
      workEntry.append(formattedDates);
      workEntry.append(formattedDesc);
    }
  }
}
// displayWork();
work.display();

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);

var footEntry = $("#footerContacts");
footEntry.append(HTMLmobile.replace("%data%", bio.contacts.mobile.text).replace("#", bio.contacts.mobile.url));
footEntry.append(HTMLemail.replace("%data%", bio.contacts.email.text).replace("#", bio.contacts.email.url));
footEntry.append(HTMLgithub.replace("%data%", bio.contacts.github.text).replace("#", bio.contacts.github.url));
footEntry.append(HTMLtwitter.replace("%data%", bio.contacts.twitter.text).replace("#", bio.contacts.twitter.url));
footEntry.append(HTMLlocation.replace("%data%", bio.contacts.location.text).replace("#", bio.contacts.location.url));

