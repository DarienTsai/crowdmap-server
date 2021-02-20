// Generates sample users for demo - our team social distances!
module.exports =  function samples(base){
  let vals = [];
  let deviation = 0;
  for( i = 0; i < 100; i ++){
    deviationx = (Math.random() * 10) - 5;
    deviationy = (Math.random() * 10) - 5;
    vals.push([base[0] + deviationx, base[1] + deviationy]);
  }

  return vals;
}