(function(){
  console.log("Ready");
  var wordArray = [];
  var wordObj = {};
  var sortedObj = {};
  let div = document.createElement("div");
  div.style.cssText = "position: absolute; width: 100%; height: 100%;"
  document.body.appendChild(div);
  document.querySelectorAll("p").forEach(x => {
    wordArray.push(x.innerText.split(" "));
  });
  wordArray.forEach(x => {
    for(var i = 0; i < x.length; i++){
      var num = x[i];
      if(x[i].length >= 4){
        wordObj[num] = wordObj[num] ? wordObj[num] +1 : 1;
      }
    }
  })
  Object.keys(wordObj).sort().forEach(function(key){
    sortedObj[key] = wordObj[key];
  })
  for (var i in sortedObj){
    if(sortedObj.hasOwnProperty(i)){
      let createdEle = document.createElement("p");
      let appeared = sortedObj[i];
      createdEle.innerHTML = i;
      createdEle.style.cssText = "width: 100%;color: black; margin: 10px;";
      createdEle.style.fontSize = appeared * 10;
      div.appendChild(createdEle);
    }
  }
}())