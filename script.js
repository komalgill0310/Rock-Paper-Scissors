let img = document.createElement('img');
let randImg = document.createElement('img');

let image = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjbCbt-tpSLG0mW8ftMQqX1TLPh9zUh7-MoQ&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6F0pt5tNfkfpz8DYZ06UH4eUJV6GeOfg8kg&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLhxb4fESwYvjnFNbcai9MT6jBrE68GensGg&usqp=CAU"];

document.getElementById('rock').addEventListener('click', (e) => {
  e.preventDefault();
  // console.log('Rock');
  img.src = image[0];
  document.body.appendChild(img);
  setTimeout(getRandomImage(), 1000);
  updateScoreBoard();
});

document.getElementById('paper').addEventListener('click', (e) => {
  e.preventDefault();
  // console.log('Paper');
  img.src = image[1];
  document.body.appendChild(img);
  setTimeout(getRandomImage(), 1000);
  updateScoreBoard();
});

document.getElementById('scissor').addEventListener('click', (e) => {
  e.preventDefault();
  // console.log('Scissor');
  img.src = image[2];
  document.body.appendChild(img);
  setTimeout(getRandomImage(), 1000);
  updateScoreBoard();
});

// document.getElementById('endGame').addEventListener('click', (e) => {
//   e.preventDefault();
//   let footRow = createTRow();
//   footRow.textContent = "Total";
//   console.log("End Game");
//   addFooterCell();
//   totalScore();
// });

function getRandomImage() {
  let randomImageIndex = Math.floor(Math.random() * image.length);
  randImg.src = image[randomImageIndex];
  document.body.appendChild(randImg);
}

function updateScoreBoard() {
  let dataToRow = appendDataToTRow();
  if (img.src === image[0] && randImg.src === image[2] || img.src === image[2] && randImg.src === image[1] ||
    img.src === image[1] && randImg.src === image[0]) {
    dataToRow.win.textContent = 1;
    dataToRow.lose.textContent = 0;
    dataToRow.draw.textContent = 0;
  }
  else if (img.src === image[0] && randImg.src === image[0] || img.src === image[1] && randImg.src === image[1] ||
    img.src === image[2] && randImg.src === image[2]) {
    dataToRow.win.textContent = 0;
    dataToRow.lose.textContent = 0;
    dataToRow.draw.textContent = 1;
  }
  else {
    dataToRow.win.textContent = 0;
    dataToRow.lose.textContent = 1;
    dataToRow.draw.textContent = 0;
  }
}

function addFooterRow() {
  let row = createTRow();
  let footerRow = document.getElementById('footer').appendChild(row);
  return footerRow;
}

function addFooterCell() {
  let tFooterRow = addFooterRow();
  let footerWin = createTData();
  let footerLose = createTData();
  let footerDraw = createTData();
  let addDataCellToFooter = {
    winForFooter: tFooterRow.appendChild(footerWin),
    loseForFooter: tFooterRow.appendChild(footerLose),
    drawForFooter: tFooterRow.appendChild(footerDraw)
  };
 return addDataCellToFooter;
}
let table = document.getElementById('tBodyOfScoreT');

function totalScore(){
let footerCell = addFooterCell();
for(i=1;i<table.rows.length;i++){
  winSum = footerCell.winForFooter.textContent;
  winSum += table.rows[i].cells[0];
  console.log(winSum);
}
}

function createTRow() {
  let tRow = document.createElement('tr');
  return tRow;
}

function appendRowToBody() {
  let rowOfBody = createTRow();
  let rowToBody = document.getElementById('tBodyOfScoreT').appendChild(rowOfBody);
  return rowToBody;
}

function createTData() {
  let tData = document.createElement('td');
  return tData;
}

function appendDataToTRow() {
  let rowToBody = appendRowToBody();
  let winBody = createTData();
  let loseBody = createTData();
  let drawBody = createTData();
  const data = {
    win: rowToBody.appendChild(winBody),
    lose: rowToBody.appendChild(loseBody),
    draw: rowToBody.appendChild(drawBody)
  };
  return data;
}




