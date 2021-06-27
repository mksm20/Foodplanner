var socket = io.connect('http://localhost:3000');

let btnIndex = document.getElementById('btn1');
let pageUpdate = document.getElementById('goesHere');
let meal = [];

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
    console.log(meals.length);
    for (let i = 0; i < meals.length; i++) {
      meal[i] = document.getElementById(`meal${i}`);
      meal[i].addEventListener('click', () => {
        let mealSend = document.getElementById(`meal${i}`).value;
        console.log(mealSend);
        socket.emit('mealFood', {
          message: mealSend,
        });
        socket.on('mealFood', async (data) => {
          await data.message;
          pageUpdate.innerHTML = data.message;
        });
      });
    }
  });
});
