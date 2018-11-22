let money = +prompt("Ваш бюджет на месяц?", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
  budget: money,
  expenses: {},
  optionalExpenses: {},
  income: [],
  timeData: time,
  savings: false
};

for (let i = 0; i < 2; i++) {
  let a = prompt("Введите обязательную статью расходов в этом месяце", "");
  let b = prompt("Во сколько обойдется?", "");

  if ( (typeof(a))=== 'string' && (typeof(a)) != null && a.length < 50 && a != "" && (typeof(b)) != null && b !== "") {
    console.log('done');
    appData.expenses[a] = b;
  } else {
    alert("Вы ввели некоретные данные, попробуйте ещё раз");
  }
  
};

/* Example for loops while and do while*/
// let i = 0;
// while ( i < 2) {
//   let a = prompt("Введите обязательную статью расходов в этом месяце", "");
//   let b = prompt("Во сколько обойдется?", "");

//   if ( (typeof(a))=== 'string' && (typeof(a)) != null && a.length < 50 && a != "" && (typeof(b)) != null && b !== "") {
//     console.log('done');
//     appData.expenses[a] = b;
//   } else {
//     alert("Вы ввели некоретные данные, попробуйте ещё раз");
//   }
//   i++
// }
// let i = 0
// do {
//   let a = prompt("Введите обязательную статью расходов в этом месяце", "");
//     let b = prompt("Во сколько обойдется?", "");
  
//     if ( (typeof(a))=== 'string' && (typeof(a)) != null && a.length < 50 && a != "" && (typeof(b)) != null && b !== "") {
//       console.log('done');
//       appData.expenses[a] = b;
//     } else {
//       alert("Вы ввели некоретные данные, попробуйте ещё раз");
//     }
//     i++
// } while ( i < 2);

appData.moneyPerDay = appData.budget / 30;

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 50) {
  console.log('Минимальный уровень достатка');
} else if (appData.moneyPerDay > 50 && appData.moneyPerDay < 2000) {
  console.log('Средний уровень достатка');
} else if (appData.moneyPerDay > 10000) {
  console.log('Высокий уровень достатка');
} else {
  console.log('Что пошло не так');
}

console.log(appData);