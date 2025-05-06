const options = [
	"Kiss - 2min", "Strip one item", "Massage - 3min", "Truth", "Dare",
	"Tease - 2min", "Spank - 1min", "Moan Challenge", "Roleplay - 5min", "Wildcard"
];
const options_dummy = [
	"1 - 2min", "1 one item", "1 - 3min", "Truth", "Dare",
	"1 - 2min", "1 - 1min", "1 Challenge", "1 - 5min", "Wildcard"
];

const optionSets = {
	romantic: [
		"Kiss - 1min", "Hug - 1min", "Compliment each other",
		"Hold hands - 2min", "Massage back - 2min", "Stare lovingly - 1min"
	],
	naughty: [
		"Kiss - 2min", "Spank - 1min", "Strip 1 item", "Lick neck - 2min",
		"Whisper a fantasy", "Touch under clothes - 2min", "Moan Challenge - 1min"
	],
	extreme: [
		"Oral - 3min", "Blindfold & Tease - 5min", "Spank hard - 2min", "Edging - 5min",
		"Dirty Talk - 3min", "Use a toy - 4min", "Moan Challenge - 2min"
	]
};

const moanOptions = [
	"https://cdn.uppbeat.io/audio-files/11edf406df29dfe7ba59a4750cf22dbf/78d85ce29d164f54947762a0a4adbd37/b80a46390980b3e1f72f437211228807/STREAMING-oh-god-moody-male-dan-barracuda-1-00-04.mp3",
	"https://cdn.uppbeat.io/audio-files/11edf406df29dfe7ba59a4750cf22dbf/1ceaef07d18e2c7135b52a3594f12137/a61817ebe5f404c4ceae9e46a53f6974/STREAMING-groaning-female-dan-barracuda-1-00-02.mp3",
	"https://cdn.uppbeat.io/audio-files/13a6d3c9e914de5ab3fb451786993718/c66002b9363ecbfccaa0d77d7eb4aee7/88145e0a6752b0615bf1c0a44e2e00b9/STREAMING-ahh-satisfaction-female-smartsound-fx-1-00-02.mp3",
	"https://cdn.uppbeat.io/audio-files/13a6d3c9e914de5ab3fb451786993718/92acce64a310856a12d846e7d2b32692/fef0b0e799bd03dd20e624687f8825bb/STREAMING-oh-yeah-pleasurable-female-smartsound-fx-1-00-02.mp3",
	"https://cdn.uppbeat.io/audio-files/13a6d3c9e914de5ab3fb451786993718/ad5ee0eda29ec833482fca21a6c4bada/9572eefb89c747970ccb62e022fcd4e9/STREAMING-aw-pleasurable-moan-female-smartsound-fx-1-00-01.mp3",
	"https://cdn.uppbeat.io/audio-files/11edf406df29dfe7ba59a4750cf22dbf/78d85ce29d164f54947762a0a4adbd37/b80a46390980b3e1f72f437211228807/STREAMING-oh-god-moody-male-dan-barracuda-1-00-04.mp3",
	"https://cdn.uppbeat.io/audio-files/8217105e2d58a8e4d9cf8e12b2665978/d6c255f221cc93972da37e18d09545fd/e7c8ffa9e30baf548aaf143638d4cc43/STREAMING-sad-moan-female-tomas-herudek-1-1-00-01.mp3",
	"https://cdn.uppbeat.io/audio-files/8a0ead3ea7dbf25377a13251625e6d3d/39aa7e158f69881ea561c051f139d9aa/49bf334cd86b7c85211578c01698e245/STREAMING-woman-screaming-in-pleasure-epic-stock-media-1-1-00-02.mp3",
	"https://cdn.uppbeat.io/audio-files/13a6d3c9e914de5ab3fb451786993718/fbdd1c1d92c339097fb1ba2b8d4d8a50/52a0d2a76d935beba19b24f5e38dd730/STREAMING-oh-yeah-pleasure-female-smartsound-fx-1-00-01.mp3",
	"https://cdn.uppbeat.io/audio-files/8f7bad86600558899edb9677072692ee/418f87f897bc867af5dd8a96bae13a6f/7414556a50760221d1fcc8fe7576309a/STREAMING-sloppy-kiss-betacut-1-00-01.mp3",
	"https://cdn.uppbeat.io/audio-files/8a0ead3ea7dbf25377a13251625e6d3d/2e2c205fc4a027b1956efb0c5b3dc071/903947b35872b01cd1071d66354a4c89/STREAMING-woman-moaning-in-pleasure-epic-stock-media-2-2-00-02.mp3",
	"https://cdn.uppbeat.io/audio-files/8217105e2d58a8e4d9cf8e12b2665978/2a90d950f90c15e04ddcb86a75c1159f/7fab2039a4a62c25ee0c21fa495d3424/STREAMING-sighing-in-frustration-woman-tomas-herudek-long-3-00-03.mp3",
	"https://cdn.uppbeat.io/audio-files/550fafd5d5403a2f6e11b6feefd0899e/be8264063c9cacee62c20475bcd34be4/2d5c45c1d64719040a02fee373db463c/STREAMING-moans-of-pleasure-female-gfx-sounds-1-00-03.mp3",
	"https://cdn.uppbeat.io/audio-files/8a0ead3ea7dbf25377a13251625e6d3d/ea0cb32ef0a81a1a49a19911a3a6238b/c37455ae5a4f138eeab3d65a9b246eeb/STREAMING-moan-pleasure-female-epic-stock-media-1-00-00.mp3",
	"https://cdn.uppbeat.io/audio-files/13a6d3c9e914de5ab3fb451786993718/6abcf16d8adfac7e67a70f0b51a5a424/acfabf4fb25a332e8d5091c9b0ca680e/STREAMING-moan-soft-short-female-smartsound-fx-1-1-00-00.mp3",
	"https://cdn.uppbeat.io/audio-files/8a0ead3ea7dbf25377a13251625e6d3d/7760bb04fe8727f1e9d5c0cad487ec5d/9311ca6cdab118d1c839155baf58856c/STREAMING-yeah-pleasure-female-epic-stock-media-1-00-00.mp3",
	"https://cdn.uppbeat.io/audio-files/8f7bad86600558899edb9677072692ee/30cf4fd44feddbb454b760e21700b9e5/c5047b53c63a3cf420c086ac501f7311/STREAMING-kiss-sigh-female-betacut-1-00-01.mp3",
	"https://cdn.uppbeat.io/audio-files/8a0ead3ea7dbf25377a13251625e6d3d/477f264eb163228fad9c65f527d26d7b/bec1f6585a82051e2ea9082e038b5ef9/STREAMING-groan-female-long-epic-stock-media-1-00-00.mp3",
	"https://cdn.uppbeat.io/audio-files/13a6d3c9e914de5ab3fb451786993718/f4f733df14d19f4008de1dd66c56b26e/b5a76ed23b0abb6b2477192e4e5437ec/STREAMING-grunting-in-frustration-female-smartsound-fx-2-2-00-01.mp3",
	"https://cdn.uppbeat.io/audio-files/8f7bad86600558899edb9677072692ee/9a51194b78f60015db096890ae93d728/d5ffd59cafe93399bbfdf4e18e45467f/STREAMING-mwah-kiss-female-betacut-1-1-00-03.mp3",
	"https://cdn.uppbeat.io/audio-files/8a0ead3ea7dbf25377a13251625e6d3d/f98756d9eee70ee37ec106e0fbb7085c/a1a226e1013f172fcc60cbca0c334247/STREAMING-uhh-groan-female-epic-stock-media-1-00-00.mp3",
	"https://cdn.uppbeat.io/audio-files/13a6d3c9e914de5ab3fb451786993718/9fbac4f10f8b66994fa27c2e8d67499c/f16527bd5ee4adb8a9daf12fc08a44ec/STREAMING-ow-pain-female-smartsound-fx-4-4-00-00.mp3",
	"https://cdn.uppbeat.io/audio-files/13a6d3c9e914de5ab3fb451786993718/231d38235d9cb9f6a09811c6a1d851e8/97124824e73888baa3a5e0aec86b39fd/STREAMING-confused-moan-female-smartsound-fx-1-00-00.mp3",
	"https://cdn.uppbeat.io/audio-files/8217105e2d58a8e4d9cf8e12b2665978/2a90d950f90c15e04ddcb86a75c1159f/fd053d6a13cd960911dae348e1db70b1/STREAMING-sighing-in-frustration-woman-tomas-herudek-medium-2-00-03.mp3",
	"https://cdn.uppbeat.io/audio-files/13a6d3c9e914de5ab3fb451786993718/2ae7e1e2de0adc2184ece89279c6ca0c/8b8939116a36d7b65ed406915c26df65/STREAMING-woman-moaning-in-anger-smartsound-fx-1-00-00.mp3",
	"https://cdn.uppbeat.io/audio-files/13a6d3c9e914de5ab3fb451786993718/b69e8c731e7bfb6003a6bc3fa70094d4/cf2a7075fb95f6499fef3484649ba48b/STREAMING-groaning-in-frustration-female-smartsound-fx-1-1-00-00.mp3",
	"https://cdn.uppbeat.io/audio-files/8f7bad86600558899edb9677072692ee/d8dc274e3f5c0ac6b7d313d94930b69c/09970f5987e9ded503161f27f5b5e90c/STREAMING-kiss-mwah-female-betacut-1-00-00.mp3",
	"https://cdn.uppbeat.io/audio-files/8f7bad86600558899edb9677072692ee/d7863f6ccfe90582924c8f10b278bf88/2791b28875232481bb180a84692f11b9/STREAMING-sloppy-kiss-female-betacut-1-00-01.mp3",
	"https://cdn.uppbeat.io/audio-files/8a0ead3ea7dbf25377a13251625e6d3d/383034f2f4c7940c3e4aa715319359ba/e262bf179c66f822d36b4fcb74d03d24/STREAMING-moaning-in-pleasure-female-epic-stock-media-1-00-02.mp3",
	"https://cdn.uppbeat.io/audio-files/8a0ead3ea7dbf25377a13251625e6d3d/0f68e745700a6758911de73f76096eda/f4d4b6c32090b922a9a8a4661c6a8129/STREAMING-woman-screams-in-pleasure-epic-stock-media-1-1-00-00.mp3",
	"https://cdn.uppbeat.io/audio-files/8a0ead3ea7dbf25377a13251625e6d3d/39aa7e158f69881ea561c051f139d9aa/9efcfd1c602108684ba2d0156d39f46e/STREAMING-woman-screaming-in-pleasure-epic-stock-media-3-3-00-01.mp3",
	"https://cdn.uppbeat.io/audio-files/8f7bad86600558899edb9677072692ee/94ac347d0ad8da1bdd11ad3c3a271ef1/2fd56f8881097bfe9704be36534d6214/STREAMING-kiss-female-betacut-1-00-01.mp3",
	"https://cdn.uppbeat.io/audio-files/8a0ead3ea7dbf25377a13251625e6d3d/07398ed4481e0dbd6527536d8dd28219/68f8b9abaafc7c16dce9f42c1aa72255/STREAMING-oof-moan-female-epic-stock-media-1-00-00.mp3",
	"https://cdn.uppbeat.io/audio-files/8a0ead3ea7dbf25377a13251625e6d3d/cedb76b82f28184da605701832294a0a/7f9738942a8ca32cd0aec7700e9274f5/STREAMING-pleasurable-moan-female-epic-stock-media-1-00-00.mp3",
	"https://cdn.uppbeat.io/audio-files/8217105e2d58a8e4d9cf8e12b2665978/2a90d950f90c15e04ddcb86a75c1159f/ab7565ae194d458e06cb2fd0d8658520/STREAMING-sighing-in-frustration-woman-tomas-herudek-short-1-00-03.mp3",
	"https://cdn.uppbeat.io/audio-files/8a0ead3ea7dbf25377a13251625e6d3d/0f68e745700a6758911de73f76096eda/49f7f0618489780dfbd0e27aa891d896/STREAMING-woman-screams-in-pleasure-epic-stock-media-2-2-00-00.mp3",
	"https://cdn.uppbeat.io/audio-files/8a0ead3ea7dbf25377a13251625e6d3d/bd7450227949f88222af6fc834a00edf/958c09a70292e0f175974f5fac98f3fd/STREAMING-ahh-female-epic-stock-media-1-00-00.mp3",
	"https://cdn.uppbeat.io/audio-files/8a0ead3ea7dbf25377a13251625e6d3d/2e2c205fc4a027b1956efb0c5b3dc071/950e4d49ed6678f4f8ade46f2c72e719/STREAMING-woman-moaning-in-pleasure-epic-stock-media-1-1-00-02.mp3",
	"https://cdn.uppbeat.io/audio-files/8a0ead3ea7dbf25377a13251625e6d3d/85960d0b17722262e725ca939b14608e/43a0fe6602bac19933df04096948a2c9/STREAMING-argh-female-epic-stock-media-1-00-00.mp3",
]

