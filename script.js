const appData = {
  title: '',
  screens: [],
  screenPrice: 0,
  adaptive: true,
  rollback: 30,
  allServicePrices: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  services: {},
  start: function () {
    appData.asking();
    appData.addPrices();
    appData.getFullPrice();
    appData.getTitle();
    appData.getServicePercentPrice();


    appData.logger();
  },
  asking: function () {

    do {
      title = prompt('Как называется ваш проект?', 'Калькулятор верстки')
    } while (appData.isString(title))

    for (let i = 0; i < 2; i++) {
      let name;
      let price = 0

      do {
        name = prompt('Какие типы нужно разработать?')
      } while (appData.isString(name))

      do {
        price = prompt('Сколько будет стоить данная работа?')
      } while (!appData.isNumber(price))

      appData.screens.push({ id: i, name: name, price: price })
    }


    for (let i = 0; i < 2; i++) {
      let name;
      let price = 0;
      let key;


      do {
        name = prompt('Какой дополнительный тип услуги нужен?')
      } while (appData.isString(name))


      do {
        price = prompt('Сколько это будет стоить?')
      } while (!appData.isNumber(price))

      key = (+i + 1) + ": " + name;
      appData.services[key] = +price;
    }

    appData.adaptive = confirm('Нужен ли адаптив на сайте?')

  },
  addPrices: function () {
    let initialValue = 0;
    appData.screenPrice = appData.screens.reduce(function(sum, current) {
      return sum + +current.price
    }, initialValue);
    

    for (let service in appData.services) {
      appData.allServicePrices += +appData.services[service];
    }
  },
  isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
  },
  isString: function (str) {
    return !isNaN(parseFloat(str)) && isFinite(str);
  },
  getFullPrice: function () {
    appData.fullPrice = +appData.screenPrice + appData.allServicePrices
  },
  getTitle: function (title) {
    appData.title = appData.title.trim().charAt(0).toUpperCase() + appData.title.trim().slice(1).toLowerCase()
  },
  getServicePercentPrice: function () {
    appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100))
  },
  getRollbackMessage: function (price) {
    if (price >= 30000) {
      return 'Даем скидку в 10%'
    } else if (price >= 15000 && price < 30000) {
      return 'Даем скидку в 5%'
    } else if (price >= 0 && price < 15000) {
      return 'Скидка не предусмотрена'
    } else {
      return 'Что-то пошло не так'
    }
  },
  logger: function () {
    console.log(appData.fullPrice);
    console.log(appData.servicePercentPrice);
    console.log(appData.screens);
    console.log(appData.allServicePrices);
    console.log(appData.screenPrice);
    console.log(appData.services);
  }
}




appData.start();

