let common_cards = [
	"card1",
	"card2",
	"card3",
	"card4",
	"card5",
	"card6",
	"card7",
	"card8",
	"card9",
	"card10",
	"card11",
	"card12",
	"card13",
	"card14",
	"card15",
	"card16",
	"card17",
	"card18",
	"card19",
	"card20",
	"card21",
	"card22",
	"card23",
	"card24",
	"card25",
	"card26",
	"card27",
	"card28",
	"card29",
	"card30",
	"card31",
	"card32",
	"card33",
	"card34",
	"card35",
	"card36",
	"card37",
	"card38",
	"card39",
	"card40",
];

let high_cards = ["card1", "card2", "card3", "card4", "card5", "card6", "card7", "card8", "card9", "card10", "card11", "card12", "card13", "card14"];

common_explanations = [
	"Look for a wizard's tower on a lake. Let the wizard's name and servant guide you to that which you seek.",
	"Go to a place of dizzying heights, where the stone itself is alive!",
	"Look to the one who sees all. The treasure is hidden in her camp.",
	"I see a kneeling woman—a rose of great beauty plucked too soon. The master of the marsh knows of whom I speak.",
	"I see a fallen house guarded by a great stone dragon. Look to the highest peak.",
	"The treasure is hidden in a small castle beneath a mountain, guarded by amber giants.",
	"Search for the crypt of a wizard ordinaire. His staff is the key.",
	"A man is not what he seems. He comes here in a carnival wagon. Therein lies what you seek.",
	"A woman hangs above a roaring fire. Find her, and you will find the treasure.",
	"I see a dead village, drowned by a river, ruled by one who has brought great evil into the world.",
	"That which you seek lies in the womb of darkness, the devil's lair: the one place to which he must return.",
	"The treasure lies in a dragon's house, in hands once clean and now corrupted.",
	"I see a sleeping prince, a servant of light and the brother of darkness. The treasure lies with him.",
	"Go to the mountains. Climb the white tower guarded by golden knights.",
	"The thing you seek lies with the dead, under mountains of gold coins.",
	"Look for a den of wolves in the hills overlooking a mountain lake. The treasure belongs to Mother Night.",
	"Find the Mad Dog's crypt. The treasure lies within, beneath blackened bones.",
	"I see a faceless god. He awaits you at the end of a long and winding road, deep in the mountains.",
	"I see a throne fit for a king.",
	"There is a town where all is not well. There you will find a house of corruption, and within, a dark room full of still ghosts.",
	"I see a nest of ravens. There you will find the prize.",
	"I see the skeleton of a deadly warrior, lying on a bed of stone flanked by gargoyles.",
	"Look to a place where sickness and madness are bred. Where children once cried, the treasure lies still.",
	"Look to the wizard of wines! In wood and sand the treasure hides.",
	"Seek a cask that once contained the finest wine, of which not a drop remains.",
	"I see a dark room full of bottles. It is the tomb of a guild member.",
	"A wounded elf has what you seek. He will part with the treasure to see his dark dreams fulfilled.",
	"What you seek lies at the crossroads of life and death, among the buried dead.",
	"The Vistani have what you seek. A missing child holds the key to the treasure's release.",
	"Look for a fortress inside a fortress, in a place hidden behind fire.",
	"You will find what you seek in the castle, amid the ruins of a place of supplication.",
	"The treasure you seek is hidden behind the sun, in the house of a saint.",
	"I see a garden dusted with snow, watched over by a scarecrow with a sackcloth grin. Look not to the garden but to the guardian.",
	"Look to the west. Find a pool blessed by the light of the white sun.",
	"Find the mother—she who gave birth to evil.",
	"An evil tree grows atop a hill of graves where the ancient dead sleep. The ravens can help you find it. Look for the treasure there.",
	"I see walls of bones, a chandelier of bones, and a table of bones—all that remains of enemies long forgotten.",
	"I see a lonely mill on a precipice. The treasure lies within.",
	"What you seek lies in a pile of treasure, beyond a set of amber doors.",
	"Look for a wealthy woman. A staunch ally of the devil, she keeps the treasure under lock and key, with the bones of an ancient enemy.",
];

strahd_enemy = [
	//needs to be better with dual random choices
	["I see a fallen paladin of a fallen order of knights. He lingers like a ghost in a dead dragon's lair.", "Stir the spirit of the clumsy knight whose crypt lies deep within the castle."],
	[
		"I see a child—a Vistana. You must hurry, for her fate hangs in the balance. Find her at the lake!",
		"I hear a wedding bell, or perhaps a death knell. It calls thee to a mountainside abbey, wherein you will find a woman who is more than the sum of her parts.",
	],
	"Look for a dusk elf living among the Vistani. He has suffered a great loss and is haunted by dark dreams. Help him, and he will help you in return.",
	"Find the leader of the feathered ones who live among the vines. Though old, he has one more fight left in him.",
	[
		"Search for a troubled young man surrounded by wealth and madness. His home is his prison.",
		"Find a girl driven to insanity, locked in the heart of her dead father's house. Curing her madness is key to your success.",
	],
	"A Vistana wanders this land alone, searching for her mentor. She does not stay in one place for long. Seek her out at Saint Markovia's abbey, near the mists.",
	"Ah, the worst of all truths: You must face the evil of this land alone!",
	[
		"What horror is this? I see a man made by a man. Ageless and alone, it haunts the towers of the castle.",
		"Look for a man of music, a man with two heads. He lives in a place of great hunger and sorrow.",
	],
	["Your greatest ally will be a wizard. His mind is broken, but his spells are strong.", "I see a man of faith whose sanity hangs by a thread. He has lost someone close to him."],
	["I see a young man with a kind heart. A mother's boy! He is strong in body but weak of mind. Seek him out in the village of Barovia.", "Evil's bride is the one you seek!"],
	"A werewolf holds a secret hatred for your enemy. Use her hatred to your advantage.",
	[
		"I see a dead man of noble birth, guarded by his widow. Return life to the dead man's corpse, and he will be your staunch ally.",
		"A man of death named Arrigal will forsake his dark lord to serve your cause. Beware! He has a rotten soul.",
	],
	"Look for an entertaining man with a monkey. This man is more than he seems.",
	"Seek out the brother of the devil's bride. They call him 'the lesser,' but he has a powerful soul.",
];

