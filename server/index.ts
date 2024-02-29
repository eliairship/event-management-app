import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('hello world');
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
