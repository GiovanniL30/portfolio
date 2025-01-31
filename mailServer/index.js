import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import "dotenv/config";

const port = process.env.PORT || 2000;
const emailReceiver = process.env.RECEIVER;

const app = express();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

app.use(
  cors({
    origin: process.env.ENDPOINT,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const validateToken = (req, res, next) => {
  const { token } = req.query;
  if (token !== process.env.TOKEN) return res.status(403).json({ message: "Unauthorized User" });

  next();
};

app.post("/api/mail", validateToken, (req, res) => {
  const { senderEmail, subject, message } = req.body;

  if (!senderEmail || !subject || !message) {
    return res.status(400).json({ message: "Sender Email, Subject, and Message are required" });
  }

  transporter.sendMail(
    {
      from: senderEmail,
      to: emailReceiver,
      subject: subject,
      html: `<p>Message: ${message}
        <br/>
        <br/>
        <br/>
        <hr/>
        Sender Email: ${senderEmail}
      </p>`,
    },
    (error, info) => {
      if (error) {
        return res.status(500).json({ message: "Failed to send email" });
      }
      res.status(200).json({ message: "Email sent successfully" });
    }
  );
});

app.listen(port, () => {
  console.log("Mail Server is running on port " + port);
});