const canvas = document.getElementById("wheel");
const ctx = canvas.getContext("2d");
const spinBtn = document.getElementById("spinBtn");
const skipBtn = document.getElementById("skipTimer");
const resultModal = document.getElementById("result-modal");
const resultText = document.getElementById("result-text");
const countdownEl = document.getElementById("countdown");
const moan = document.getElementById("moan");

let spinCount = localStorage.getItem('spinCount') ? parseInt(localStorage.getItem('spinCount')) : 0;

const colors = ["#ff00ff", "#cc00cc", "#990099", "#660066", "#330033"];
const arc = Math.PI * 2 / optionSets.romantic.length;
let angle = 0;

let currentOptions = [];

function loadOptions() {
	const level = document.getElementById("difficulty-select").value;
	currentOptions = [...optionSets[level]];
	drawWheel();
}
loadOptions();

function drawWheel() {
	ctx.clearRect(0, 0, canvas.width, canvas.height); // clear previous wheel
	const arc = Math.PI * 2 / currentOptions.length;

	for (let i = 0; i < currentOptions.length; i++) {
		const start = angle + i * arc;
		const end = start + arc;
		ctx.beginPath();
		ctx.fillStyle = colors[i % colors.length];
		ctx.moveTo(200, 200);
		ctx.arc(200, 200, 200, start, end);
		ctx.fill();
		ctx.save();
		ctx.translate(200, 200);
		ctx.rotate(start + arc / 2);
		ctx.fillStyle = "white";
		ctx.fillText(currentOptions[i], 100, 0);
		ctx.restore();
	}
}