strahd_location = [
	"Look to the father's tomb.",
	"I see a secret place—a vault of temptation hidden behind a woman of great beauty. The evil waits atop his tower of treasure.",
	"He waits for you in a place of wisdom, warmth, and despair. Great secrets are there.",
	"Look to the mother's tomb.",
	"He lurks in a hall of bones, in the dark pits of his castle.",
	"The cards can't see where the evil lurks. The mists obscure all!",
	"He lurks in the depths of darkness, in the one place to which he must return.",
	"Look to great heights. Find the beating heart of the castle. He waits nearby.",
	"He haunts the tomb of the man he envied above all.",
	"He dwells with the one whose blood sealed his doom, a brother of light snuffed out too soon.",
	"The beast sits on his dark throne.",
	"He lurks in the one place to which he must return—a place of death.",
	"He lurks in the darkness where the morning light once shone—a sacred place.",
	"I see a dark figure on a balcony, looking down upon this tortured land with a twisted smile.",
];

function drawUnique(array, count, exclude = []) {
	const filtered = array.filter((card) => !exclude.includes(card));
	const drawn = [];

	while (drawn.length < count) {
		const rand = filtered[Math.floor(Math.random() * filtered.length)];
		if (!drawn.includes(rand)) {
			drawn.push(rand);
		}
	}

	return drawn;
}

function drawCards() {
	// Draw 2 high cards
	const highDraw = drawUnique(high_cards, 2);

	// Draw 3 common cards, excluding already drawn high ones
	const commonDraw = drawUnique(common_cards, 3, highDraw);

	// Assign images
	document.getElementById("first_common").src = `assets/common_deck/${commonDraw[0]}.png`;
	if (commonDraw[0].length > 5) {
		console.log(commonDraw[0].slice(-2));
		document.getElementById("see_1").innerHTML = common_explanations[Number(commonDraw[0].slice(-2)) - 1];
	} else {
		console.log(commonDraw[0].slice(-1));
		document.getElementById("see_1").innerHTML = common_explanations[Number(commonDraw[0].slice(-1)) - 1];
	}

	document.getElementById("second_common").src = `assets/common_deck/${commonDraw[1]}.png`;
	if (commonDraw[1].length > 5) {
		console.log(commonDraw[1].slice(-2));
		document.getElementById("see_2").innerHTML = common_explanations[Number(commonDraw[1].slice(-2)) - 1];
	} else {
		console.log(commonDraw[1].slice(-1));
		document.getElementById("see_2").innerHTML = common_explanations[Number(commonDraw[1].slice(-1)) - 1];
	}

	document.getElementById("third_common").src = `assets/common_deck/${commonDraw[2]}.png`;
	if (commonDraw[2].length > 5) {
		console.log(commonDraw[2].slice(-2));
		document.getElementById("see_3").innerHTML = common_explanations[Number(commonDraw[2].slice(-2)) - 1];
	} else {
		console.log(commonDraw[2].slice(-1));
		document.getElementById("see_3").innerHTML = common_explanations[Number(commonDraw[2].slice(-1)) - 1];
	}

	// High Card 1 - Stahd's Enemy
	document.getElementById("first_high").src = `assets/high_deck/${highDraw[0]}.png`;
	if (highDraw[0].length > 5) {
		console.log(highDraw[0].slice(-2));
		const index = Number(highDraw[0].slice(-2)) - 1;
		const enemy = strahd_enemy[index];
		if (Array.isArray(enemy)) {
			document.getElementById("see_4").innerHTML = enemy[Math.floor(Math.random() * enemy.length)];
		} else {
			document.getElementById("see_4").innerHTML = enemy;
		}
	} else {
		console.log(highDraw[0].slice(-1));
		const index = Number(highDraw[0].slice(-1)) - 1;
		const enemy = strahd_enemy[index];
		if (Array.isArray(enemy)) {
			document.getElementById("see_4").innerHTML = enemy[Math.floor(Math.random() * enemy.length)];
		} else {
			document.getElementById("see_4").innerHTML = enemy;
		}
	}

	document.getElementById("second_high").src = `assets/high_deck/${highDraw[1]}.png`;
	if (highDraw[1].length > 5) {
		console.log(highDraw[1].slice(-2));
		document.getElementById("see_5").innerHTML = strahd_location[Number(highDraw[1].slice(-2)) - 1];
	} else {
		console.log(highDraw[1].slice(-1));
		document.getElementById("see_5").innerHTML = strahd_location[Number(highDraw[1].slice(-1)) - 1];
	}

	// Optional: Print results
	console.log("High Cards:", highDraw.join(", "));
	console.log("Common Cards:", commonDraw.join(", "));
}

function revealExplanation(trigger, triggered) {
	trigger.addEventListener("mouseenter", () => {
		triggered.style.opacity = "100"; // or 'inline', depends on your element
	});

	trigger.addEventListener("mouseleave", () => {
		triggered.style.opacity = "0";
	});
}

drawCards();

const card1 = document.getElementById("card1");
const hiddenH1 = document.getElementById("hidden_h1");
revealExplanation(card1, hiddenH1);
