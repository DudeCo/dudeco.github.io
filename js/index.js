var dudecotext = document.getElementById("wearedudecotext");
var dudeimage = document.getElementById("dudeimage");
var notes = document.getElementById("notes");
var gamesText = document.getElementById("gamesh1text");
var aboutText = document.getElementById("abouth1text");
var crewText = document.getElementById("crewh1text");
var styler = document.getElementById("styler");
var doc = document.body;
var debugInput;
var witchingHour = false;
var time = new Date();
var tick = 0, rotateSpd = 2;

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

function random(min = 0, max = 9999) {
	return (Math.trunc((Math.random() * ((max + 1) - min) + min)));
}

function stopInterval(interval) {
	clearInterval(interval);
}

var notesCase = random(1, 26);

var notesInterval = setInterval(function() {
	if((time.getHours() != 2) && (witchingHour == false)) {
		switch(notesCase) {
			case 1:
				notes.innerHTML = "<em>Wallruns in Games</em>: Super Freaking Simple<br><em>Wallruns in Real Life</em>: Nope. I'm outta here. ";
				break;
			case 2:
				notes.innerHTML = "*backflips off wall*<br>\"I'm GAY!\"";
				break;
			case 3:
				notes.innerHTML = "Nope... Nope Nope Nope...<br>...<br>NO...<br>JUST... NO!..";
				break;
			case 4:
				notes.innerHTML = "Hey, that's pretty good! ";
				break;
			case 5:
				notes.innerHTML = "GarbageCanLary's my cousin. Say Hi!<br>\"<span style=\"font-size: 50%\">hi</span>\"<br>He's pretty far away. ";
				break;
			case 6:
				notes.innerHTML = "Sticks and stones can break my bones...<br>But a metal pipe would probably be more<br><strong>SUPER EFFECTIVE</strong>";
				break;
			case 7:
				notes.innerHTML = "Mario Jumps<br>Sonic Runs<br>I'm Just a Normal Human";
				break;
			case 8:
				notes.innerHTML = "<em>One Hello Can Change Your Life. </em><br>\"<span class=\"nosifer\">HIA GEORGIE</span>\" ~ Pennywise, IT 1990/2017";
				break;
			case 9:
				notes.innerHTML = "Where's the right HDMI cable!?!";
				break;
			case 10:
				notes.innerHTML = "Wow. That's one big computer. ";
				break;
			case 11:
				notes.innerHTML = "Group huddle!";
				break;
			case 12:
				notes.innerHTML = "Repeating functions are <strong><em>SO</em></strong> annoying. ";
				break;
			case 13:
				notes.innerHTML = "<em>Documents Made</em>: " + (notesCase * 13) + "<br><em>Documents Saved</em>: 10<br><em>Ideas Made</em>: " + (notesCase * 22) + "<br><em>Actually Good Ideas</em>: 0";
				break;
			case 14:
				notes.innerHTML = "\"There's a snake one the screen! \" ~ Not Woody";
				break;
			case 15:
				notes.innerHTML = "17 years of school for a handshake and a piece of paper!?!<br><img style=\"border-radius: 50%\" src=\"assets/jackiechanmeme.png\">";
				break;
			case 16:
				notes.innerHTML = "I think you need a team for teamwork to work... ";
				break;
			case 17:
				notes.innerHTML = "I was laying in bed, when suddenly, I had an idea!<br>Make random text display in this div tag. ";
				break;
			case 18:
				notes.innerHTML = "GitHub Incorperated, you're my best friendo. ";
				break;
			case 19:
				notes.innerHTML = "Crazy, ain't it? ";
				break;
			case 20:
				notes.innerHTML = "I look up and I see...<br>A crappy computer at a table with a crappy mouse...<br>What did you think was going to be there, <em>Lamborghini 88 Tauri</em>?<br>Yeah. Not happening.";
				break;
			case 21:
				notes.innerHTML = "That's one purple dragon... ";
				break;
			case 22:
				notes.innerHTML = "Don't let me down, unless you're picking me up. ";
				break;
			case 23:
				notes.innerHTML = "<span class=\"coda\">:D</span>";
				break;
			case 24:
				notes.innerHTML = "<span class=\"coda\">: )</span>";
				break;
			case 25:
				notes.innerHTML = "Hail Lord Cthulhu! ";
				break;
			case 26:
				notes.innerHTML = "<span class=\"nosifer\">Wait for 3:00 AM :)<br>It's " + (time.getHours() + 1) + "</span>"
			default:
				notes.innerHTML = "Googled? ";
		}
	} else {
		notes.innerHTML = "<span class=\"imaginaryFriend\">IT'S TIME!</span>";
	}
}, 15);

console.log("Notes Case: " + notesCase);

console.log("Program Ran");

window.onmousemove = logMouseMove;

function logMouseMove(event) {
	var e = e || window.event;
	mousePos = { x: e.clientX, y: e.clientY};
}

/*setInterval(function() {
	if(time.getHours() == 2) {
		glitchOut();
	} else {
		gamesText.innerHTML = "GAMES";
		aboutText.innerHTML = "ABOUT US";
		crewText.innerHTML = "OUR CREW";
	}
}, 10)*/

function glitchOut() {
	var gamesGlitchText = setInterval(function() {bobbleText(gamesText)}, 30);
	var aboutGlitchText = setInterval(function() {bobbleText(aboutText)}, 21);
	var crewGlitchText = setInterval(function() {bobbleText(crewText)}, 19);
	var dudecoGlitchText = setInterval(function() {bobbleText(dudecotext)}, 20);
	dudeimage.innerHTML = "<img style=\"width: 25%; border-radius: 50%; filter: blur(20px)\" src=\"assets/icon.png\">";
	dudecotext.innerHTML = "<span class=\"imaginaryFriend\" style=\"color: red\">WE ARE DEAD</span>";
	notes.innerHTML = "<span class=\"imaginaryFriend\">IT'S TIME!</span>";
	gamesText.innerHTML = "<span class=\"imaginaryFriend\" style=\"color: red\">gAmes</span>";
	aboutText.innerHTML = "<span class=\"imaginaryFriend\" style=\"color: red\">about US</span>";
	crewText.innerHTML = "<span class=\"imaginaryFriend\" style=\"color: red\">Our cRew</span>";
	function bobbleText(element) {
		setTimeout(function() {
			element.style.transform = ("rotate(22.5deg)");
		}, 1000);
		setTimeout(function() {
			element.style.transform = ("rotate(-22.5deg)");
		}, 1000);
	}
}

function activateWitchingHour() {
	witchingHour = true;
	glitchOut();
	console.log("Witching Hour Activated");
}

function deactivateWitchingHour() {
	witchingHour = false;
	stopInterval(glitchOut.gamesGlitchText);
	stopInterval(glitchOut.aboutGlitchText);
	stopInterval(glitchOut.crewGlitchText);
	dudecotext.innerHTML = "To Reset,";
	gamesText.innerHTML = "Restart";
	aboutText.innerHTML = "The";
	crewText.innerHTML = "Page";
	dudeimage.innerHTML = "<img style=\"width: 25%; border-radius: 50%\" src=\"assets/icon.png\">";
	console.log("Witching Hour Deactivated");
}