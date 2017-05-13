function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return; // stops the function from running all together
  audio.currentTime = 0; // allows the sound to start again or repeat when pressed
  audio.play();
  key.classList.add('playing'); // adds animation from  my css
  console.log(audio);
};

function clickSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
   
};

	function clap(){
		const clap = document.querySelector("audio[data-key='65']");
		clap.currentTime = 0;
		clap.play();
	}

function removeTransition(e) {
  if(e.propertyName !== 'transform') return; // skip it if it's not a transform
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend',removeTransition));

window.addEventListener('keydown', playSound);

window.addEventListener('click', clickSound);