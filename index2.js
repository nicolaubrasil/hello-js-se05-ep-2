const CryptoJS = require("crypto-js")

if(process.argv.length < 3){
  console.log('usage: node index2.js string alg[optional]')
  return
}

let ALG = process.argv[3]
let word = process.argv[2]
    
if(ALG == 'MD5'){
  console.log(word + ': ' +CryptoJS.MD5(word).toString(CryptoJS.enc.Base64))
  return
}
 
console.log(word + ': ' +CryptoJS.SHA256(word).toString(CryptoJS.enc.Base64))