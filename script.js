let robotsCount = 0;
let drillPower = 1;
let upgradeCost = 10;
let upgradePsCost = 50;
let robotsPerSecond = 0;
let drillSound = new Audio("drillSound.mp3");

document.addEventListener("DOMContentLoaded", () => {
    const drillButton = document.getElementById('drill-button');
    const upgradeButton = document.getElementById('upgrade-button');
    const upgradePerSecButton = document.getElementById('upgrade-perSec');
    const alertContainer = document.getElementById('alert-container');
    const alertMessage = document.getElementById('alert-message');

    drillButton.addEventListener('click', () => {
        robotsCount += drillPower;
        document.getElementById('robots-count').textContent = robotsCount;

        drillSound.play();

        // Animate the drill
        let drill = document.getElementById('drill');
        drill.style.top = '130px'; // Move drill down

        setTimeout(() => {
            drill.style.top = '20px'; // Move drill back up
        }, 100); // Adjust the timing as needed

    });

    upgradeButton.addEventListener('click', () => {
        if (robotsCount >= upgradeCost) {
            robotsCount -= upgradeCost;
            upgradeCost += 20; // Increase upgrade cost incrementally
            drillPower += 1;
            document.getElementById('robots-count').textContent = robotsCount;
            document.getElementById('upgrade-cost').textContent = upgradeCost;
            showAlert('Drill upgraded!');
        } else {
            showAlert('Not enough robots to upgrade');
        }
    });

    upgradePerSecButton.addEventListener('click', () => {
        if (robotsCount >= upgradePsCost) {
            robotsCount -= upgradePsCost;
            robotsPerSecond += 3; // Increment robots per second
            upgradePsCost += 70; // Increase upgrade cost incrementally
            document.getElementById('robots-count').textContent = robotsCount;
            document.getElementById('PSupgrade-cost').textContent = upgradePsCost;
            showAlert('Robots/sec upgraded!');
        } else {
            showAlert('Not enough robots to upgrade');
        }
    });

    function updateRobots() {
        robotsCount += robotsPerSecond;
        document.getElementById('robots-count').textContent = robotsCount;
    }

    setInterval(updateRobots, 1000); // Update robots count every second

    function showAlert(message) {
        alertMessage.innerText = message;
        alertContainer.classList.remove('hidden');
        alertContainer.classList.add('visible');
        setTimeout(() => {
            alertContainer.classList.remove('visible');
            alertContainer.classList.add('hidden');
        }, 2000);
    }
});

const vampirizeButton = document.getElementById('vampirize-button');
const robotImage = document.getElementById('robot');
const logoImage = document.getElementById('logo');

vampirizeButton.addEventListener('click', () => {
    robotImage.src = 'shay.png';
    logoImage.src = 'primo.png';
    showAlert('Robot vampirized!');
});
