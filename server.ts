import express, { Request, Response } from "express";
import cors from "cors";
import nodemailer from "nodemailer";

const router = express.Router();

// Server
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);

app.listen(5000, () => console.log("Server Running"));
console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_PASS);

// Nodemailer config
const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER || "********@gmail.com",
    pass: process.env.EMAIL_PASS || "",
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

// POST endpoint
router.post("/contact", (req: Request, res: Response) => {
  const { firstName, lastName, email, message, phone } = req.body;

  const name = `${firstName} ${lastName}`;

  const mail = {
    from: name,
    to: "********@gmail.com",
    subject: "Contact Form Submission - Portfolio",
    html: `
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Phone: ${phone}</p>
      <p>Message: ${message}</p>
    `,
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});
