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
}

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
}

console.log(getRandomInteger(-6, 13));
getRandomArbitrary(-1.3, 1.4, 3);
