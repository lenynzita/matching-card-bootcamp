// document.querySelectorAll('div').addEventListener('click', firstly)
let theLastTwoImgClicked = [];
let divArr = document.querySelectorAll(".box");
let newPlaceFlags = document.querySelectorAll("img");
let deck   = [
  'Angola.png',
  'Angola.png',
  'Ghana.png',
  'Botswana.png',
  'Congo.png',
  'Congo.png',
  'Cameroon.png',
  'Cameroon.png',
  'Egypt.png',
  'Egypt.png',
  'DRC.png',
  'DRC.png',
  'Ethiopia.png',
  'Ethiopia.png',
  'Ghana.png',
  'Botswana.png ',
];
// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
  let currentIndex = array.length, temporaryValue,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

  shuffle(deck);
  newPlaceFlags.forEach((item,index) =>{
    item.src = deck[index]
  })
  console.log(deck);

// function shuttleImg(){
//   let newShuffle = shuffle(newPlaceFlags);
//   for( let i= 0; i<theAfricanFlags.length; i++){
//       newShuffle[i].src = theAfricanFlags[i]
//   }
// };

// function shuffle(array) {
//   let currentIndex = array.length,  randomIndex;

//   // While there remain elements to shuffle.
//   while (currentIndex != 0) {

//     // Pick a remaining element.
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex--;

//     // And swap it with the current element.
//     [array[currentIndex], array[randomIndex]] = [
//       array[randomIndex], array[currentIndex]];
//   }

//   return array;
// }
// shuttleImg(theAfricanFlags);
console.log(divArr);
divArr.forEach((div) => {
  div.addEventListener("click", (event) => {
    // console.log('event',event);
    const divThatWasClickOn = event.target;
    // console.log('eventClick',divThatWasClickOn);
    const imgThatWasClickOn = divThatWasClickOn.querySelector("img");
    theLastTwoImgClicked.push(imgThatWasClickOn);

    let img = div.querySelector(".hidden");
    // console.log(div);
    // we toggle the class hidden of the image.
    // specifically the img that was clicked
    // toggle= power switch
    img.classList.toggle("hidden");
    checkMatch();
    // Cannot read properties of undefined (reading 'toggle')
    // Cannot read toggle properties belong to undefined
  });
});

function checkMatch() {
  if (theLastTwoImgClicked.length == 2) {
    const firstimgClicked = theLastTwoImgClicked[0];
    const secimgClicked = theLastTwoImgClicked[1];
    if (firstimgClicked.src == secimgClicked.src) {
      console.log("its a match");
    } else {
      setTimeout(() => {
        firstimgClicked.classList.toggle("hidden");
        secimgClicked.classList.toggle("hidden");
      }, 500);
    }
    //the last code is a reset buttom.
    theLastTwoImgClicked = [];
  }
  // else if(theLastTwoImgClicked.lenght > 2){

  // }

  //forEach (img) is a loop that we are running multiple time.
  // document.querySelectorAll("img").forEach((img) => {

  //   // !(not): it doesn't contain the ("hidden") class.
  //   // the img is flip meaning it is showing to the user.

  //   /* if img classList not contain("hidden") class
  //       if img classList does not contain ("hidden")
  //       if image does not contain the ("hidden") class
  //       if the mage is flipped, showing */

  //   if (!img.classList.contains("hidden")) {
  //     // += means [increase by] 1
  //     flippedCards += 1;

  //     if (flippedCards == 1) {
  //       firstImage = img;
  //       console.log(firstImage);
  //     }
  //     console.log(firstImage);
  //     //flippedCards == 2 is for the second click
  //     if (flippedCards == 2) {
  //       let secImage = img;
  //       console.log(firstImage);
  //       console.log(secImage);
  //       if (firstImage.src == secImage.src) {
  //           //Cannot read properties of undefined (reading 'src')
  //           //cannot read source properties belong to undefined
  //           //   retain cardflipped
  //           console.log('string');
  //       }
  //     }
  //   }

  // });
}
