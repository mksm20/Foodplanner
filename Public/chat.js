var socket = io.connect('http://localhost:3000');

let btnIndex = document.getElementById('btn1');
let pageUpdate = document.getElementById('pageRefresh');
btnIndex.addEventListener('click', () => {
  let mealSend = document.getElementById('box1').value;
  socket.emit('meal', {
    message: mealSend,
  });
  socket.on('meal', async (data) => {
    console.log(data.message);
    await data.message;
    pageUpdate.innerHTML = data.message;
  });
});