// if (img.src === image[0] && randImg.src === image[2] || img.src === image[2] && randImg.src === image[1] ||
//   img.src === image[1] && randImg.src === image[0]) {
//   win.textContent = 1;
//   lose.textContent = 0;
//   draw.textContent = 0;    
// }
// else if (img.src === image[0] && randImg.src === image[0] || img.src === image[1] && randImg.src === image[1] ||
//   img.src === image[2] && randImg.src === image[2]) {
//   console.log("Match has draw");
//   win.textContent = 0;
//   lose.textContent = 0;
//   draw.textContent = 1;
// }
// else {
//   console.log("Lost Lost Lost!!!");
//   win.textContent = 0;
//   lose.textContent = 1;
//   draw.textContent = 0;
// }
// }





// function dataCell(){
//  let tableDataCell = {
//  win: createTData(),
//  lose: createTData(),
//  draw:  createTData()
//  };
//  return tableDataCell;
// // }
// let win = createTData();
// let lose = createTData();
// let draw = createTData();

// let rowToBody = appendRowToBody();

// const data = {
//   win: rowToBody.appendChild(win),
//   lose: rowToBody.appendChild(lose),
//   draw: rowToBody.appendChild(draw)
// };


// function winGame() {
//   if (img.src === image[0] && randImg.src === image[2]) {
//     document.getElementById('text').innerHTML = "Win";
//     updateScoreBoard();
//   }
//   else if (img.src === image[2] && randImg.src === image[1]) {
//     document.getElementById('text').innerHTML = "Win";
//     updateScoreBoard();
//   }
//   else if (img.src === image[1] && randImg.src === image[0]) {
//     document.getElementById('text').innerHTML = "Win";
//     updateScoreBoard();
//   }
//   else if (img.src === image[0] && randImg.src === image[0]) {
//     document.getElementById('text').innerHTML = "Draw";
//     updateScoreBoard();
//   }
//   else if (img.src === image[1] && randImg.src === image[1]) {
//     document.getElementById('text').innerHTML = "Draw";
//     updateScoreBoard();
//   }
//   else if (img.src === image[2] && randImg.src === image[2]) {
//     document.getElementById('text').innerHTML = "Draw";
//     updateScoreBoard();
//   }
//   else {
//     document.getElementById('text').innerHTML = "Sadly, you have lost!";
//     updateScoreBoard();
//   }
// }

//pseudocode for check if user has won, draw or lost

//win rule: image[0]==image[2]; image[2]==image[1]; image[1]==imge[0]
//draw rule: if both of the images are equal
//lost: if none of the condition checks out

//find out: how to check if two array are equal or if the one array matches to the required array


// function totalScore(){
//  for(i=0;i<rowToBody.length;i++){
//    win = ;
//  }
// }
// function displayScore() {
//   let dataToRow = appendDataToTRow();
//   if (img.src === image[0] && randImg.src === image[2] || img.src === image[2] && randImg.src === image[1] ||
//     img.src === image[1] && randImg.src === image[0]) {
//     console.log("update Win column");

//   }
//   else if (img.src === image[0] && randImg.src === image[0] || img.src === image[1] && randImg.src === image[1] ||
//     img.src === image[2] && randImg.src === image[2]) {
//     console.log("Match has draw");

//   }
//   else {
//     console.log("Lost Lost Lost!!!");

//   }
// }






































// function insertRToBody(){
// let newRow = tbodyRef.insertRow();
// let newCell = newRow.insertCell();
// let text = document.createTextNode('New Row');
// newCell.appendChild(text);
// }






// createTData();

//steps to create scoreBoard Table
//create function  to create tableElement dynamically
// create tableHeading
//add tHeading names to the tHead

// function createTable(){
//   let table = document.createElement('table');
//   table.setAttribute('class','borderClass');
//   console.log(table);
//   return table;
// }

// let table = createTable();
// createTable();

// function createTableHeading(){
//   let tHead = table.createTHead();
//   return tHead;
//   // console.log(tHead);
// }

// let tHead = createTableHeading();

// function addTHeadName(){
//   let headingName = ["Win","Lose","Draw"];
//  console.log(headingName);
//  for(i=0;i<headingName.length;i++){
//    console.log(tHead.appendChild(document.createElement('th')).appendChild(document.createTextNode(headingName[i])));
//  }
// }

// addTHeadName();





















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