import express, { Request, Response } from 'express';
import cors from 'cors';

const donation = {
  user: 0,
  amount: 0
};

const app = express();

app.use(express.json());
app.use(cors());

app.post('/donate', (req, res) => {
  const amount = req.body.amount || 0;

  if (amount > 0) {
    donation.amount += amount;
    donation.user += 1;
  }

  return res.json({ message: 'Thank you ?'});
});

app.listen(4650, () => {
  console.log(`Application started on URL ?`);
});