let timer;

function extractMinutes(text) {
	const match = text.match(/(\d+)\s*min/);
	return match ? parseInt(match[1]) : null;
}

function startCountdown(minutes) {
	let seconds = minutes * 60;
	clearInterval(timer);
	timer = setInterval(() => {
		let min = Math.floor(seconds / 60);
		let sec = seconds % 60;
		countdownEl.textContent = `${min}m ${sec}s`;
		if (--seconds < 0) {
			clearInterval(timer);
			countdownEl.textContent = "Time's up!";
		}
	}, 1000);
}

skipBtn.onclick = () => {
	clearInterval(timer);
	countdownEl.textContent = "Skipped!";
};

const challenges = {
	spins: {
		name: "Spin 10 times",
		description: "Spin 10 times to unlock bonus option",
		progress: localStorage.getItem('spinChallengeProgress') ? parseInt(localStorage.getItem('spinChallengeProgress')) : 0,
		threshold: 10,
		unlocked: false
	},
	moanLand: {
		name: "Land on 'Moan Challenge' 3 times",
		description: "Unlock kinky surprise",
		progress: localStorage.getItem('specialOptionChallengeProgress') ? parseInt(localStorage.getItem('specialOptionChallengeProgress')) : 0,
		threshold: 3,
		unlocked: false
	}
};

