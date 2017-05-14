function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return; // stops the function from running all together
  audio.currentTime = 0; // allows the sound to start again or repeat when pressed
  audio.play();
  key.classList.add('playing'); // adds animation from  my css
  console.log(audio);
};

	// Onclick functions
	function clap() {
		const clap = document.querySelector("audio[data-key='65']");
		clap.currentTime = 0;
		clap.play();
	}
	function hihat() {
		const hihat = document.querySelector("audio[data-key='83']");
		hihat.currentTime = 0;
		hihat.play();
	}
	function kick() {
		const kick = document.querySelector("audio[data-key='68']");
		kick.currentTime = 0;
		kick.play();
	}
	function openhat() {
		const openhat = document.querySelector("audio[data-key='70']");
		openhat.currentTime = 0;
		openhat.play();
	}
	function boom() {
		const boom = document.querySelector("audio[data-key='71']");
		boom.currentTime = 0;
		boom.play();
	}
	function ride() {
		const ride = document.querySelector("audio[data-key='72']");
		ride.currentTime = 0;
		ride.play();
	}
	function snare() {
		const snare = document.querySelector("audio[data-key='74']");
		snare.currentTime = 0;
		snare.play();
	}
	function tom() {
		const tom = document.querySelector("audio[data-key='75']");
		tom.currentTime = 0;
		tom.play();
	}
	function tink() {
		const tink = document.querySelector("audio[data-key='76']");
		tink.currentTime = 0;
		tink.play();
	}

function removeTransition(e) {
  if(e.propertyName !== 'transform') return; // skip it if it's not a transform
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend',removeTransition));

window.addEventListener('keydown', playSound);


