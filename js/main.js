function getRandomInteger(beginRange, endRange) {
  if(beginRange>endRange){[beginRange, endRange] = [endRange, beginRange];}
  beginRange = Math.ceil(beginRange);
  endRange = Math.floor(endRange);
  return Math.floor(Math.random() * (endRange - beginRange +1))+ beginRange;
}

function getRandomArbitrary(beginRange, endRange, decimalPlaces) {

  if(beginRange>endRange){[beginRange, endRange] = [endRange, beginRange];}
  const flag = Math.round(Math.random());

  let arbitrary;
  if (!flag) {
    arbitrary = endRange - Math.random() * (endRange - beginRange);
  } else {
    arbitrary = Math.random() * (endRange - beginRange) + beginRange;
  }
  return arbitrary.toFixed(decimalPlaces);
}

getRandomInteger(6,6);
getRandomArbitrary(1.3, 1.4, 3);
