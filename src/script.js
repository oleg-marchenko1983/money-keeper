let money, time;

function incomingData() {
  money = +prompt('Ваш бюджет на месяц?', '');
  time = prompt('Введите дату в формате YYYY-MM-DD', '');

  while (isNaN(money) || money == '' || money == null) {
    money = +prompt('Ваш бюджет на месяц?', '');
  }
}

incomingData();

let appData = {
  budget: money,
  expenses: {},
  optionalExpenses: {},
  income: [],
  timeData: time,
  savings: true,
};

function chooseExpenses() {
  for (let i = 0; i < 2; i++) {
    let a = prompt('Введите обязательную статью расходов в этом месяце', '');
    let b = prompt('Во сколько обойдется?', '');

    if (
      typeof a === 'string' &&
      typeof a != null &&
      a.length < 50 &&
      a != '' &&
      typeof b != null &&
      b !== ''
    ) {
      console.log('done_expenses');
      appData.expenses[a] = b;
    } else {
      alert('Вы ввели некоретные данные, попробуйте ещё раз');
      i--;
    }
  }
}

chooseExpenses();

function chooseOptExpenses() {
  for (let i = 1; i < 4; i++) {
    let answer = prompt('Статья необязательных расходов?', '');
    if (typeof answer === 'string' && typeof answer != null && answer != '' && answer.length < 50) {
      console.log('done_opt_expenses');
      appData.optionalExpenses[i] = answer;
    } else {
      alert('Вы ввели некоректные данные');
      i--;
    }
  }
}

chooseOptExpenses();

function detectDayBudget() {
  appData.moneyPerDay = (appData.budget / 30).toFixed(1);

  alert('Ежедневный бюджет: ' + appData.moneyPerDay + 'грн');
}

detectDayBudget();

function detectLevel() {
  if (appData.moneyPerDay < 50) {
    console.log('Минимальный уровень достатка');
  } else if (appData.moneyPerDay > 50 && appData.moneyPerDay < 20000) {
    console.log('Средний уровень достатка');
  } else if (appData.moneyPerDay > 100000) {
    console.log('Высокий уровень достатка');
  } else {
    console.log('Что -то  пошло не так');
  }
}

detectLevel();

function checkSave() {
  if (appData.savings == true) {
    let save = +prompt('Введите сумму накоплений', '');
    let percent = +prompt('Введите процент', '');

    appData.incomingMonth = (save / 100 / 12) * percent;
    alert('Вы получите в месяц :' + appData.incomingMonth);
  }
}

checkSave();

console.log(appData);
