var dudecotext = document.getElementById("wearedudecotext");
var dudeimage = document.getElementById("dudeimage");
var notes = document.getElementById("notes");
var doc = document.body;
var tick = 0, rotateSpd = 2;

function random(min = 0, max = 9999) {
	return (Math.trunc((Math.random() * ((max + 1) - min) + min)));
}

var notesCase = random(1, 25);

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
		notes.innerHTML = "<em>Documents Made</em>: " + random(50, 1000) + "<br><em>Documents Saved</em>: 10<br><em>Ideas Made</em>: " + random(50, 1000) + "<br><em>Actually Good Ideas</em>: 0";
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
		notes.innerHTML = "Hail Lord Cthulhu! "
	default:
		notes.innerHTML = "Googled? ";
}

console.log("Notes Case: " + notesCase);

console.log("Program Ran");

window.onmousemove = logMouseMove;

function logMouseMove(event) {
	var e = e || window.event;
	mousePos = { x: e.clientX, y: e.clientY};
	dudecotext.style.color = ("rgb(" + mousePos.x/2 + ", " + mousePos.y/2 + ", " + mousePos.y/2 + ")");
	console.log("Mouse X: " + mousePos.x + "\nMouse Y: " + mousePos.y)
}
/*
setInterval(rotateText, 1);

function rotateText() {
	if(tick >= 45) {
		rotateSpd = -rotateSpd;
	} else if(tick <= -45) {
		rotateSpd = Math.abs(rotateSpd);
	}
	tick += rotateSpd;
	dudeimage.style.transform = ("rotate(" + tick + "deg)");
}*/