function updateChallengeProgress() {
	if (challenges.spins.progress >= challenges.spins.threshold && !challenges.spins.unlocked) {
		challenges.spins.unlocked = true;
		// alert("Challenge Complete: Spin 10 times - Bonus option unlocked!");
	}
	if (challenges.moanLand.progress >= challenges.moanLand.threshold && !challenges.moanLand.unlocked) {
		challenges.moanLand.unlocked = true;
		alert("Challenge Complete: Moan Challenge landed 3 times - Kinky unlocked!");
	}

	document.getElementById("challenge-list").innerHTML = `
        <li>${challenges.spins.name}: ${challenges.spins.progress}/${challenges.spins.threshold} ${challenges.spins.unlocked ? '(Unlocked)' : ''}</li>
        <li>${challenges.moanLand.name}: ${challenges.moanLand.progress}/${challenges.moanLand.threshold} ${challenges.moanLand.unlocked ? '(Unlocked)' : ''}</li>
      `;
}

function trackSpin(result) {
	spinCount++;
	localStorage.setItem('spinCount', spinCount);
	challenges.spins.progress++;
	localStorage.setItem('spinChallengeProgress', challenges.spins.progress);

	if (result === "Moan Challenge") {
		challenges.moanLand.progress++;
		localStorage.setItem('specialOptionChallengeProgress', challenges.moanLand.progress);
	}

	updateChallengeProgress();
}

