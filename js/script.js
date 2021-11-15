'use strict'
const title = document.getElementsByTagName("h1")[0];
const btnPlus = document.querySelector('.screen-btn');

const percentValue = document.querySelectorAll('.other-items.percent');
const numberValue = document.querySelectorAll('other-items.number');

const inputRange = document.querySelector('.rollback input');
const inputRangeValue = document.querySelector('.rollback .range-value');

const startBtn = document.getElementsByClassName("handler_btn")[0]
const resetBtn = document.getElementsByClassName("handler_btn")[1]


const total = document.getElementsByClassName("total-input")[0]
const totalCount = document.getElementsByClassName("total-input")[1]
const totalCountOther = document.getElementsByClassName("total-input")[2]
const fullTotalCount = document.getElementsByClassName("total-input")[3]
const totalCountRollback = document.getElementsByClassName("total-input")[4]

let screens = document.querySelectorAll('.screen');


const appData = {
  isError: false,
  title: '',
  screens: [],
  screensNumber: 0,
  screenPrice: 0,
  adaptive: true,
  rollback: 30,
  fullPrice: 0,
  servicePercentPrice: 0,
  servicePricesPercent: 0,
  servicePricesNumber: 0,
  servicesPercent: {},
  servicesNumber: {},

  init: function () {
    inputRange.disabled = true;
    appData.addTitle();
    startBtn.addEventListener('click', function (event) {
      event.preventDefault();
      appData.isError = false;
      appData.testedScreenField();
      inputRange.disabled = false;
    });

    btnPlus.addEventListener('click', appData.addScreenBlock);
    inputRange.addEventListener('input', appData.getRollbackPercent);
  },

  getRollbackPercent: function (event) {
    inputRangeValue.textContent = event.target.value + '%';
    appData.rollback = event.target.value;

    appData.servicePercentPrice = Math.ceil(appData.fullPrice + (appData.fullPrice * (appData.rollback / 100)));
    totalCountRollback.value = appData.servicePercentPrice;
  },

  addTitle: function () {
    document.title = title.textContent
  },

  testedScreenField: function () {
    screens = document.querySelectorAll('.screen')
    screens.forEach(function (screen) {
      const select = screen.querySelector('select')
      const input = screen.querySelector('input').value
      const selectName = select.options[select.selectedIndex].textContent

      if (input === '' || selectName === 'Тип экранов') {
        console.log('незаполненная строка');
        appData.isError = true;
      }

    })

    if (!appData.isError) {
      appData.start();
    }
  },

  start: function () {
    appData.addScreens()
    appData.addServices()
    appData.addPrices()

    //appData.logger();
    appData.showResult()
  },

  showResult: function () {
    total.value = appData.screenPrice
    totalCountOther.value = appData.servicePricesPercent + appData.servicePricesNumber
    fullTotalCount.value = appData.fullPrice
    totalCountRollback.value = appData.servicePercentPrice
    totalCount.value = appData.screensNumber

  },

  addScreens: function () {
    screens = document.querySelectorAll('.screen');

    screens.forEach(function (screen, index) {
      const select = screen.querySelector('select')
      const input = screen.querySelector('input')
      const selectName = select.options[select.selectedIndex].textContent

      appData.screens.push({
        id: index,
        name: selectName,
        price: +select.value * +input.value,
        counts: +input.value,
      })
    })
    console.log(appData.screens);
  },

  addServices: function () {

    percentValue.forEach(function (item) {
      const check = item.querySelector('input[type=checkbox]')
      const label = item.querySelector('label')
      const input = item.querySelector('input[type=text]')

      if (check.checked) {
        appData.servicesPercent[label.textContent] = +input.value
      }
    })

    numberValue.forEach(function (item) {
      const check = item.querySelector('input[type=checkbox]')
      const label = item.querySelector('label')
      const input = item.querySelector('input[type=text]')

      if (check.checked) {
        appData.servicesNumber[label.textContent] = +input.value
      }
    })
  },
  addScreenBlock: function () {
    const cloneScreen = screens[0].cloneNode(true);

    screens[screens.length - 1].after(cloneScreen)
  },

  addPrices: function () {
    for (let screen of appData.screens) {
      appData.screenPrice += +screen.price
    }

    for (let value of appData.screens) {
      appData.screensNumber += +value.counts
    }

    for (let key in appData.servicesNumber) {
      appData.servicePricesNumber += appData.servicesNumber[key]
    }

    for (let key in appData.servicesPercent) {
      appData.servicePricesPercent += appData.screenPrice * (appData.servicesPercent[key] / 100)
    }

    appData.fullPrice = +appData.screenPrice + appData.servicePricesNumber + appData.servicePricesPercent;

    appData.servicePercentPrice = Math.ceil(appData.fullPrice - (appData.fullPrice * (appData.rollback / 100)));
  },

  logger: function () {
    console.log(appData.fullPrice);
    console.log(appData.servicePercentPrice);
    console.log(appData.screens);
  },
}


appData.init();