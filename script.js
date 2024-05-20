let robotsCount = 0;
let drillPower = 1;
let upgradeCost = 10;
let upgradePsCost = 50;
let robotsPerSecond = 0;
let drillSound = new Audio("drillSound.mp3");

document.getElementById('drill-button').addEventListener('click', function() {
    robotsCount += drillPower;
    document.getElementById('robots-count').textContent = robotsCount;
	
	drillSound.play();
	
    // Animate the drill
    let drill = document.getElementById('drill');
    drill.style.top = '0'; // Move drill down

    setTimeout(() => {
        drill.style.top = '-70px'; // Move drill back up
    }, 100); // Adjust the timing as needed
});

document.getElementById('upgrade-button').addEventListener('click', function() {
    if (robotsCount >= upgradeCost) {
        robotsCount -= upgradeCost;
        upgradeCost += 20; // Increase upgrade cost incrementally
        drillPower += 1;
        document.getElementById('robots-count').textContent = robotsCount;
        document.getElementById('upgrade-cost').textContent = upgradeCost;
    } else {
        alert('Not enough robots to upgrade!');
    }
});

document.getElementById('upgrade-perSec').addEventListener('click', function() {
    if (robotsCount >= upgradePsCost) {
        robotsCount -= upgradePsCost;
        robotsPerSecond += 3; // Increment robots per second
        upgradePsCost += 70; // Increase upgrade cost incrementally
        document.getElementById('robots-count').textContent = robotsCount;
        document.getElementById('PSupgrade-cost').textContent = upgradePsCost;
    } else {
        alert('Not enough robots to upgrade!');
    }
});

function updateRobots() {
    robotsCount += robotsPerSecond;
    document.getElementById('robots-count').textContent = robotsCount;
}

setInterval(updateRobots, 1000); // Update robots count every second
