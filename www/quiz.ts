const	questions	=
	[	"Im	Danni	werden	Baumhäuser	gebaut…",
		"Der	Supermarkt	hat	Mate	im	Angebot…",
		"Es	ist	wieder	Tweetstorm…",
		"Bald	steht	eine	Demo	an…",
		"Es	ist	wieder	Großdemo…",	];

const	answers	=	[
		[
				{
						text:	"Ich	bringe	Holz	und	Material	vorbei.",
						result:	"bieber",
				},
				{
					text:
						"Ich	schnappe	mir	meinen	Rucksack	und	ziehe	ins	Barrio.	<br>	Meine	neue	Adresse:	Dannenröder	Forst,	auf	der	höchsten	Eiche",
					result:	"eichhörnchen",
				},
				{
					text:
							"Ich	schau	mal,	ob	es	bei	mir	eine	Kundgebung	gibt.	Wenn	nicht	male	ich	ein	hübsches	Schild	und	poste	was	auf	Insta.",
					result:	"küken",
				},
				{
						text:	"Ich	trommele	meine	OG	zusammen	und	wir	machen	eine	Soli-Demo",
						result:	"hase",
				}
		],
		[
				{
					text:
						"Ich	beantrage	bei	der	FFF-Finanz	AG	Geld,	um	für	meine	OG	einen	Mate	Vorrat	aufzubauen",
					result:	"hase"
				},
				{
					text:
						"Ich	kaufe	mir	direkt	zwei	Flaschen,	damit	ich	für	die	nächste	Orga-Nachtschicht	gerüstet	bin.",
					result:	"bieber",
				},
				{
					text:
						"Maaate?	SPONTANKOMMUNISMUS!!	Ich	kollektivere	die	Flaschen	fürs	…	Kollektiv.",
					result:	"eichhörnchen",
				},
				{
						text:	"Wer	ist	dieser	Mate?	(Von	dem	immer	alle	reden?)",
						result:	"küken",
			}
		],
		[
			{
				text:
					"Tweetstorm?	Shit	zwischen	Technik-Check	für	die	Demo	und	dem	Organisieren	einer	vernünftigen	Bühne	hast	du	das	vollkommen	vergessen.",
				result:	"bieber",
				},
			{
				text:
					"Na	logo	hast	du	getwittert,	direkt	aus	der	Sitzblockade	vorm	Kohlekraftwerk!",
				result:	"eichhörnchen",
			},
			{
				text:
					"Du	hast	jetzt	schon	mehrere	Beispieltweets	in	die	OG-Gruppe	geschrieben	und	das	Sharepic	für	den	OG	Account	ist	auch	fertig	–	kann	also	losgehen!",
				result:	"hase"
			},
			{
				text:
						"Erstmal	hast	du	die	vielen	Tweets	benutzt,	um	dich	richtig	über	das	Thema	zu	informieren.	Anschließend	hast	du	den	besten	Erklär-Tweet	auf	Instagram	geteilt.",
				result:	"küken",
			}
		],
		[
			{
				text:
					"Du	bestellst	direkt	bei	OnFire	zwei	neue	Boxen,	für	den	Lauti-Wagen.",
				result:	"bieber",
			},
			{
				text:
					"Du	mobilisierst	deine	OG.	Jetzt	braucht	es	Trello	listen,	Zoom	Konferenzen,	Plena	und	vieeel	Planung.	Wer	verteilt	Plakate?	Wer	diskutiert	mit	dem	Ordnungsamt?",
				result:	"hase",
			},
			{
				text:
					"Du	trommelst	deine	Bezugsgruppe	zusammen,	holst	dir	die	neuen	Sticker	und	am	nächsten	Morgen	verkündet	jeder	Laternenpfahl	in	eurer	Stadt	„Demo	am	Freitag“",
				result:	"eichhörnchen",
			},
			{
				text:
					"Seit	du	die	Nachricht	in	der	Info-Gruppe	gesehen	hast,	freust	du	dich	auf	die	Demo.	Du	hast	dir	auch	nochmal	die	besten	Demo	–	Sprüche	und	–	Gesänge	ausgedruckt	und	übst	seitdem	fleißig",
				result:	"küken",
			}
		],
		[
			{
				text:
					"Die	Technik	steht,	die	Musiker*innen	sind	eingewiesen	jetzt	kann	eigentlich	nichts	mehr	schief…	Wie?	Es	kommt	kein	Ton?	Habt	ihr	es	mal	aus	und	wieder	eingeschaltet",
				result:	"bieber",
			},
			{
				text:
					"Redner*innenliste	✓,	NGOs	eingeladen	✓,	Banner	gemalt	✓<br>	Es	kann	losgehen,	du	fällst	deinen	Freund*innen	glücklich	in	die	Arme.",
				result:	"hase",
			},
			{
				text:
					"WHAT	DO	WE	WANT?	CLIMATE	JUSTICE!	–	auf	dem	Hinweg	hast	du	dich	mit	deinem	Megafon	schon	Mal	für	die	Demo	eingestimmt.	Ihr	lauft	in	einer	kleinen	Sponti	Richtung	Demo.",
				result:	"eichhörnchen",
			},
			{
				text:
					"Demo	Tag!	Du	bist	schon	ganz	aufgeregt!	Du	hast	ein	schönes	Schild	gemalt	und	schwänzt	jetzt,	obwohl	Frau	Fuchs	deine	Lieblibngslehrerin	ist.	Uii	-	es	sind	schon	sooo	viele	Menschen	dar!",
				result:	"küken",
			}
		]
];
let	current	=	0;

