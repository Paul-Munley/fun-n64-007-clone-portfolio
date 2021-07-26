/* 

WAS THE CODE USED TO RECREATE THE PIXELATED LOOK IN THE BACKGROUND AND MANILA FOLDER OF THE GOLDENEYE MAIN MENU. AM KEEPING FOR POSSIBLE FUTURE REFERENCE OF CREATING PIXEL LIKE BACKGROUNDS. MORE SPECIFICALLY IF YOU EVER WANT TO USE A PIXEL GRADIENT.

const pixels = document.querySelector(".pixels");

const resize = () => {
  // Set content for all of the "pixels"
  pixels.innerHTML = "";

  // Reps the num of individual pixels in our grid
  const grid = 400;

  // Will get the current width of the window
  let windowWidth = window.innerWidth;
  let windowHeight = window.innerHeight;

  // Will set width and height of each pixel by dividing cur window width by num of grid pixels
  const pixelWidth = windowWidth / grid;
  const pixelHeight = pixelWidth;

  // Will get the number of available rows based on pixel height
  const availableRows = parseInt(windowHeight / pixelHeight);

  // Loop to loop through each row and loop to create each pixel
  for (let rowsCreated = 0; rowsCreated < availableRows; rowsCreated++) {
    for (let pixelsCreated = 0; pixelsCreated < grid; pixelsCreated++) {
      // const randomNumber = Math.random();
      const randomNumber = Math.trunc(Math.random() * 2);

      // To create darker background color for golden eye menu
      // const backgroundColor =
      //   randomNumber === 0
      //     ? "#9f946b"
      //     : randomNumber === 1
      //     ? "#656443"
      //     : randomNumber === 2
      //     ? "#5c644b"
      //     : "#3f3e31";

      // To create lighter manila folder like color for goldeneye menu
      const backgroundColorLight = randomNumber === 0 ? "#d7cea8" : "#c8be9b";

      // Markup to add each div which represents 1 "pixel"
      const markup = `<div class="pixel" style='background-color: ${backgroundColorLight}; height: ${pixelHeight}px; width: ${pixelWidth}px'></div>`;

      pixels.insertAdjacentHTML("beforeend", markup);
    }
  }
};

resize(); 
*/
