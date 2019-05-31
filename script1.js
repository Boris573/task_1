let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
}
start();




let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income:[],
    savings: true
}

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
            b = prompt("Во сколько обойдется?", '');
    
        if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
            && a != '' && b != '' && a.length < 50) {
            console.log("done");
            appData.expenses[a] = b;
        } else {
            console.log ("bad result");
            i--;
        }
    }
}
chooseExpenses();

// let i = 0;
// while(i < 2) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//         b = prompt("Во сколько обойдется?", '');

//     if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
//         && a != '' && b != '' && a.length < 50) {
//         console.log("done");
//         appData.expenses[a] = b;

//     } else {
//         console.log ("bad result");
//         i--;
//     }
//     ++i;
// }

// let i = 0;
// do {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//         b = prompt("Во сколько обойдется?", '');

//     if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
//         && a != '' && b != '' && a.length < 50) {
//         console.log("done");
//         appData.expenses[a] = b;
//     } else {
//         console.log ("bad result");
//         i--;
//     }
//     ++i;
// } while(i < 2)

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget/30).toFixed();
}
detectDayBudget();

alert("Ежедневный бюджет: " + appData.moneyPerDay);

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log("Минимальный уровень достака");
    } else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень достака");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достака");
    } else {
        console.log("Произошла ошибочка");
    }
}

function chooseOptExpenses() {
    for (let i = 0; i < 3; i++) {
        let answer = prompt("Статья необязательных расходов?");
        appData.optionalExpenses[i+1] = answer;
    }
}
chooseOptExpenses();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?", ''),
            percent = +prompt("Под какой процент");

        appData.monthIncome = save/100/12 * percent;
        alert("Доход с вашего депозита: " + appData.monthIncome);
    }
}
checkSavings();