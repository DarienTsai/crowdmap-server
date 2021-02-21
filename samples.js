// Generates sample users for demo - our team social distances!
module.exports =  function samples(base){
  let vals = [];
  let deviation = 0;
  for( i = 0; i < 500; i ++){
    deviationx = (Math.random() / 5) - .25;
    deviationy = (Math.random() / 5) - .25;
    vals.push([base[0] + deviationx, base[1] + deviationy]);
  }

  return vals;
}