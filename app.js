// https://www.omnicalculator.com/finance/yield-to-call

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const v4 = document.getElementById('v4');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const yieldtocallRadio = document.getElementById('yieldtocallRadio');
const annualinterestRadio = document.getElementById('annualinterestRadio');
const callpriceRadio = document.getElementById('callpriceRadio');
const marketpriceRadio = document.getElementById('marketpriceRadio');
const numberofyearsuntilcallRadio = document.getElementById('numberofyearsuntilcallRadio');

let yieldtocall;
let annualinterest = v1;
let callprice = v2;
let marketprice = v3;
let numberofyearsuntilcall = v4;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');
const variable4 = document.getElementById('variable4');

yieldtocallRadio.addEventListener('click', function() {
  variable1.textContent = 'Annual interest';
  variable2.textContent = 'Call price';
  variable3.textContent = 'Market price';
  variable4.textContent = 'Number of years until call';
  annualinterest = v1;
  callprice = v2;
  marketprice = v3;
  numberofyearsuntilcall = v4;
  result.textContent = '';
});

annualinterestRadio.addEventListener('click', function() {
  variable1.textContent = 'Yield to call';
  variable2.textContent = 'Call price';
  variable3.textContent = 'Market price';
  variable4.textContent = 'Number of years until call';
  yieldtocall = v1;
  callprice = v2;
  marketprice = v3;
  numberofyearsuntilcall = v4;
  result.textContent = '';
});

callpriceRadio.addEventListener('click', function() {
  variable1.textContent = 'Yield to call';
  variable2.textContent = 'Annual interest';
  variable3.textContent = 'Market price';
  variable4.textContent = 'Number of years until call';
  yieldtocall = v1;
  annualinterest = v2;
  marketprice = v3;
  numberofyearsuntilcall = v4;
  result.textContent = '';
});

marketpriceRadio.addEventListener('click', function() {
  variable1.textContent = 'Yield to call';
  variable2.textContent = 'Annual interest';
  variable3.textContent = 'Call price';
  variable4.textContent = 'Number of years until call';
  yieldtocall = v1;
  annualinterest = v2;
  callprice = v3;
  numberofyearsuntilcall = v4;
  result.textContent = '';
});

numberofyearsuntilcallRadio.addEventListener('click', function() {
  variable1.textContent = 'Yield to call';
  variable2.textContent = 'Annual interest';
  variable3.textContent = 'Call price';
  variable4.textContent = 'Market price';
  yieldtocall = v1;
  annualinterest = v2;
  callprice = v3;
  marketprice = v4;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(yieldtocallRadio.checked)
    result.textContent = `Yield to call = ${computeyieldtocall().toFixed(2)}`;

  else if(annualinterestRadio.checked)
    result.textContent = `Annual interest = ${computeannualinterest().toFixed(2)}`;

  else if(callpriceRadio.checked)
    result.textContent = `Call price = ${computecallprice().toFixed(2)}`;

  else if(marketpriceRadio.checked)
    result.textContent = `Market price = ${computemarketprice().toFixed(2)}`;

  else if(numberofyearsuntilcallRadio.checked)
    result.textContent = `Number of years until call = ${computenumberofyearsuntilcall().toFixed(2)}`;
})

// calculation

function computeyieldtocall() {
  return (Number(annualinterest.value) + ((Number(callprice.value) - Number(marketprice.value)) / Number(numberofyearsuntilcall.value))) / ((Number(callprice.value) + Number(marketprice.value)) / 2) * 100;
}

function computeannualinterest() {
  return Number(costofGoodsManufactured.value) - Number(directLaborCost.value) - Number(factoryOverheadCost.value) - Number(openingWorkinProcessInventory.value) + Number(endingWorkinProcessInventory.value);
}

function computecallprice() {
  return Number(costofGoodsManufactured.value) - Number(directMaterialsCost.value) - Number(factoryOverheadCost.value) - Number(openingWorkinProcessInventory.value) + Number(endingWorkinProcessInventory.value);
}

function computemarketprice() {
  return Number(costofGoodsManufactured.value) - Number(directMaterialsCost.value) - Number(directLaborCost.value) - Number(openingWorkinProcessInventory.value) + Number(endingWorkinProcessInventory.value);
}

function computenumberofyearsuntilcall() {
  return Number(costofGoodsManufactured.value) - Number(directMaterialsCost.value) - Number(directLaborCost.value) - Number(factoryOverheadCost.value) + Number(endingWorkinProcessInventory.value);
}