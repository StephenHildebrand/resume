// Placeholder HTML data snippets
var data = "%data%";
var contact = "%contact%";

var bio = {
    "name": "Stephen F Hildebrand",
    "role": "Software Developer",
    "status": "For hire",
    "contact": {
        "mobile": "(919) 891-0611",
        "email": "sfhildeb@gmail.com",
        "linkedin": "https://www.linkedin.com/in/stephen-f-hildebrand/",
        "github": "StephenHildebrand",
        "location": "Durham, North Carolina"
    },
    "welcomeMsg": "Bright, driven student with academic experience \
    in computer programming and a passion for coding.",
    "skills": [
        "Java", // (2 years)
        "C", // (2 years)
        "Assembly", // (2 years)
        "C++", // (1 year)
        "JavaScript", // (<1 year)
        "HTML/XML", // (<1 year)
        "CSS" // (<1 year)
    ],
    "bioPic": "images/formal.jpg"
}

var education = {
    "schools": [
      {
          "name": "North Carolina State University",
          "location": "Raleigh, North Carolina",
          "degree": "Certificate",
          "major": "Computer Programming",
          "dates": "May, 2015 - December, 2016",
          "url": "https://www.ncsu.edu"
      },
      {
          "name": "Southern College of Optometry",
          "location": "Memphis, Tennessee",
          "degree": "Doctorate (incomplete)",
          "major": "Optometry",
          "dates": "August, 2013 - April, 2015",
          "url": "https://www.sco.edu"
      },
      {
          "name": "North Carolina State University",
          "location": "Raleigh, North Carolina",
          "degree": "Bachelor of Science",
          "major": "Biological Sciences",
          "dates": "August, 2008 - May, 2013",
          "url": "https://www.ncsu.edu"
      },
      {
          "name": "North Carolina State University",
          "location": "Raleigh, North Carolina",
          "degree": "Bachelor of Arts",
          "major": "Spanish Language & Literature",
          "dates": "August, 2008 - May,  2013",
          "url": "https://www.ncsu.edu"
      }
    ],
    "onlineCourses": [
        {
            "title": "JavaScript Basics",
            "school": "Udacity",
            "date": 2017,
            "url": "https://www.udacity.com/"
        }
    ]
}

var work = {
    "jobs": [
        {
            "employer": "Recreational Equipment Inc.",
            "title": "Customer Service (Frontline)",
            "location": "Cary, North Carolina",
            "dates": "May, 2011 - July, 2013",
            "description": "Helped customer choose product that fits their needs. \
            Resolved customer issues. Assisted customers with purchases, exchanges, \
            repairs and/or refunds.\n"
        },
        {
            "employer": "La Pizza Volante",
            "title": "Assistant Manager",
            "location": "Cary, North Carolina",
            "dates": "April, 2008 - August, 2009",
            "description": "Directed restaurant operations. Helped owner with hiring of \
            staff. Managed purchase of supplies from local farmers. Planned and executed \
            business promotion and advertising. Prepared, served and delivered food.\n"
        }
    ],
    display: displayWork
}



var projects = {
    "projects": [
        {
            "title": "Flix Movie Rental Manager",
            "dates": "2016",
            "description": "Description for Flix Movie Rental Manager.",
            "images": [
                "images/placeholder.png",
                "images/placeholder.png"
            ]
        },
        {
            title: "Divi Notes/Tasks for Android",
            dates: "2017",
            description: "Description for Divi Notes/Tasks for Android.",
            images: [
                "images/placeholder.png",
                "images/placeholder.png"
            ]
        }
    ],
    display: displayProjects
}

// $("#main").prepend(HTMLgithub.replace(data, bio.contact.github));
// $("#main").prepend(HTMLlocation.replace(data, bio.contact.location));
// $("#main").prepend(HTMLskills.replace(data, bio.skills));

/*
 1)  Write an if statement that checks for any skills in the bio object.
 2)  If true, .append() HTMLskillsStart to the div with id=header.
 3)  Then .append() the skills to the element with id=skills using
 HTMLskills to format each skill.
 */
if(bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    for (var i = 0; i < bio.skills.length; i++) {
        $("#skills").append(HTMLskills.replace(data, bio.skills[i]));
    }
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


// // Takes in a string of two names and returns an internationalized version
// // that looks like: Cameron PITTMAN.
// function inName(name) {
//     name = name.trim().split(" ");
//     console.log(name);
//     var first = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
//     var last = name[1].toUpperCase();
//     return first + " " + last;
// }
// // inName("sebastian thrun") === "Sebastian THRUN";

function displayEducation() {
    if(education.schools.length > 0) {
        for (sch in education.schools) {
            $("#education").append(HTMLschoolStart);
            var formattedName = HTMLschoolName.replace(data, education.schools[sch].name);
            var formattedDegree = HTMLschoolDegree.replace(data, education.schools[sch].degree);
            var formattedDates = HTMLschoolDates.replace(data, education.schools[sch].dates);
            var formattedLocation = HTMLschoolLocation.replace(data, education.schools[sch].location);
            var formattedMajor = HTMLschoolMajor.replace(data, education.schools[sch].major);

            $(".education-entry").append(formattedName + formattedDegree);
            $(".education-entry").append(formattedDates);
            $(".education-entry").append(formattedLocation);
            $(".education-entry").append(formattedMajor);

        }
    }
}
displayEducation();

/*
 1) Encapsulate display() within the projects object.
 2) projects.display() should .append() all of your projects info to the projects section.
 3) Hint: you'll need to start each new project with a HTMLprojectStart.
 */
function displayProjects() {
    // for (var p = 0; p < projects.length; p++) {
    for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace(data, projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace(data, projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace(data, projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);

        // Check for 1 or more images.
        if (projects.projects[project].images.length > 0) {
            // for (var img = 0; img < projects.images.length; img++) {
            for (image in projects.projects[project].images) {
                var formattedImage = HTMLprojectImage.replace(data, projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
}
displayProjects();

// (1) Write a for-in loop that iterates over all jobs in your work object and
// .append()s a new HTMLworkStart element for each one, (2) formats each
// job's employer with HTMLworkEmployer and each job title with HTMLworkTitle,
// and (3) .append()s a concatenation of employer and title each to the
// element with class work-entry last.
function displayWork() {
    if(work.jobs.length > 0) {
        for (j in work.jobs) {
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace(data, work.jobs[j].employer);
            var formattedTitle = HTMLworkTitle.replace(data, work.jobs[j].title);
            var formattedDates = HTMLworkDates.replace(data, work.jobs[j].dates);
            var formattedDesc = HTMLworkDescription.replace(data, work.jobs[j].description);
            $(".work-entry:last").append(formattedEmployer + " " + formattedTitle);
            $(".work-entry:last").append(formattedDates);
            $(".work-entry:last").append(formattedDesc);
        }
    }
}
displayWork();

// $("#main").prepend(HTMLwelcomeMsg.replace(data, bio.welcomeMsg));
$("#main").prepend(HTMLbioPic.replace(data, bio.bioPic));
// $("#main").prepend(HTMLmobile.replace(data, bio.contact.mobile));
// $("#main").prepend(HTMLemail.replace(data, bio.contact.email));
$("#main").prepend(HTMLheaderRole.replace(data, bio.role));
$("#main").prepend(HTMLheaderName.replace(data, bio.name));


$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);
