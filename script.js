let robotsCount = 0;
let drillPower = 1;
let upgradeCost = 10;

document.getElementById('drill-button').addEventListener('click', function() {
    robotsCount += drillPower;
    document.getElementById('robots-count').textContent = robotsCount;

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
