// IIFE
(function(){
  // Verification <script> element has been loaded into DOM.
  console.log('Ready');
  var wordArray = [];
  var wordObj = {};
  var sortedObj = {};
// create DIV element to target and push wordCloud
  let div = document.createElement('div');
  div.style.cssText = 'position: absolute; width: 100%; height: 100%;'
  document.body.appendChild(div);

  // Currently targets all <p>
  document.querySelectorAll('p').forEach(x => {
    wordArray.push(x.innerText.split(" "));
  });

  // Should ideally handle key alphabetize sorting in wordArray.forEach (refactoring)
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
  Object.keys(wordObj).sort().forEach(function(key){
    sortedObj[key] = wordObj[key];
  })

  // TODO
  // set font-size larger depending on appeared value
  // !! IF font-size will not work, if statement and using h1 h2 h3 etc depending on appeared var as temporary fix
  // ensure word length check is working properly
  // refactor

  for (var i in sortedObj){
    if(sortedObj.hasOwnProperty(i)){
      let createdEle = document.createElement('p');
      let appeared = sortedObj[i];
      createdEle.innerHTML = i;
      createdEle.style.cssText = 'width: 100%;color: black; margin: 10px;';
      createdEle.style.fontSize = appeared * 10;
      div.appendChild(createdEle);
    }
  }
}())