const	questionElement	=	document.getElementById("question")!;
const	answerElements	=	[
	document.getElementById("answer-0")!,
	document.getElementById("answer-1")!,
	document.getElementById("answer-2")!,
	document.getElementById("answer-3")!,
];


const	steps	=	[
	document.getElementById("step-1")!,
	document.getElementById("step-2")!,
	document.getElementById("step-3")!,
	document.getElementById("step-4")!,
	document.getElementById("step-5")!,
]
const	results	=	{
	"bieber":				0,
	"küken":		0,
	"eichhörnchen":	0,
	"hase":		0
};

const resolutions = {
	"bieber": {
		name: "Der Bieber",
		description:
				"Am liebsten trägt dieses Aktivistier eine alte Latzhose – die hat vieeele Taschen. Wenn während der Demo etwas runterfällt, was nicht runterfallen sollte, ist der Bieber sofort zur Stelle und fischt aus einer seiner Taschen eine Rolle Panzerband. Sonst ist er eher im Hintergrund, regelt am Mischpult, baut Technik auf und ab – und niemand hat so einen guten Überblick über das Lager wie er… eigentlich hat niemand sonst überhaupt einen Überblick über das Lager.",
	},
	"küken": {
		name: "Das Küken",
		description:
			"Das Küken ist ganz neu bei FFF. Auf den Demos ist es immer mit den schönsten Schildern dabei und freut sich, wenn die es in die Zeitung schaffen. Außerdem motiviert es immer seine ganzen Freund*innen mitzukommen. Bisher hat es sich noch nicht getraut, selber eine Rede zu halten – aber manchmal überlegt es wie es wohl wäre auf der großen Bühne zu stehen. Vielleicht fragt es den Hasen mal…",
	},
	"eichhörnchen": {
		name: "Das Eichhörnchen",
		description:
			"„Up with trees down with capitalism!“ steht auf dem Halstuch, das vom Eichhörnchen immer über Mund und Nase getragen wird. Das Eichhörnchen geht aufs Ganze. Es ist bei jeder Aktion dabei und scheut kein Risiko. Es hängt in den höchsten Bäumen im Danni, sitzblockiert im kältesten Winter und hilft sogar beim Kekse-Verkauf für die OG Kasse.",
	},
  "hase": {
		name: "Der Hase",
		description:
			"Ohne den Hasen würde in der OG gar nichts laufen. Er hat den Überblick über bundesweite Abstimmungen, Social-Media Accounts und Info-Gruppen. Außerdem schafft sie es wie niemand sonst, die anderen Mitglieder in der OG zu motivieren und er ist der einzige, der es schafft den verplanten Bieber regelmäßig an wichtige Termine zu erinnern.",
	}
}

const startScreen
  = document.getElementsByClassName("start-screen");
const questionScreen = document.getElementsByClassName('question-screen');
const endScreen = document.getElementsByClassName('end-screen');
const image = document.getElementById('aktivistier-image')! as HTMLImageElement;
const title = document.getElementById('aktivistier-title')!;
const description = document.getElementById('aktivistier-description')!;

const startQuiz = document.getElementById('start-quiz')!;
startQuiz.addEventListener('click', () => {
  for (let i = 0; i < startScreen.length; ++i) {
    (startScreen[i] as HTMLElement).style.display = "none";
  }
  for (let i = 0; i < questionScreen.length; ++i) {
    (questionScreen[i] as HTMLElement).style.display = "block";
  }
});

let winner = null;

for	(let	i	=	0;	i	<	4;	++i)	{
	answerElements[i].addEventListener("click", () => {
		const result = answers[current][i].result as "bieber" | "küken"
			| "eichhörnchen" | "hase";
				++results[result];
				if (current < 4) {
						steps[current].style.display = "none";
						++current;
						steps[current].style.display = "block";
						questionElement.innerText    = questions[current];
						for (let i = 0; i < 4; ++i) {
								answerElements[i].innerHTML = answers[current][i].text;
						}
				}
				else if (current === 4) {
					const winnerId =
						Object
							.entries(results)
							.sort((a, b) => b[1] - a[1])[0][0] as
								"bieber" | "küken" | "eichhörnchen" | "hase";
					winner = resolutions[winnerId];
				for (let i = 0; i < questionScreen.length; ++i) {
					(questionScreen[i] as HTMLElement).style.display = "none";
				}
				for (let i = 0; i < endScreen.length; ++i) {
					(endScreen[i] as HTMLElement).style.display = "block";
				}
					title.innerText = winner.name;
					description.innerText = winner.description;
					image.src = "/" + winnerId + ".png";
				}
		});
}

const share = document.getElementById('share')!;
share.addEventListener('click', () => {
  const url = "https://klimaimadvent.de/tag/16"
  const title = "Finde jetzt heraus welches Aktivistier du bist";
	const text = `Ich bin ${winner.name}. Willst du wissen was dein Aktivistier ist? Dann mach jetzt den Test`;
	if (navigator.share) {
		navigator
			.share({url, title, text})
			.then(() => console.log("Shared successfully"))
			.catch(console.error);
  }
});
