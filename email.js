import emailjs from "emailjs-com";

function sendEmail(e) {
  e.preventDefault();

  emailjs.sendForm(
    "service_qhkau99",
    "template_7o9g5wd",
    e.target,
    "htsBrV00hu-BUFNU1"
  ).then(
    () => {
      alert("Request sent successfully!");
    },
    (error) => {
      alert("Failed to send request");
      console.log(error);
    }
  );
}

