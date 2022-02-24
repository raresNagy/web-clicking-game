var currency = /** @class */ (function () {
    function currency() {
        this.value = 0;
    }
    currency.prototype.update = function () {
        document.getElementById('currency').innerHTML = 'Money: $' + this.value;
    };
    currency.prototype.bonus = function () {
        document.getElementById('currency').innerHTML = 'Money: $' + this.value + ' BONUS!!💵';
    };
    return currency;
}());
;
var money = new currency;
money.value = 0;
var count = 0;
function addMoney() {
    count++;
    if (count % 5 == 0) {
        money.value += 500;
        money.bonus();
    }
    else {
        money.value += 100;
        money.update();
    }
}
var workersExist = false;
var workerCount = 0;
var workTime = 1000;
var work;
function buyWorker(cost) {
    if (money.value >= cost) {
        money.value -= cost;
        document.getElementById('workerButton').innerHTML = 'Buy a worker for 1000';
        money.update();
        workerCount++;
    }
    else {
        document.getElementById('workerButton').innerHTML = 'Not enough money!';
    }
}
work = window.setInterval(workerAddMoney, 1000);
function workerAddMoney() {
    money.value += 100 * workerCount;
    money.update();
}
