import { info } from 'console';
import type { NextApiHandler } from 'next';
const nodemailer = require("nodemailer");
let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "test.shopme2021@gmail.com", // generated ethereal user
    pass: "shopme2021", // generated ethereal password
  },
});

type OrderResponseData = {
  [key: string]: any;
}

const OrderAPI : NextApiHandler<OrderResponseData> = (req, res) => {
  let data=JSON.parse(req.body)
  let info = transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: "ngo.chinh@marketenterprise.vn", // list of receivers
    subject: "Order available", // Subject line
    text: `${data.name} da dat ban ${data.table} ngay ${data.date} ${data.message}`, // plain text body
    // html: "<b>Hello world?</b>", // html body
  })
  .then((info)=>{
    res.status(200).json(req.body)
  })
  .catch((error)=>{
    res.status(503).json(req.body)
  });
}

export default OrderAPI;