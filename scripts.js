//pseudocode for: able to select any of the three images
//need to use mouse event values
//whole RPS is based on mouse's left keydown button
//first try to link all of the images to the mouse event
//when user click on any of the three images then the screen should be able to display which mouse button was pressed

function getRandomImage(){
  const images = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjbCbt-tpSLG0mW8ftMQqX1TLPh9zUh7-MoQ&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6F0pt5tNfkfpz8DYZ06UH4eUJV6GeOfg8kg&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLhxb4fESwYvjnFNbcai9MT6jBrE68GensGg&usqp=CAU"];
  let randomImageIndex = Math.floor(Math.random()*images.length);
  console.log(randomImageIndex);
  const createImageElement = document.createElement('img');
  console.log(createImageElement);
  createImageElement.src = images[randomImageIndex];
  document.body.appendChild(createImageElement);
}


