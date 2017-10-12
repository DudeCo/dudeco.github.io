var $notes = document.getElementById("notes");

function random(min = 0, max = 9999) {
	return (Math.trunc((Math.random() * ((max + 1) - min)) + min));
}

switch(random(1, 24)) {
	case 1:
		$notes.innerHTML = "<em>Wallruns in Games</em>: Super Freaking Simple<br><em>Wallruns in Real Life</em>: Nope. I'm outta here. ";
		break;
	case 2:
		$notes.innerHTML = "*backflips off wall*<br>\"I'm GAY!\"";
		break;
	case 3:
		$notes.innerHTML = "Nope... Nope Nope Nope...<br>...<br>NO...<br>JUST... NO!..";
		break;
	case 4:
		$notes.innerHTML = "Hey, that's pretty good! ";
		break;
	case 5:
		$notes.innerHTML = "GarbageCanLary's my cousin. Say Hi!<br>\"<span style=\"font-size: 50%\">hi</span>\"<br>He's pretty far away. ";
		break;
	case 6:
		$notes.innerHTML = "Sticks and stones can break my bones...<br>But a metal pipe would probably be more<br><strong>SUPER EFFECTIVE</strong>";
		break;
	case 7:
		$notes.innerHTML = "Mario Jumps<br>Sonic Runs<br>I'm Just a Normal Human";
		break;
	case 8:
		$notes.innerHTML = "<em>One Hello Can Change Your Life. </em><br>\"<span class=\"nosifer\">HIA GEORGIE</span>\" ~ Pennywise, IT 1990/2017";
		break;
	case 9:
		$notes.innerHTML = "Where's the right HDMI cable!?!";
		break;
	case 10:
		$notes.innerHTML = "Wow. That's one big computer. ";
		break;
	case 11:
		$notes.innerHTML = "Group huddle!";
		break;
	case 12:
		$notes.innerHTML = "Repeating functions are <strong><em>SO</em></strong> annoying. ";
		break;
	case 13:
		$notes.innerHTML = "<em>Documents Made</em>: " + random(50, 1000) + "<br><em>Documents Saved</em>: 10<br><em>Ideas Made</em>: " + random(50, 1000) + "<br><em>Actually Good Ideas</em>: 0";
		break;
	case 14:
		$notes.innerHTML = "\"There's a snake one the screen! \" ~ Not Woody";
		break;
	case 15:
		$notes.innerHTML = "17 years of school for a handshake and a piece of paper!?!<br><img style=\"border-radius: 50%\" src=\"assets/jackiechanmeme.png\">";
		break;
}

console.log("Program Ran");