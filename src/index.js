// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    if (currency <= 0) return {};
    if (currency > 10000 ) return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    
    let c = currency % 100, //монеты
        d = Math.trunc(currency / 100), //d- количество долларов
        mon = [50, 25, 10, 5, 1]; //номиналы монет H=50, Q=25, D=10, N=5, P=1
    let resObj = {"H":0,"Q":0,"D":0,"N":0,"P":0};

    for (let i = 0; i < 5; i++){
      if (i > 0) {d = 0}; //количество долларов будем умножать на 2 только для половинок
       resObj[Object.keys(resObj)[i]] = d * 2 + Math.trunc(c / mon[i]);
       c = c % mon[i];
    }
    
    let newObj = {};
    //добавим непустые поля из resObj в newObj
    Object.keys(resObj).forEach(prop => {
      if (resObj[prop]) {
        newObj[prop] = resObj[prop]; 
      }
    });

    return newObj;

  }
