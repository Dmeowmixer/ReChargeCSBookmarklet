// IIFE
(function(){
  // Verification <script> element has been loaded into DOM.
  console.log('Ready');
  var wordArray = [];
  var wordObj = {};
// create DIV element to target and push wordCloud
  let div = document.createElement('div');
  div.style.cssText = 'position: absolute; width: 100%; height: 100%;'
  document.body.appendChild(div);

  // Currently targets all <p>
  document.querySelectorAll('p').forEach(x => {
    wordArray.push(x.innerText.split(" "));
  });

  wordArray.forEach(x => {
    for(var i = 0; i < x.length; i++){
      var num = x[i];
      // Check against word length
      if(x[i].length >= 4){
        // If current iteration exists, increate conut value, if not instantiate key and count to 1
        wordObj[num] = wordObj[num] ? wordObj[num] +1 : 1;
      }
    }
  })
  // Create text element for each wordObj K
  // Multiply style attribute font-size by value * 10;
  for (var i in wordObj){
    if(wordObj.hasOwnProperty(i)){
      let createdEle = document.createElement('p');
      let appeared = wordObj[i];
      createdEle.innerHTML = i;
      createdEle.style.cssText = 'width: 100%;color: black; margin: 10px; size: ' + appeared * 10 + ';';
      div.appendChild(createdEle);
    }
  }
}())