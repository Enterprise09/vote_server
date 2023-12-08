import express, { Request, Response } from "express";

const app = express();

type Data = {
  name: string;
  age: number;
  url: string;
};

const sendData: Data = {
  name: "name",
  age: 3,
  url: "tistory.com",
};

app.get("/get", (req: Request, res: Response) => {
  res.send(sendData);
  console.log(sendData);
});

app.listen(5000);
