const naughtyOrNice = (data) => {
  let naughtyMeter = 0;

  for (const month in data) {
    for (const day in data[month]) {
      naughtyMeter += data[month][day] === 'Nice' ? 1 : -1;
    }
  }

  return naughtyMeter < 0 ? 'Naughty!' : 'Nice!';
};
