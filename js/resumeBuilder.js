/*
resumeBuilder.js contains code that builds the resume
dynamically when the  website, index.html, is opened.
*/

const $headerEntry = $('#header');

const bio = {
  name: 'Stephen Hildebrand',
  role: 'Software Developer',
  contacts: {
    mobile: {
      text: '(919) 891-0611',
      url: 'tel:+19198910611',
      icon: 'images/icons/mobile.png',
    },
    email: {
      text: 'sfhildeb@gmail.com',
      url: 'mailto:sfhildeb@gmail.com',
      icon: 'images/icons/email.png',
    },
    twitter: {
      text: '@stephenhildy',
      url: 'https://twitter.com/stephenhildy',
      icon: 'images/icons/twitter.png',
    },
    github: {
      text: 'StephenHildebrand',
      url: 'https://github.com/StephenHildebrand',
      icon: 'images/icons/github.png',
    },
    linkedin: {
      text: 'stephen-hildebrand',
      url: 'https://www.linkedin.com/in/stephen-hildebrand/',
      icon: 'images/icons/linkedin.png',
    },
    location: {
      text: 'Durham, NC',
      url: 'https://goo.gl/maps/1raYiUz6vGC2',
      icon: 'images/icons/location.png',
    },
  },
  status: 'Seeking position as an entry-level software developer.',
  welcomeMsg: `Entry-level software engineer with a diverse academic background, a focus on
  programming, a love for learning and a passion for software development.`,
  skills: [
    'Java (2 years)',
    'C/C++, Assembly (1 year)',
    'JavaScript/HTML/CSS (<1 year)',
    'Android, XML, Spring (<6 months)',
    'Eclipse, IntelliJ IDEs, Visual Studio, Android Studio',
    'Git, GitHub, VCS',
    'Windows, UNIX/Linux, Android',
    'Linux server builder/maintainer (personal)',
    'Effective worker in both independent and team settings',
    'Fluent in English/Spanish',
  ],
  bioPic: 'images/formal.jpg',
  display: displayBio,
};

const education = {
  schools: [
    {
      name: 'North Carolina State University',
      location: 'Raleigh, NC',
      degree: 'Certificate',
      major: 'Computer Programming',
      dates: '2015-2016',
      url: 'https://www.ncsu.edu',
    },
    {
      name: 'Southern College of Optometry',
      location: 'Memphis, TN',
      degree: 'Doctor of Optometry (incomplete)',
      major: 'Optometry',
      dates: '2013-2015',
      url: 'https://www.sco.edu',
    },
    {
      name: 'North Carolina State University',
      location: 'Raleigh, NC',
      degree: 'Bachelor of Science',
      major: 'Biological Sciences',
      dates: '2008-2013',
      url: 'https://www.ncsu.edu',
    },
    {
      name: 'North Carolina State University',
      location: 'Raleigh, NC',
      degree: 'Bachelor of Arts',
      major: 'Spanish Language & Literature',
      dates: '2008-2013',
      url: 'https://www.ncsu.edu',
    },
  ],
  courses: [
    {
      title: 'Introduction to Computer Programming - Java',
      number: 'CSC 116',
    },
    {
      title: 'Programming Concepts in Java',
      number: 'CSC 216',
    },
    {
      title: 'Applied Discrete Mathematics',
      number: 'CSC 226',
    },
    {
      title: 'C and Software Tools',
      number: 'CSC 230',
    },
    {
      title: 'Computer Organization & Assembly Language',
      number: 'CSC 236',
    },
    {
      title: 'Concepts & Facilities of Operating Systems',
      number: 'CSC 246',
    },
    {
      title: 'Data Structures',
      number: 'CSC 316',
    },
    {
      title: 'Automata, Grammars & Computability',
      number: 'CSC 333',
    },
  ],
  display: displayEducation,
};

const work = {
  jobs: [
    {
      employer: 'Recreational Equipment Inc.',
      title: 'Customer Service (Front-line)',
      location: 'Cary, NC',
      dates: 'May 2011 - Jul 2013',
      url: 'https://www.rei.com/about-rei.html',
      description: `Resolved customer issues. Assisted customers with exchanges,
      repairs, refunds and purchasing product that meets their unique needs.`,
    },
    {
      employer: 'La Pizza Volante',
      title: 'Assistant Manager',
      location: 'Cary, NC',
      dates: 'Apr 2008 - Aug 2009',
      url: 'https://www.facebook.com/La-Pizza-Volante-243291155598/',
      description: `Directed restaurant operations. Helped owner with hiring of staff.
      Managed purchase of supplies. Planned and executed business promotion and advertising.
      Prepared, served and delivered product.`,
    },
  ],
  display: displayWork,
};

