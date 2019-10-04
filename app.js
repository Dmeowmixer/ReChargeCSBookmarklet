// IIFE
(function(){
  // Verification <script> element has been loaded into DOM.
  console.log('Ready');
  let emailField = document.getElementById('checkout_email');
  let firstNameField = document.getElementById('checkout_shipping_address_first_name');
  let lastNameField = document.getElementById('checkout_shipping_address_last_name');
  let addressField = document.getElementById('checkout_shipping_address_address1');
  let cityField = document.getElementById('checkout_shipping_address_city');
  let countrySelect = document.getElementById('checkout_shipping_address_country');
  let stateSelect = document.getElementById('checkout_shipping_address_province');
  let zipcodeField = document.getElementById('checkout_shipping_address_zip');
  let phoneField = document.getElementById('checkout_shipping_address_phone');
  emailField.value('asdf');
  firstNameField.value('asdf');
  lastNameField.value('fdsa');


//   var wordArray = [];
//   var wordObj = {};
//   var sortedObj = {};
// // create DIV element to target and push wordCloud
//   let div = document.createElement('div');
//   div.id = 'sitePenResultsDiv';

//   div.style.cssText = 'position: absolute; width: 100%; height: 100%;'
//   document.body.appendChild(div);

//   // Currently targets all <p>
//   document.querySelectorAll('p').forEach(x => {
//     wordArray.push(x.innerText.split(" "));
//   });

//   // Should ideally handle key alphabetize sorting in wordArray.forEach (refactoring)
//   wordArray.forEach(x => {
//     for(var i = 0; i < x.length; i++){
//       var num = x[i];
//       // Check against word length
//       if(x[i].length >= 4){
//         // If current iteration exists, increate conut value, if not instantiate key and count to 1
//         wordObj[num] = wordObj[num] ? wordObj[num] +1 : 1;
//       }
//     }
//   })
//   Object.keys(wordObj).sort().forEach(function(key){
//     sortedObj[key] = wordObj[key];
//   })

//   // TODO
//   // ensure word length check is working properly
//   // refactor

//   for (var i in sortedObj){
//     if(sortedObj.hasOwnProperty(i)){
//       let appeared = sortedObj[i];
//       var createdEle;
//       if (appeared >= 6){
//         createdEle = document.createElement('h1');
//       } else if (appeared >= 4){
//         createdEle = document.createElement('h2');
//       } else if (appeared >= 2 ){
//         createdEle = document.createElement('h3');
//       } else{
//         createdEle = document.createElement('h4');
//       }

//       createdEle.innerHTML = i;
//       createdEle.style.cssText = 'width: 100%;color: black; margin: 10px; font-size: "";';
      
//       div.appendChild(createdEle);
//     }
//   }
}())