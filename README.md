# Project Overview

It's one of my project in FEND with Udacity. In this project I'm given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and we're now left with an application with an incomplete test suite. That's where I come in.

# Getting started
- Download: Click the "Clone or download" button then click "Download ZIP" and soon you'll get a zip file when your download finishes. Unzip the file, open the index.html file on your browser of choice and that's it!
- Clone: Type into your terminal or command prompt the following: $ git clone https://github.com/GhaidaaS/arcade-game-FEND When it finishes cloning the files, open the index.html file on your browser of choice and that's it!

# Code Dependencies
The app is built with the following code dependencies:

- jQuery
- Jasmine
- Google fonts
- Handlebars
- jsapi by Google

# How I complite this project

1- Write a test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty

2- Write a test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty 

3- Write a new test suite named "The menu"

4- Write a test that ensures the menu element is hidden by default
You'll have to analyze the HTML and the CSS to determine how the hiding/showing of the menu element is implemented

5- Write a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display itself when clicked, and does it hide when clicked again?

6- Write a test suite named "Initial Entries"

7- Write a test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container

8- Write a test suite named "New Feed Selection"

9- Write a test that ensures when a new feed is loaded by the loadFeed function that the content actually changes