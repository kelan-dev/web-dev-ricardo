"use server";

import ContactFormEmail from "@/email/contact-form-email";
import { getErrorMessage, validString } from "@/lib/utils";
import React from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async (formData: FormData) => {
  const email = formData.get("senderEmail");
  const message = formData.get("senderMessage");

  if (!validString(email, 40)) return { error: "Invalid Email" };
  if (!validString(message, 1000)) return { error: "Invalid Message" };

  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "ricardo@example.com",
      subject: "Message from contact form",
      reply_to: email as string,
      react: React.createElement(ContactFormEmail, {
        email: email as string,
        message: message as string,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};

export default sendEmail;