const projects = {
  projects: [
    {
      title: 'Trax',
      dates: '2017',
      description: `Tracking application for a database of things written in Java. Allows use
      client accounts to create a thing request queue to be filled according to thing availability
      and thing queue priority.`,
      images: [
        'images/screens/trax_screen1.png',
        'images/screens/trax_screen2.png',
      ],
      url: 'https://github.com/StephenHildebrand/trax',
    },
    {
      title: 'SpellChecker using Hash Tables',
      dates: '2017',
      description: `Notes manager written in Java for Android. Implements
      unique interface for seeing all notes from a single overview.`,
      images: [
        'images/placeholder_small.png',
        'images/placeholder_small.png',
      ],
      url: 'https://github.com/StephenHildebrand/',
    },
    {
      title: 'Minimum Spanning Trees on Weighted Graphs',
      dates: '2017',
      description: `Uses Kruskal's MST algorithm to read a list of edges and analyzes them
      to print a heap, MST, and an adjacency list.`,
      images: [
        'images/placeholder_small.png',
        'images/placeholder_small.png',
      ],
      url: 'https://github.com/StephenHildebrand/',
    },
    {
      title: 'Spellcheck',
      dates: '2016',
      description: `Interactive command-line application written in C. Allows user to check spelling
      of a text file using default or custom word dictionary.`,
      images: [
        'images/placeholder_small.png',
        'images/placeholder_small.png',
      ],
      url: 'https://github.com/StephenHildebrand/spellcheck',
    },
  ],
  display: displayProjects,
};

/*
 $(document).click() is a jQuery event handler on the page, which is a
 fancy way of saying that it will hold some code that runs every time a
 user clicks on the page. The function (that doesn't have a name, making
 it an anonymous function) that gets passed into .click() will be run
 every time a user clicks on the page. Also, loc is a jQuery event object
 that contains information about the click event.
 */
$(document).click(function (loc) {
  const x = loc.pageX;
  const y = loc.pageY;
  logClicks(x, y);
});

// // Takes in a string of two names and returns an internationalized version
// // that looks like: Cameron PITTMAN.
// function inName(name) {
//   name = name.trim().split(' ');
//   console.log(name);
//   var first = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
//   var last = name[1].toUpperCase();
//   return first + ' ' + last;
// }

/*
Function to display the bio. jQuery’s selector.append() and selector.prepend()
functions are used to modify index.html.

selector.append() makes an element appear at the end of a selected section.
selector.prepend() makes an element appear at the beginning of a selected section.
*/
function displayBio() {

  $headerEntry.prepend(HTMLheaderRole.replace('%data%', bio.role));
  $headerEntry.prepend(HTMLheaderName.replace('%data%', bio.name));

  $('#bio').prepend(HTMLbioStart);
  const $bioEntry = $('.bio-entry');

  $bioEntry.append(HTMLbioPic.replace('%data%', bio.bioPic));
  $bioEntry.append(HTMLwelcomeMsg.replace('%data%', bio.welcomeMsg));

  // $bioEntry.append(HTMLstatus.replace('%data%', bio.status));

  /*
  Display the bio skills.
  1)  Write an if statement that checks for any skills in the bio object.
  2)  If true, .append() HTMLskillsStart to the div with id=header.
  3)  Then .append() the skills to the element with id=skills using
  HTMLskills to format each skill.
  */
  if (bio.skills.length > 0) {
    $bioEntry.append(HTMLskillsStart);
    for (let i = 0; i < bio.skills.length; i++) {
      $('#skills').append(HTMLskills.replace('%data%', bio.skills[i]));
    }
  }

  const $topContactsEntry = $('#topContacts');
  $topContactsEntry.append(HTMLmobileIcon.replace(
    '#', bio.contacts.mobile.url).replace('%data%', bio.contacts.mobile.icon)
  );
  $topContactsEntry.append(HTMLemailIcon.replace(
    '#', bio.contacts.email.url).replace('%data%', bio.contacts.email.icon)
  );
  $topContactsEntry.append(HTMLgithubIcon.replace(
    '#', bio.contacts.github.url).replace('%data%', bio.contacts.github.icon)
  );
  $topContactsEntry.append(HTMLtwitterIcon.replace(
    '#', bio.contacts.twitter.url).replace('%data%', bio.contacts.twitter.icon)
  );
  $topContactsEntry.append(HTMLlocationIcon.replace(
    '#', bio.contacts.location.url).replace('%data%', bio.contacts.location.icon)
  );
}

