let img = document.createElement('img');
let randImg = document.createElement('img');

let image = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjbCbt-tpSLG0mW8ftMQqX1TLPh9zUh7-MoQ&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6F0pt5tNfkfpz8DYZ06UH4eUJV6GeOfg8kg&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLhxb4fESwYvjnFNbcai9MT6jBrE68GensGg&usqp=CAU"];

document.getElementById('rock').addEventListener('click', (e) => {
  e.preventDefault();
  console.log('Rock');
  img.src = image[0];
  document.body.appendChild(img);
  setTimeout(getRandomImage(),1000);
  winGame();
});

document.getElementById('paper').addEventListener('click', (e) => {
  e.preventDefault();
  console.log('Paper');
  img.src = image[1];
  document.body.appendChild(img);
  setTimeout(getRandomImage(),1000);
  winGame();
});

document.getElementById('scissor').addEventListener('click', (e) => {
  e.preventDefault();
  console.log('Scissor');
  img.src = image[2];
  document.body.appendChild(img);
  setTimeout(getRandomImage(),1000);
  winGame();
});

function getRandomImage() {
  let randomImageIndex = Math.floor(Math.random() * image.length);
  randImg.src = image[randomImageIndex];
  document.body.appendChild(randImg);
  console.log("random Function worked");
}

//pseudocode for check if user has won, draw or lost

//win rule: image[0]==image[2]; image[2]==image[1]; image[1]==imge[0]
//draw rule: if both of the images are equal
//lost: if none of the condition checks out

//find out: how to check if two array are equal or if the one array matches to the required array

function winGame(){
  if(img.src===image[0] && randImg.src===image[2]){
   document.getElementById('text').innerHTML = "Win";
  }
  else if(img.src===image[2] && randImg.src===image[1]){
    document.getElementById('text').innerHTML = "Win";
  }
  else if(img.src===image[1] && randImg.src===image[0]){
    document.getElementById('text').innerHTML = "Win";
  }
  else if(img.src===image[0] && randImg.src===image[0]){
    document.getElementById('text').innerHTML = "Draw";
  }
  else if(mg.src===image[1] && randImg.src===image[1]){
    document.getElementById('text').innerHTML = "Draw";
  }
  else if(mg.src===image[2] && randImg.src===image[2]){
    document.getElementById('text').innerHTML = "Draw";
  }
  else{
   document.getElementById('text').innerHTML = "Sadly, you have lost!";
  }
}




// images.forEach(image => {
  //   image.addEventListener('click', (e) => {
  //     e.preventDefault();
  //     if (image[0].clicked) {
  //       console.log('Rock');
  //       img.src = image[0];
  //       // document.body.appendChild(img);
  //     }
  //     else if (image[1]) {
  //       console.log('Paper');
  //       img.src = image[1];
  //       // document.body.appendChild(img);
  //     }
  //     else {
  //       console.log('Scissor');
  //       img.src = image[2];
  //       // document.body.appendChild(img);
  //     }
  //     return document.body.appendChild(img);
  // });
  // });

  // images.addEventListener('click', (e) => {
//   e.preventDefault();
//   if (image[0]) {
//     console.log('Rock');
//     img.src = image[0];
//     // document.body.appendChild(img);
//   }
//   else if (image[1]) {
//     console.log('Paper');
//     img.src = image[1];
//     // document.body.appendChild(img);
//   }
//   else {
//     console.log('Scissor');
//     img.src = image[2];
//     // document.body.appendChild(img);
//   }
//   return document.body.appendChild(img);
// });