// Balloon popping function
function popBalloon() {
	this.classList.add('popped');
}

// Balloons
const balloons = document.querySelectorAll('.balloon');
balloons.forEach(balloon => {
	balloon.addEventListener('click', popBalloon);
});

// Reset button
const resetButton = document.getElementById('reset-button');
resetButton.addEventListener('click', function() {
	// Remove popped class from balloons
	balloons.forEach(balloon => {
		balloon.classList.remove('popped');
	});
});
