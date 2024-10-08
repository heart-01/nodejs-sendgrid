require("dotenv").config();
const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = async () => {
  const msg = {
    to: "to@email.com",
    from: "from@email.com",
    subject: "Hello from SendGrid",
    text: "Culpa cillum dolor laboris incididunt commodo. Ut proident ad reprehenderit consectetur reprehenderit. Magna est Lorem deserunt dolore veniam. Laboris deserunt eiusmod esse ex esse dolor sit esse et.",
    html: "<h1>Hello from SendGrid</h1>",
  };

  try {
    await sgMail.send(msg);
    console.log("Email sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
    if (error.response) {
      console.error(error.response.body);
    }
  }
};

const sendEmailWithTemplate = async () => {
  const msg = {
    to: "to@email.com",
    from: "from@email.com",
    subject: "Hello from SendGrid",
    templateId: process.env.TEMPLATE_ID,
    dynamic_template_data: {
      linkUrl: "https://www.google.com",
    },
  };

  try {
    await sgMail.send(msg);
    console.log("Email sent with template!");
  } catch (error) {
    console.error("Error sending email:", error);
    if (error.response) {
      console.error(error.response.body);
    }
  }
};

sendEmailWithTemplate();
