

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const blockimage = document.getElementById('image')
const carimage = document.getElementById('carskin')
const button = document.getElementById('but1');
button.addEventListener('click', function() {rollnumber()});
const button2 = document.getElementById('skin');
button2.addEventListener('click', function() {rollskin()});

function rollskin(){
  const skin_num = getRandomInt(1, 90);
  carimage.setAttribute("src", "img/"+skin_num+".PNG");
}

function rollnumber(){
  const folder = getRandomInt(2, 9);
  let page = 0;
  let block = 0;
  if (folder === 2) {
    page = getRandomInt(1, 4);
    if (page === 1) {
      block = getRandomInt(1, 7);
    }
    if (page === 2) {
      block = getRandomInt(1, 8);
    }
    if (page === 3) {
      block = getRandomInt(1, 9);
    }
    if (page === 4) {
      block = getRandomInt(1, 8);
    }
  }

  if (folder === 3) {
    page = getRandomInt(1, 4);
    if (page === 1) {
      block = getRandomInt(1, 7);
    }
    if (page === 2) {
      block = getRandomInt(1, 6);
    }
    if (page === 3) {
      block = getRandomInt(1, 4);
    }
    if (page === 4) {
      block = getRandomInt(1, 8);
    }
  }

  if (folder === 4) {
    page = getRandomInt(1, 5);
    if (page === 1) {
      block = getRandomInt(1, 9);
    }
    if (page === 2) {
      block = getRandomInt(1, 6);
    }
    if (page === 3) {
      block = getRandomInt(1, 8);
    }
    if (page === 4) {
      block = getRandomInt(1, 8);
    }
    if (page === 5) {
      block = getRandomInt(1, 4);
    }
  }

  if (folder === 5) {
    page = getRandomInt(1, 5);
    if (page === 1) {
      block = getRandomInt(1, 7);
    }
    if (page === 2) {
      block = getRandomInt(1, 9);
    }
    if (page === 3) {
      block = getRandomInt(1, 7);
    }
    if (page === 4) {
      block = getRandomInt(1, 6);
    }
    if (page === 5) {
      block = getRandomInt(1, 4);
    }
  }

  if (folder === 6) {
    page = getRandomInt(1, 9);
    if (page === 1) {
      block = getRandomInt(1, 5);
    }
    if (page === 2) {
      block = getRandomInt(1, 9);
    }
    if (page === 3) {
      block = getRandomInt(1, 6);
    }
    if (page === 4) {
      block = getRandomInt(1, 8);
    }
    if (page === 5) {
      block = getRandomInt(1, 8);
    }
    if (page === 6) {
      block = getRandomInt(1, 8);
    }
    if (page === 7) {
      block = getRandomInt(1, 8);
    }
    if (page === 8) {
        block = getRandomInt(1, 4);
    }
    if (page === 9) {
        block = getRandomInt(1, 9);
    }
  }

  if (folder === 7) {
    page = getRandomInt(1, 6);
    if (page === 1) {
      block = getRandomInt(1, 9);
    }
    if (page === 2) {
      block = getRandomInt(1, 5);
    }
    if (page === 3) {
      block = getRandomInt(1, 6);
    }
    if (page === 4) {
      block = getRandomInt(1, 5);
    }
    if (page === 5) {
      block = getRandomInt(1, 6);
    }
    if (page === 6) {
      block = getRandomInt(1, 7);
    }
  }

  if (folder === 8) {
    page = getRandomInt(1, 9);
    if (page === 1) {
      block = getRandomInt(1, 4);
    }
    if (page === 2) {
      block = getRandomInt(1, 7);
    }
    if (page === 3) {
      block = getRandomInt(1, 8);
    }
    if (page === 4) {
      block = getRandomInt(1, 6);
    }
    if (page === 5) {
      block = getRandomInt(1, 4);
    }
    if (page === 6) {
      block = getRandomInt(1, 8);
    }
    if (page === 7) {
      block = getRandomInt(1, 6);
    }
    if (page === 8) {
        block = getRandomInt(1, 7);
    }
    if (page === 9) {
        block = getRandomInt(1, 7);
    }
  }
  if (folder === 9) {
    page = getRandomInt(1, 4);
  }
let result = (folder * 100) + (page * 10) + block;
document.getElementById("block").innerHTML = folder + '-' + page + '-' + block;
blockimage.setAttribute("src", "img/pic"+result+".jpg");
}


