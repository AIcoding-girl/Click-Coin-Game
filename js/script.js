// var counterTotal = parseInt($('.total').html());
var counter = 0;

// Add one coin per click
$('.click-coin').click(function () {
    counter += 1;
    checksUpdates();
});

function updateTotalCount(counter) {
    $('.total').html(counter);
}

// Disables buttons under 10 or 90
function checkCounter(counter) {
    if (counter >= 10) {
        $('#btn-one').prop('disabled', false);
    } else {
        $('#btn-one').prop('disabled', true);
    }

    if (counter >= 90) {
        $('#btn-ten').prop('disabled', false);
    } else {
        $('#btn-ten').prop('disabled', true);
    }
};

function checksUpdates() {
    checkCounter(counter);
    updateTotalCount(counter);
}

$('#btn-one').click(function () {
    var price1 = 10;
    var oneUpgrades = parseInt($('.upgrades-one').html());
    oneUpgrades += 1;
    $('.upgrades-one').html(oneUpgrades);

    setInterval(upgradeOne, 1000);

    counter -= price1;
    checksUpdates();
    priceChangeOne();
});

// Counter upgrade; goes faster by 1
function upgradeOne() {
    counter += 1;
    checksUpdates();
};

// Price goes up by 10%
function priceChangeOne() {
    var currentPrice = $('.price-for-one').html();
    currentPrice = Math.round(currentPrice * 1.1);
    $('.price-for-one').html(currentPrice);
};

$('#btn-ten').click(function () {
    var price10 = 90;
    var tenUpgrades = parseInt($('.upgrades-ten').html());
    tenUpgrades += 1;
    $('.upgrades-ten').html(tenUpgrades);

    setInterval(upgradeTen, 1000);

    counter -= price10;
    checksUpdates();
    priceChangeTen();
});

// Counter upgrade; goes faster by 10
function upgradeTen() {
    counter += 10;
    updateTotalCount(counter);
    checkCounter(counter);
};

// Price goes up by 10%
function priceChangeTen() {
    var newPrice = $('.price-for-ten').html();
    newPrice = Math.round(newPrice * 1.1);
    $('.price-for-ten').html(newPrice);
};