spinBtn.onclick = function () {
	spinBtn.disabled = true;
	let spinAngle = Math.floor(Math.random() * 360 + 1080);
	let duration = 4000;
	let start = null;

	function animate(timestamp) {
		if (!start) start = timestamp;
		let progress = timestamp - start;
		let eased = progress / duration;
		angle = spinAngle * eased;
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		drawWheel();

		if (progress < duration) {
			requestAnimationFrame(animate);
		} else {
			let selected = Math.floor(currentOptions.length - (angle % 360) / (360 / currentOptions.length));
			if (selected >= currentOptions.length) selected = 0;
			const result = currentOptions[selected];
			resultText.textContent = result;
			resultModal.style.display = "flex";
			const randomMoan = moanOptions[Math.floor(Math.random() * moanOptions.length)];
			moan.src = randomMoan;
			moan.play();
			trackSpin(result);

			let minutes = extractMinutes(result);
			if (minutes) startCountdown(minutes);

			spinBtn.disabled = false;
		}
	}
	requestAnimationFrame(animate);
};

updateChallengeProgress();

document.getElementById("close-result").onclick = function () {
	document.getElementById("result-modal").style.display = "none";
};


let extremeUnlocked = localStorage.getItem('extremeUnlocked') === 'true';

if (extremeUnlocked) {
	document.querySelector('option[value="extreme"]').disabled = false;
}

if (spinCount >= 20 && !extremeUnlocked) {
	extremeUnlocked = true;
	localStorage.setItem("extremeUnlocked", true);
	document.querySelector('option[value="extreme"]').disabled = false;
	alert("🔥 Extreme mode unlocked!");
}

document.getElementById("difficulty-select").addEventListener("change", function () {
	console.log('this.value: ', this.value);
	if (this.value === "extreme" && !extremeUnlocked) {
		alert("Extreme mode is locked. Complete 20 spins to unlock.");
		this.value = "naughty";
	}
	loadOptions();
});

document.addEventListener("DOMContentLoaded", () => {
	loadOptions(); // draws wheel based on default difficulty
});

function spinTheWheel() {
	const spins = 10 + Math.floor(Math.random() * 5); // random spin rounds
	const totalSlices = currentOptions.length;
	const arc = Math.PI * 2 / totalSlices;

	let rotation = spins * 360 + Math.random() * 360;
	let finalAngle = (rotation % 360) * Math.PI / 180;
	let index = totalSlices - Math.floor(finalAngle / (2 * Math.PI) * totalSlices) - 1;

	const selectedOption = currentOptions[index];

	// Spin animation
	canvas.style.transition = 'transform 4s ease-out';
	canvas.style.transform = `rotate(${rotation}deg)`;

	setTimeout(() => {
		canvas.style.transition = 'none';
		canvas.style.transform = 'rotate(0deg)';
		showResult(selectedOption);
	}, 4000);
}

spinBtn.addEventListener("click", () => {
	spinCount++;
	console.log('spinCount: ', spinCount);
	localStorage.setItem('spinCount', spinCount);

	if (spinCount % 5 === 0) {
		showResult("🎉 SECRET CHALLENGE UNLOCKED! 🎉");
	} else {
		spinTheWheel();
	}
});

function showResult(text) {
	resultText.textContent = text;
	resultModal.style.display = "block";

	if (text.toLowerCase().includes("moan")) {
		moan.play();
	}

	if (text.includes("min")) {
		startCountdown(extractMinutes(text));
	}
}

function extractMinutes(text) {
	const match = text.match(/(\d+)\s*min/);
	return match ? parseInt(match[1]) : 0;
}
