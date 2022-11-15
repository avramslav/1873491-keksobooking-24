const getRandomInteger = (beginRange, endRange) => {
  if (beginRange < 0 && endRange < 0) {
    return 'Неверные данные';
  }
  if(beginRange > endRange){[beginRange, endRange] = [endRange, beginRange];}
  if (beginRange < 0) {
    beginRange = 0;
  }
  if (endRange < 0){
    endRange = 0;
  }
  beginRange = Math.ceil(beginRange);
  endRange = Math.floor(endRange);
  if (beginRange > endRange){
    return 'Диапазон не содержит целочисленные значения';}
  else {
    return Math.floor(Math.random() * (endRange - beginRange + 1)) + beginRange;
  }
};

const getRandomArbitrary = (beginRange, endRange, decimalPlaces = 1) => {
  if (beginRange < 0 && endRange < 0) {
    return -1;
  }
  if (beginRange < 0) {
    beginRange = 0;
  }
  if (endRange < 0) {
    endRange = 0;
  }
  if (beginRange > endRange) {
    [beginRange, endRange] = [endRange, beginRange];
  }

  const arbitrary = Math.random() * (endRange - beginRange) + beginRange;
  return arbitrary.toFixed(decimalPlaces);
};
export {getRandomInteger,getRandomArbitrary};
