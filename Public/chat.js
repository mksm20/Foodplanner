var socket = io.connect('http://localhost:3000');

let btnIndex = document.getElementById('btn1');
let btnShow = document.getElementById('btn2');
let btnRemove = document.getElementById('btn3');
let btnRemoveLatest = document.getElementById('btn4');
let pageUpdate = document.getElementById('goesHere');
let meal = [];
let mealArr = [],
  mealArrCache = [];
let counter = 0,
  mealFinish;

btnShow.addEventListener('click', () => {
  pageUpdate.innerHTML = mealFinish;
});

btnRemove.addEventListener('click', () => {
  mealArr = [];
  mealFinish = '';
});
btnRemoveLatest.addEventListener('click', () => {
  mealArrCache.pop();
  mealFinish = '';
  for (let i = 0; i < mealArr.length; i++) {
    mealFinish += mealArrCache[i];
  }
});

btnIndex.addEventListener('click', () => {
  let mealSend = document.getElementById('box1').value;
  socket.emit('meal', {
    message: mealSend,
  });
  socket.on('meal', async (data) => {
    console.log(data.message);
    await data.message;
    pageUpdate.innerHTML = data.message;
    await { result: (pageUpdate.innerHTML = data.message) };
    let meals = document.getElementsByClassName('meals');
    for (let i = 0; i < meals.length; i++) {
      meal[i] = document.getElementById(`meal${i}`);
      //Sends name of meal to server - recieves recipie in return
      meal[i].addEventListener('click', () => {
        let mealSend = document.getElementById(`meal${i}`).value;
        socket.emit('mealFood', {
          message: mealSend,
        });
        //Recives recipie from server - formattet as html
        //Replaces inner html div id recipe with data from server
        socket.on('mealFood', async (data) => {
          await data.message;
          pageUpdate.innerHTML = data.message;
          let mealID = document.getElementById('recipe');
          let addToList = document.getElementById('addToList');
          //Gets inner html data and saves to  array - makes html string and
          //saves it client side
          addToList.addEventListener('click', async () => {
            let meal = createList();
            console.log(meal);
            await { result: (meal = createList()) };
            socket.emit('returnMeal', {
              message: meal,
            });
            mealArr[counter] = mealID.innerHTML;
            await { result: (mealArr[counter] = mealID.innerHTML) };
            counter++;
            for (let i = 0; i < counter; i++) {
              mealFinish += mealArr[i];
              mealArrCache.push(mealArr[i]);
            }
            mealArr = [];
          });
        });
      });
    }
  });
});

function createList() {
  let meal = {
    mealID: document.getElementById('mealID').outerText,
    Area: document.getElementById('area').outerText,
    Instruction: document.getElementById('ins').outerText,
    Youtube: document.getElementById('yt').outerText,
    ing1: document.getElementById('ing1').outerText,
    ing2: document.getElementById('ing2').outerText,
    ing3: document.getElementById('ing3').outerText,
    ing4: document.getElementById('ing4').outerText,
    ing5: document.getElementById('ing5').outerText,
    ing6: document.getElementById('ing6').outerText,
    ing7: document.getElementById('ing7').outerText,
    ing8: document.getElementById('ing8').outerText,
    ing9: document.getElementById('ing9').outerText,
    ing10: document.getElementById('ing10').outerText,
    ing11: document.getElementById('ing11').outerText,
    ing12: document.getElementById('ing12').outerText,
    ing13: document.getElementById('ing13').outerText,
    ing14: document.getElementById('ing14').outerText,
    ing15: document.getElementById('ing15').outerText,
    ing16: document.getElementById('ing16').outerText,
    ing17: document.getElementById('ing17').outerText,
    ing18: document.getElementById('ing18').outerText,
    ing19: document.getElementById('ing19').outerText,
    ing20: document.getElementById('ing20').outerText,
    amn1: document.getElementById('amn1').outerText,
    amn2: document.getElementById('amn2').outerText,
    amn3: document.getElementById('amn3').outerText,
    amn4: document.getElementById('amn4').outerText,
    amn5: document.getElementById('amn5').outerText,
    amn6: document.getElementById('amn6').outerText,
    amn7: document.getElementById('amn7').outerText,
    amn8: document.getElementById('amn8').outerText,
    amn9: document.getElementById('amn9').outerText,
    amn10: document.getElementById('amn10').outerText,
    amn11: document.getElementById('amn11').outerText,
    amn12: document.getElementById('amn12').outerText,
    amn13: document.getElementById('amn13').outerText,
    amn14: document.getElementById('amn14').outerText,
    amn15: document.getElementById('amn15').outerText,
    amn16: document.getElementById('amn16').outerText,
    amn17: document.getElementById('amn17').outerText,
    amn18: document.getElementById('amn18').outerText,
    amn19: document.getElementById('amn19').outerText,
    amn20: document.getElementById('amn20').outerText,
  };
  return meal;
}
