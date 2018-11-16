const money = +prompt('Ваш бюджет на месяц?', '');
const time = prompt('Введите дату в формате YYYY-MM-DD', 'YYYY-MM-DD');
const expensesRequired = +prompt('Введите обязательную статью расходов в этом месяце', '');
const expensesHowMatch = +prompt('Во сколько обойдется?', '');

const appData = {
  budget: money,
  timeData: time,
  expenses: {
    expensesRequired: expensesHowMatch,
  },
  optionalExpenses: {},
  income: [],
  saving: false
};

const dayInMonth = 30;
const result = (money - expensesRequired) / dayInMonth;

console.log(appData.budget);
console.log(appData.timeData);
console.log(appData.expenses);
console.log(appData.saving);

alert(result);