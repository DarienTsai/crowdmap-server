// Generates sample users for demo - our team social distances!
module.exports =  function samples(base){
  let vals = [];
  let deviation = 0;
  for( i = 0; i < 1750; i ++){
    deviationx = (Math.random() / 33) - .01515;
    deviationy = (Math.random() / 33) - .01515;
    vals.push([base[0] + deviationx, base[1] + deviationy]);
  }

  return vals;
}