// document.querySelectorAll('div').addEventListener('click', firstly)
let divArr = document.querySelectorAll(".box");
console.log(divArr);
divArr.forEach((div) => {
  div.addEventListener("click", () => {
    let img = div.querySelector(".hidden");
    console.log(div);
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
  let flippedCards = 0;
  let firstImage;
  //forEach (img) is a loop that we are running multiple time.
  document.querySelectorAll("img").forEach((img) => {
    // !(not): it doesn't contain the ("hidden") class.
    // the img is flip meaning it is showing to the user.

    /* if img classList not contain("hidden") class
        if img classList does not contain ("hidden") 
        if image does not contain the ("hidden") class
        if the mage is flipped, showing */

    if (!img.classList.contains("hidden")) {
      // += means [increase by] 1
      flippedCards += 1;
      
      if (flippedCards == 1) {
        firstImage = img;
        console.log(firstImage);
      }
      console.log(firstImage);
      //flippedCards == 2 is for the second click
      if (flippedCards == 2) {
        let secImage = img;
        console.log(firstImage);
        console.log(secImage);
        if (firstImage.src == secImage.src) {
            //Cannot read properties of undefined (reading 'src')
            //cannot read source properties belong to undefined
            //   retain cardflipped
            console.log('string');
        }
      }
    }
  });
}
