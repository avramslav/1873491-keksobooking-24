import {getRandomInteger,getRandomArbitrary} from './util.js';

const ARRAY_LENGTH = 10;
const checkinOrOutHours= ['12:00', '13:00', '14:00'];
const typeOfHousing = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const arrayFeatures=[ 'wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const arrayPhotos = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];

const getArrayNumbers = (length,min,max) =>{
  const Numbers = [];
  while(Numbers.length < length) {
    const x = getRandomInteger(min,max);
    if (!Numbers.includes(x)) {
      Numbers.push(x);
    }
  }
  return Numbers;
};

let arrayTemporaryDates = Array(ARRAY_LENGTH);
for (let i = 0; i < arrayTemporaryDates.length; i++){
  arrayTemporaryDates[i] = {
    author: {
      avatar: '',
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
      photos:[] },
    location: {
      lat:0.0,
      lng: 0.0,
    },
  };
}


const getGeneratedObjects = () => {
  let avatarNumbers = getArrayNumbers(10,1,10);
  avatarNumbers = avatarNumbers.map((addZero) => `img/avatars/user${  (`0${addZero}`).substr(-2,2)  }.png`);
  arrayTemporaryDates = arrayTemporaryDates.map( (element,i) => {
    element.author.avatar = avatarNumbers[i];
    element.location.lat = getRandomArbitrary(35.65000, 35.70000, 5);
    element.location.lng = getRandomArbitrary(139.70000, 139.80000, 5);
    element.offer.address = `${element.location.lat.toString()  }, ${  element.location.lng.toString()}`;
    element.offer.price = getRandomInteger(3000,5000);
    element.offer.type = typeOfHousing[getRandomInteger(0,4)];
    element.offer.rooms = getRandomInteger(1,4);
    element.offer.guests = getRandomInteger(1,7);
    element.offer.checkin = checkinOrOutHours[getRandomInteger(0,2)];
    element.offer.checkout = checkinOrOutHours[getRandomInteger(0,2)];

    element.offer.features = (()=>{
      const length = getRandomInteger(1,6);
      let featuresNumbers = getArrayNumbers(length,0,5);
      featuresNumbers = featuresNumbers.map((index) => arrayFeatures[index]);
      return featuresNumbers;})();
    element.offer.photos =(() =>{
      let photosNumbers = getArrayNumbers(getRandomInteger(1,3),0,2);
      photosNumbers = photosNumbers.map((index) => arrayPhotos[index]);
      return photosNumbers;})();
    return element;
  });
  return arrayTemporaryDates;
};
export {getGeneratedObjects};
