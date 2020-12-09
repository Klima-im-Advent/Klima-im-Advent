const questions =
	[ "Im Danni werden Baumhäuser gebaut…",
		"Der Supermarkt hat Mate im Angebot…",
		"Es ist wieder Tweetstorm…",
		"Bald steht eine Demo an…",
		"Es ist wieder Großdemo…", ];

const answers = [
		[
				{text: "Ich bringe Holz und Material vorbei."}, {
						text:
							"Ich schnappe mir meinen Rucksack und ziehe ins Barrio. <br> Meine neue Adresse: Dannenröder Forst, auf der höchsten Eiche"
				},
				{
						text:
							"Ich schau mal, ob es bei mir eine Kundgebung gibt. Wenn nicht male ich ein hübsches Schild und poste was auf Insta."
				},
				{text: "Ich trommele meine OG zusammen und wir machen eine Soli-Demo"}
		],
		[
				{
						text:
							"Ich beantrage bei der FFF-Finanz AG Geld, um für meine OG einen Mate Vorrat aufzubauen",
				},
				{
						text:
							"Ich kaufe mir direkt zwei Flaschen, damit ich für die nächste Orga-Nachtschicht gerüstet bin."
				},
				{
						text:
							"Maaate? SPONTANKOMMUNISMUS!! Ich kollektivere die Flaschen fürs … Kollektiv."
				}
		],
		[
				{
						text:
							"Tweetstorm? Shit zwischen Technik-Check für die Demo und dem Organisieren einer vernünftigen Bühne hast du das vollkommen vergessen.",
				},
				{
						text:
							"Na logo hast du getwittert, direkt aus der Sitzblockade vorm Kohlekraftwerk!",
				},
				{
						text:
							"Du hast jetzt schon mehrere Beispieltweets in die OG-Gruppe geschrieben und das Sharepic für den OG Account ist auch fertig – kann also losgehen!"
				},
				{
						text:
							"Erstmal hast du die vielen Tweets benutzt, um dich richtig über das Thema zu informieren. Anschließend hast du den besten Erklär-Tweet auf Instagram geteilt."
				}
		],
		[
				{
						text:
							"Du bestellst direkt bei OnFire zwei neue Boxen, für den Lauti-Wagen."
				},
				{
						text:
							"Du mobilisierst deine OG. Jetzt braucht es Trello listen, Zoom Konferenzen, Plena und vieeel Planung. Wer verteilt Plakate? Wer diskutiert mit dem Ordnungsamt?"
				},
				{
						text:
							"Du trommelst deine Bezugsgruppe zusammen, holst dir die neuen Sticker und am nächsten Morgen verkündet jeder Laternenpfahl in eurer Stadt „Demo am Freitag“"
				},
				{
						text:
							"Seit du die Nachricht in der Info-Gruppe gesehen hast, freust du dich auf die Demo. Du hast dir auch nochmal die besten Demo – Sprüche und – Gesänge ausgedruckt und übst seitdem fleißig"
				}
		],
		[
				{
						text:
							"Die Technik steht, die Musiker*innen sind eingewiesen jetzt kann eigentlich nichts mehr schief… Wie? Es kommt kein Ton? Habt ihr es mal aus und wieder eingeschaltet",
				},
				{
						text:
							"Redner*innenliste ✓, NGOs eingeladen ✓, Banner gemalt ✓<br> Es kann losgehen, du fällst deinen Freund*innen glücklich in die Arme."
				},
				{
						text:
							"WHAT DO WE WANT? CLIMATE JUSTICE! – auf dem Hinweg hast du dich mit deinem Megafon schon Mal für die Demo eingestimmt. Ihr lauft in einer kleinen Sponti Richtung Demo."
				},
				{
						text:
							"Demo Tag! Du bist schon ganz aufgeregt! Du hast ein schönes Schild gemalt und schwänzt jetzt, obwohl Frau Fuchs deine Lieblibngslehrerin ist. Uii - es sind schon sooo viele Menschen dar!",
				}
		]
];
let current = 0;

const questionElement = document.getElementById("question")!;
const answerElements = [
	document.getElementById("answer-0")!,
	document.getElementById("answer-1")!,
	document.getElementById("answer-2")!,
	document.getElementById("answer-3")!,
];
const steps = [
	document.getElementById("step-1")!,
	document.getElementById("step-2")!,
	document.getElementById("step-3")!,
	document.getElementById("step-4")!,
	document.getElementById("step-5")!,
]
const weiter = document.getElementById("weiter")!;

weiter.addEventListener(
	"click",
	() => {
		steps[current].style.display = "None";
		++current;
		steps[current].style.display = "Block";
		questionElement.innerText = questions[current];
		for (let i = 0; i < 4; ++i) {
			answerElements[i].innerHTML = answers[current][i].text;
		}
	})
