import { app } from './app';
import express from 'express';
import cors from 'cors';

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
