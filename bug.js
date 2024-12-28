const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

//Error Handling middleware is placed after all routes
app.use((err, req, res, next)=>{//if this is not placed after all route it will not work properly
    console.error(err.stack)
    res.status(500).send('Something broke!')
})
//This is the correct place for error handling middleware