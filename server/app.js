import express from 'express';
import dalleRoutes from './routes/dalle.routes.js';
import * as dotenv from 'dotenv';
//require('dotenv').config();
import cors from 'cors';
dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ limit: "25mb" }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.use('/api/v1/dalle', dalleRoutes);

app.get('/', (req, res) => {
  res.status(200).json({ message:"Hello from DALL.E"})
})

app.listen(port, () => {
  console.log(`nodemailerProject is listening at http://localhost:${port}`);
});
