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
						result:	"katze",
				}
		],
		[
				{
					text:
						"Ich	beantrage	bei	der	FFF-Finanz	AG	Geld,	um	für	meine	OG	einen	Mate	Vorrat	aufzubauen",
					result:	"katze"
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
				result:	"katze"
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
				result:	"katze",
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
				result:	"katze",
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
		"katze":		0
};
for	(let	i	=	0;	i	<	4;	++i)	{
		answerElements[i].addEventListener(
	"click",
	()	=>	{
			if	(current	<	4)	{
		++results[
				answers[current][i].result	as	"bieber"	|	"küken"	|	"eichhörnchen"	|
			"katze"];
		console.log(
				Object
				.entries(results)
				.sort((a,b)	=>	b[1]	-	a[1])[0][0])
			console.log(results);
			steps[current].style.display	=	"None";
			++current;
			steps[current].style.display	=	"Block";
			questionElement.innerText	=	questions[current];
			for	(let	i	=	0;	i	<	4;	++i)	{
				answerElements[i].innerHTML	=	answers[current][i].text;
			}	
				}
	});
}	
