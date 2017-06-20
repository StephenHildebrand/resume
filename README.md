# Project Details
## Overview

1. In this project, resume data is stored in four javaScript objects. If you have not already, you may want to get a [Google Maps API key](https://developers.google.com/maps/documentation/javascript/get-api-key), and include it as the value of the `key` parameter when loading the Google Maps API in **index.html**:
<!-- "<script  src="http://maps.googleapis.com/maps/api/js?libraries=places&key=[YOUR_API_KEY]"></script> -->
You may have some initial concerns with placing your API key directly within your JavaScript source files, but rest assured this is perfectly safe. All client-side code must be downloaded by the client; therefore, the client must download this API key - it is not intended to be secret. Google has security measures in place to ensure your key is not abused. **It is not technically possible to make anything secret on the client-side.**

### The GitHub repository should contain the following files:
* **index.html**: The main HTML document. Contains links to all of the CSS and JS resources needed to render the resume, including resumeBuilder.js.
* **js/helper.js**: Contains helper code needed to format the resume and build the map. It also has a few function shells for additional functionality. More on helper.js further down.
* **js/resumeBuilder.js**: Contains JavaScript code and four JavaScript objects containing the resume data used for building the resume.
* **js/jQuery.js**: The jQuery library.
* **css/style.css**: Contains all of the CSS needed to style the page.
* **README.md**: The GitHub readme file.
* and some images in the images directory.

## Getting Started...
### Your process:
The resume has four distinct sections: work, education, projects and a header with biographical information. You’ll need to:

1. The four JavaScript objects contained within resumeBuilder.js are defined as follows.
  * `bio` contains:

            name : string
            role : string
            contacts : an object with
                  mobile: string
                  email: string
                  github: string
                  twitter: string (optional)
                  location: string
            welcomeMessage: string
            skills: array of strings
            biopic: string url
            display: function taking no parameters

  * `education` contains:

            schools: array of objects with
                 name: string
                 location: string
                 degree: string
                 majors: array of strings
                 dates: string (works with a hyphen between them)
                 url: string
            onlineCourses: array of objects with
                 title: string
                 school: string
                 dates: string (works with a hyphen between them)
                 url: string
            display: function taking no parameters

  * `work` contains

            jobs: array of objects with
                 employer: string
                 title: string
                 location: string
                 dates: string (Can be 'in progress')
                 description: string
            display: function taking no parameters

  * `projects` contains:

            projects: array of objects with
                  title: string
                  dates: string (works with a hyphen between them)
                  description: string
                  images: array with string urls
            display: function taking no parameters

2. Iterates through each javaScript object and appends its information to index.html in the correct section.
  * First off, uses jQuery’s `selector.append()` and `selector.prepend()` functions to modify index.html. `selector.append()` makes an element appear at the end of a selected section. `selector.prepend()` makes an element appear at the beginning of a selected section.
    * Pay close attention to the ids of the `<div>`s in index.html and the HTML snippets in helper.js. They’ll be very useful as jQuery selectors for `selector.append()` and `selector.prepend()`
  * Also uses the JavaScript method `string.replace(old, new)` to swap out all the placeholder text (e.g. `%data%`) for data from your resume JSON objects.

## TODO: Implement the interactive location map as follows:
3. The resume includes an interactive map. Do the following to add it.
  * In resumeBuilder.js, append the googleMap string to `<div id=”mapDiv”>`.
  * In index.html, uncomment the Google script element: `<script type="text/javascript" src="http://maps.googleapis.com/maps/api/js?libraries=places"></script>`
  * In helper.js, at the bottom of the file, uncomment code to initialize map and set fitBounds.
4. All of your code for adding elements to the resume should be contained within functions.
5. As described in the javaScript object schema, each 'display' function should be encapsulated within the javaScript object it displays in the resume. For instance, your 'display' function for appending 'work' experience data to the resume should be encapsulated within the 'work' javaScript object. The 'display' function can be encapsulated within the 'work' javaScript object definition in the same way other properties are defined there, or it can be encapsulated later in the file using dot notation. For example: `work.display =`
6. It’s possible to make additional information show up when you click on the pins in the map. Check out line 174 in helper.js and the Google Maps API to get started.
