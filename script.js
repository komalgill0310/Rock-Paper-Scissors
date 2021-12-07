let img = document.createElement('img');
let randImg = document.createElement('img');
let userScore = 0;
let computerScore = 0;
let draw = 0;

let image = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiR80vQu8RQodJabjS_DEuDSKjEGj8FOFamQ&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs76TjTo9IQinGCgOy8OG38h1LCaXoTTzcoQ&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZgV9cF8NH7JJpld-Ulx5b_NggiMHtTK9lr5vBuXL1cHPlfnLZPY4DBIVJdY-8S4SbBjg&usqp=CAU"];

document.getElementById('rock').addEventListener('click', (e) => {
  e.preventDefault();
  img.src = image[0];
  document.body.appendChild(img);
  setTimeout(getRandomImage(), 1000);
  displayScore();
});

document.getElementById('paper').addEventListener('click', (e) => {
  e.preventDefault();
  img.src = image[1];
  document.body.appendChild(img);
  setTimeout(getRandomImage(), 1000);
  displayScore();
});

document.getElementById('scissor').addEventListener('click', (e) => {
  e.preventDefault();
  img.src = image[2];
  document.body.appendChild(img);
  setTimeout(getRandomImage(), 1000);
  displayScore();
});

function getRandomImage() {
  let randomImageIndex = Math.floor(Math.random() * image.length);
  randImg.src = image[randomImageIndex];
  document.body.appendChild(randImg);
}

function displayScore() {
  if (img.src === image[0] && randImg.src === image[2] || img.src === image[2] && randImg.src === image[1] || img.src === image[1] && randImg.src === image[0]) {
    let countUserScore = document.getElementById('userScore');
    countUserScore = userScore++;
    document.getElementById('userScore').textContent = "You Won " + userScore + " time";
  }
  else if (img.src === image[2] && randImg.src === image[0] || img.src === image[1] && randImg.src === image[2] || img.src === image[0] && randImg.src === image[1]) {
    let countCompScore = document.getElementById('compScore');
    countCompScore = computerScore++;
    document.getElementById('compScore').textContent = "You lost " + computerScore + " time";
  }
  else {
    let countDraw = document.getElementById('draw');
    countDraw = draw++;
    document.getElementById('draw').textContent = "Draw " + draw + " time";
  }
}








