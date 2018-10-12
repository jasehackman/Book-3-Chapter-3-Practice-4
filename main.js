let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

function addExcitement (theWordArray, punc) {
  let buildMeUp = ""
  for (let i = 0; i < theWordArray.length; i++) {
    if (i > 0 && i % 3 === 0) {
    buildMeUp += `${theWordArray[i]}${punc} `;
    } else {
      buildMeUp += `${theWordArray[i]} `;
    }  
  }
  return buildMeUp;
}

let newSent = addExcitement(sentence, "?");

