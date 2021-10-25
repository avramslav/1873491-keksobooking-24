const getRandomInteger = (beginRange, endRange) => {
  if (beginRange<0 && endRange<0) {
    return 'Неверные данные';
  }
  if(beginRange>endRange){[beginRange, endRange] = [endRange, beginRange];}
  if (beginRange<0) {
    beginRange = 0;
  }
  if (endRange<0){
    endRange = 0;
  }
  beginRange = Math.ceil(beginRange);
  endRange = Math.floor(endRange);
  if (beginRange > endRange){
    return 'Диапазон не содержит целочисленные значения';}
  else {
    return Math.floor(Math.random() * (endRange - beginRange +1))+ beginRange;
  }
};

const getRandomArbitrary = (beginRange, endRange, decimalPlaces) => {
  if (beginRange<0 && endRange<0){
    return 'Неверные данные';
  }
  if (beginRange<0) {
    beginRange = 0;
  }
  if (endRange<0){
    endRange=0;
  }
  if (beginRange>endRange) {[beginRange, endRange] = [endRange, beginRange];}
  const flag = Math.round(Math.random());

  let arbitrary;
  flag === 0 ? arbitrary = Math.random() * (endRange - beginRange) + beginRange : arbitrary = endRange - Math.random() * (endRange - beginRange);
  return parseFloat(arbitrary.toFixed(decimalPlaces));
};

const checkinHours= ['12:00', '13:00', '14:00'];
const checkoutHours=['12:00', '13:00', '14:00'];
const typeOfHousing = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const arrayFeatures=[ 'wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const arrayPhotos = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];

let arrayTemporaryDates = Array(10);
for (let i = 0; i < arrayTemporaryDates.length; i++){
  arrayTemporaryDates[i] = {
    author: {
      avatar: '',/* строка — адрес изображения вида img/avatars/user{{xx}}.png, где {{xx}} — это число от 1 до 10.
          Перед однозначными числами ставится 0. Например, 01, 02...10.
          Адреса изображений не повторяются.*/
    },
    offer : {
      title:'information about the ad',
      address: '',
      price: 0,
      type:'',
      rooms: 0,
      guests: 0,
      checkin:'',
      checkout:'',
      features:[],
      description:'Удобный, чистый номер для отдыхающих',
      photos:[] }      /*массив строк — массив случайной длины из значений*/,
    location: {    // объект — местоположение в виде географических координат. Состоит из двух полей:
      lat:0.0,    /*число с плавающей точкой — широта, случайное значение от 35.65000 до 35.70000*/
      lng: 0.0,   /*число с плавающей точкой — долгота, случайное значение от 139.70000 до 139.80000*/

    },
  };
}


const getGeneratedObjects = () => {
  let avatarNumbers = [];
  while(avatarNumbers.length < 10) {
    const x = getRandomInteger(1,10);
    if (!avatarNumbers.includes(x)) {
      avatarNumbers.push(x);
    }
  }
  avatarNumbers = avatarNumbers.map((addZero) => `img/avatars/user${  (`0${addZero}`).substr(-2,2)  }.png`);
  console.log(avatarNumbers);
  arrayTemporaryDates = arrayTemporaryDates.map( (element,i) => {
    element.author.avatar = avatarNumbers[i];
    console.log(element);
    return element;
  });
  //arrayTemporaryDates = arrayTemporaryDates.map(object => object[location].lat = 3;
  return arrayTemporaryDates;
};
console.log(getGeneratedObjects());
