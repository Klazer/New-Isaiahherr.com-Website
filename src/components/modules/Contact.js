import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Contact.css";

export const Contact = () => {
  return (
    <section id="Contact">
      <h1>Contact Me</h1>
      <div id="form">
        <p>
          Please feel free to use this form to contact me via email. If not, you
          can always contact me at my current email at herrx080@umn.edu. Please
          give me within 48 hours to respond. Thank you!
        </p>
        <div id="emailform">
          <Form method method="POST" action="https://formspree.io/mrgyjawg">
            <Form.Group controlId="formBasicName">
              <Form.Label className="formLabel">Your Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Name"
                required
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label className="formLabel">Email address</Form.Label>
              <Form.Control
                type="email"
                name="_replyto"
                placeholder="Enter email here"
                required
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label className="formLabel">Message</Form.Label>
              <Form.Control
                type="text"
                name="message"
                placeholder="Your message..."
                as="textarea"
                rows="3"
              />
            </Form.Group>
            <Form.Group controlId="formHiddenStuff">
              <Form.Control
                type="hidden"
                name="_subject"
                value="IsaiahHerr.com - You've got a message!"
              />
              <Form.Control
                type="hidden"
                name="_next"
                value="https://Isaiahherr.com/"
              />
            </Form.Group>

            <Button
              variant="formSubmit"
              type="submit"
              value="send"
              className="submitButton"
            >
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