bio.display();

/*
Displays the education information.
*/
function displayEducation() {
  if (education.schools.length > 0) {
    $('#education').append(HTMLschoolStart);

    let $eduEntry = $('.education-entry');

    // Schools
    for (let sch in education.schools) {
      let formattedName = HTMLschoolName.replace(
        '%data%', education.schools[sch].name).replace('#', education.schools[sch].url);
      let formattedDegree = HTMLschoolDegree.replace('%data%', education.schools[sch].degree);
      let formattedDates = HTMLschoolDates.replace('%data%', education.schools[sch].dates);
      let formattedLocation = HTMLschoolLocation.replace('%data%', education.schools[sch].location);
      let formattedMajor = HTMLschoolMajor.replace('%data%', education.schools[sch].major);
      $eduEntry.append(formattedName + formattedDegree);
      $eduEntry.append(formattedLocation);
      $eduEntry.append(formattedDates);
      $eduEntry.append(formattedMajor);
    }

    // Related Coursework
    $eduEntry.append(HTMLcoursesStart);
    for (let crs in education.courses) {
      let formattedCourse = HTMLcourses.replace(
       '%data%', education.courses[crs].title).replace('#', education.courses[crs].number);
      $eduEntry.append(formattedCourse);
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
    for (let proj in projects.projects) {
      $('#projects').append(HTMLprojectStart);

      let formattedTitle = HTMLprojectTitle.replace(
        '%data%', projects.projects[proj].title).replace('#', projects.projects[proj].url);
      const $projEntry = $('.proj-entry:last');

      $projEntry.append(formattedTitle);

      let formattedDates = HTMLprojectDates.replace('%data%', projects.projects[proj].dates);
      $projEntry.append(formattedDates);

      let formattedDescription = HTMLprojectDescription.replace(
        '%data%', projects.projects[proj].description);
      $projEntry.append(formattedDescription);

      // Check for 1 or more images.
      if (projects.projects[proj].images.length > 0) {
        for (let img in projects.projects[proj].images) {
          //noinspection JSUnfilteredForInLoop
          let $formattedImage = HTMLprojectImage.replace('#', projects.projects[proj].images[img]);
          $($projEntry).append($formattedImage);
        }
      }
    }
  }
}

projects.display();

// (1) Write a for-in loop that iterates over all jobs in your work object and
// .append()s a new HTMLworkStart element for each one, (2) formats each
// job's employer with HTMLworkEmployer and each job title with HTMLworkTitle,
// and (3) .append()s a concatenation of employer and title each to the
// element with class work-entry last.
function displayWork() {
  if (work.jobs.length > 0) {
    for (let j in work.jobs) {
      $('#workExperience').append(HTMLworkStart);
      let $formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[j].employer).replace(
        '#', work.jobs[j].url);
      let $formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[j].title);
      let $formattedDates = HTMLworkDates.replace('%data%', work.jobs[j].dates);
      let $formattedDesc = HTMLworkDescription.replace('%data%', work.jobs[j].description);
      let $formattedLocation = HTMLworkLocation.replace('%data%', work.jobs[j].location);

      let $workEntry = $('.work-entry:last');
      $workEntry.append($formattedEmployer + ' ' + $formattedTitle);
      $workEntry.append($formattedLocation);
      $workEntry.append($formattedDates);
      $workEntry.append($formattedDesc);
    }
  }
}

// displayWork();
work.display();

// $('#mapDiv').append(googleMap);

const $footContactsEntry = $('#footContacts');
$footContactsEntry.append(
  HTMLmobileIcon.replace('#', bio.contacts.mobile.url).replace('%data%', bio.contacts.mobile.icon)
);
$footContactsEntry.append(
  HTMLemailIcon.replace('#', bio.contacts.email.url).replace('%data%', bio.contacts.email.icon)
);
$footContactsEntry.append(
  HTMLgithubIcon.replace('#', bio.contacts.github.url).replace('%data%', bio.contacts.github.icon)
);
$footContactsEntry.append(HTMLtwitterIcon.replace(
  '#', bio.contacts.twitter.url).replace('%data%', bio.contacts.twitter.icon)
);
$footContactsEntry.append(HTMLlocationIcon.replace(
  '#', bio.contacts.location.url).replace('%data%', bio.contacts.location.icon)
);

$('#lets-connect').append(footerButton);
