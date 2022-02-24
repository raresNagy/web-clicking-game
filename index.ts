class currency {
    value = 0;
    update(){
        document.getElementById('currency').innerHTML = 'Money: $' + this.value;
    }
    bonus(){
        document.getElementById('currency').innerHTML = 'Money: $' + this.value + ' BONUS!!💵';
    }

};


var money = new currency
money.value = 0;
var count = 0;

function addMoney(): void {

    count++;
    if (count % 5 == 0) {
        money.value+=500
        money.bonus()

    }
    else {
        money.value += 100;
        money.update();
    }

}

var workersExist = false;
var workerCount = 0;
var workTime = 1000;
var work: number;

function buyWorker(cost: number): void {
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