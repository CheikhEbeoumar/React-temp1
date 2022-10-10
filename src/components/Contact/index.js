import React from "react";
import "./style.js";
import {
  ContactSection,
  Contacttitle,
  Span,
  Form,
  Input,
  FormInput,
  InputText,
  InputEmail,
  InputExp,
  Textarea,
  InputSub,
} from "./style.js";
import Footer from "./../Footer";

const Contact = () => {
  return (
    <>
      <ContactSection>
        <div className="container">
          <Contacttitle>
            <Span>Drop </Span>Me A line
          </Contacttitle>
          <Form>
            <FormInput>
              <InputText type="text" placeholder="Your Name" />
              <InputEmail type="email" placeholder="Your Email" />
            </FormInput>
            <InputExp type="text" placeholder="Your Subject" />
            <Textarea cols="30" rows="10" placeholder="Your Message"></Textarea>
            <InputSub type="submit" value="Send Message" />
          </Form>
        </div>
      </ContactSection>
      <Footer />
    </>
  );
};

export default Contact;
