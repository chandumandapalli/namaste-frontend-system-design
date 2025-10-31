const express = require('express');
const app = express();
const { join } = require('node:path');

app.get('/sse', (req, res) => {
  // setup sse logic
  // Here data is going to be long .. and event-stream 
  res.setHeader('Content-Type', 'text/event-stream');
  // no need to have any cache.. 
  res.setHeader('Cache-Control', 'no-cache');
  // keep the connection live ..as this follows Long-live connection.. 
  res.setHeader('Connection', 'keep-alive');
  
  res.write('data: Welcome to Server sent event \n\n');
// using settimer for triggering events.. for event-stream... 
  const intervalId = setInterval(() => {
    res.write(`data: Server Time ${new Date().toLocaleDateString()} \n\n`)
  }, 5000);


  // when custom event of close is triggered.. close the connection by clearing the interview
  req.on('close', () => {
    clearInterval(intervalId);
  })

});

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'index.html'));
  });

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
