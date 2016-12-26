/*
This is empty on purpose! Your code to build the resume will go here.
 */
/*var name = "Vicky Vishal";
var role = "web developer";
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedrole = HTMLheaderRole.replace("%data%", role);
$("#header").prepend(formattedrole);
$("#header").prepend(formattedName); */

var bio = {
	"name" : "Vicky Vishal",
	"role" : "Web Developer",
	"contacts": [ 
		{
		"mobile" : "9776973925",
		"email" : "vicky.vishal.sahu@gmail.com",
		"twitter" : "@realivishals",
		"github" : "vickyvishal",
		"location": "Bangalore"
		}],
	"welcomeMessage" : "I am a Frontend Wizard. A wizard is never late nor he is early, he arrives precisely in the right time i.e when you want to design great responsive website",
	"skills" : [ "HTML5", "JavaScript", "CSS3", "J2EE", "Wizard" ],
	"bioPic": "images/fry.jpg"
}

var education = {
	"schools" : [
		{
		"name" : "Institute of Technical and Education Research",
		"location" : "Bhubaneswar",
		"date" : "2012-2016",
		"degree" : "Bachelor in Technology",
		"major" : "Computer Science and Engineering"
		},
		{
		"name" : "Bhagya College of Science",
		"location" : "Bhubaneswar",
		"date" : "2009-2011",
		"degree": "CHSE",
		"major" : "Science"
		},
		{
		"name" : "St Vincents Convent School",
		"location" : "Berhampur",
		"date" : "Passed 2009",
		"degree" : "CISCE",
		"major" : "Science"
		}],
	
	"online" :[
		{
		"title":  "Frontend developer-Nano Degree",
		"school" : "Udacity",
		"date" : "Deceember 2016",
		"url" : "https://classroom.udacity.com/nanodegrees/nd001/syllabus"
		}]
	
}

var work = {
	"jobs" : [
		{
		"employer" : "Directi",
		"title" : "Application Support Specialist",
		"location" : "Bangalore",
		"dates" : "26th June to 01st December",
		"description" : "Trobuleshooting the ios and android app. Taking queries from end customer and solving it. Queries include payment gateway failure, balance mismatch, product support."
		},
	
		{
		"employer" : "Defacto",
		"title" : "QuizMaster",
		"location" : "Bhubaneswar",
		"dates" : "1st June 2014 to 1st August 2015",
		"description" : "Organize General quiz. Prepare awesome question which has awesome answers. Make the quiz session as interactive as possible."
		}]
}

var projects = {
	"projects" : [
		{
		"title" : "Smart room control",
		"date" : "Jan to March 2016",
		"description" : "Save elctricity which is wasted due to human ignorance",
		"image" : ["images/atmel.jpg"]
		},
	
		{
		"title" : "Project Mayhem",
		"date" : "1999",
		"description" : "To reset the economy debt",
		"image" : ['images/projectMayhem.jpg']
		}]
}

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedrole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedrole);
$("#header").prepend(formattedName);

function displayContact() {
	for (contact in bio.contacts) {
		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts[contact].mobile);
		$('#topContacts').append(formattedMobile);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts[contact].email);
		$('#topContacts').append(formattedEmail);
		var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts[contact].twitter);
		$('#topContacts').append(formattedTwitter);
		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts[contact].github);
		$('#topContacts').append(formattedGithub);
		var formattedlocation = HTMLlocation.replace("%data%", bio.contacts[contact].location);
		$('#topContacts').append(formattedlocation);
	}
}
displayContact();
	
var formattedbioPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(formattedbioPic);
var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedwelcomeMsg);
	

if(bio.skills.length > 0){
	$("#header").append(HTMLskillsStart);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
	$("#skills").append(formattedSkill);
}

function displayWork() {
	for(job in work.jobs){
		$('#workExperience').append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$('.work-entry:last').append(formattedEmployerTitle);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$('.work-entry:last').append(formattedLocation);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$('.work-entry:last').append(formattedDates);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$('.work-entry:last').append(formattedDescription);	
	}
}
displayWork();

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x,y);
});

function locationizer(work_obj) {
	var locationArray = [];
	
	for(job in work_obj.jobs) {
		var newLocation = work_obj.jobs[job].location;
		locationArray.push(newLocation);
	}
	return locationArray;
}
console.log(locationizer(work));

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].date);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);
		projects.projects[project].image.forEach(function(img){
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].image);
				$(".project-entry:last").append(formattedImage);
		})
	}
}

projects.display();

/*function projectimage() {
	
}
projectimage();*/

function displayeducation() {
	for (edu in education.schools) { 
	$("#education").append(HTMLschoolStart);
	var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[edu].name);
	$(".education-entry:last").append(formattedschoolName);
	var formattedschoolCity = HTMLschoolLocation.replace("%data%", education.schools[edu].location);
	$(".education-entry:last").append(formattedschoolCity);
	var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[edu].degree);
	$(".education-entry:last").append(formattedschoolDegree);
	var formattedschoolDate = HTMLschoolDates.replace("%data%", education.schools[edu].date);
	$(".education-entry:last").append(formattedschoolDate);
	var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[edu].major);
	$(".education-entry:last").append(formattedschoolMajor);	
	}
}
displayeducation();

function displayonline(){
	for (edu in education.online) {
		$(".education-entry:last").append(HTMLonlineClasses);
		var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.online[edu].title);
		$(".education-entry:last").append(formattedonlineTitle);
		var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.online[edu].school);
		$(".education-entry:last").append(formattedonlineSchool);
		var formattedonlineDates = HTMLonlineDates.replace("%data%", education.online[edu].date);
		$(".education-entry:last").append(formattedonlineDates);
		var formattedonlineURL = HTMLonlineURL.replace("%data%", education.online[edu].url);
		$(".education-entry:last").append(formattedonlineURL);
	}
}
displayonline(); 


$("#mapDiv").append(googleMap);
