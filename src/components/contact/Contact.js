import "../landing/Landing.css";
import Swal from "sweetalert2";
import Title from "../common/Title/Title";
import "./Contact.css";
const introduction = {
  maintitle: "CONTACT",
  maintext: "I'd Love To Hear From You.",
  text: "Feel free to get in touch! Whether you have a question, need help with your project, or just want to say hi, I’m here to connect. Drop me a message, and I’ll get back to you as soon as possible!",
};
function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "5a1961d2-11ea-4017-b372-42cbcb1e597e");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Massage Sent Successfully!",
        icon: "success",
      });
    }
  };
  return (
    <section className="contact" id="contact">
      <div className="container">
        <Title introduction={introduction} />
        <form onSubmit={onSubmit} className="contact-form" autocomplete="off">
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            autocomplete="off"
            data-aos="fade-right"
          />
          <input
            className="poppins-regular"
            type="email"
            name="email"
            placeholder="Email"
            required
            autocomplete="off"
            data-aos="fade-left"
          />

          <textarea
            className="poppins-regular"
            name="message"
            placeholder="Message"
            required
            autocomplete="off"
            data-aos="fade-right"
          />
          <div className="button-sumbit" data-aos="fade-up">
            <button className="poppins-bold" type="submit" >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
export default Contact;
