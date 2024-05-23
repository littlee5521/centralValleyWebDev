"use client";
import { useRef, useEffect } from "react";
import emailsJs from "@emailjs/browser";

export default function Page() {
  const formRef = useRef<HTMLFormElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    emailsJs.init({
      publicKey: "Z9Aj9dXcdHGYivOWN",
    });
  }, []);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailsJs
      .sendForm("service_fmtq9s8", "template_893xb3y", formRef.current!, {
        publicKey: "Z9Aj9dXcdHGYivOWN",
      })
      .then(() => {
        console.log("Sucess");
        if (nameRef.current) nameRef.current.value = "";
        if (emailRef.current) emailRef.current.value = "";
        if (messageRef.current) messageRef.current.value = "";
      });
  };
  return (
    <main className="flex min-h-fit flex-col items-center text-center justify-between text-white">
      <form
        className="flex flex-col pt-24 w-96"
        ref={formRef}
        onSubmit={sendEmail}
      >
        <label className=" text-2xl mb-2">Name</label>
        <input
          className="mb-5 pl-5 rounded-md h-10 text-black"
          type="text"
          name="user_name"
          ref={nameRef}
        />
        <label className=" text-2xl mb-2">Email</label>
        <input
          className="mb-5 pl-5 rounded-md h-10 text-black"
          type="email"
          name="user_email"
          ref={emailRef}
        />
        <label className=" text-2xl mb-2">Message</label>
        <textarea
          ref={messageRef}
          className=" rounded-md pl-5 h-40 text-black"
          name="message"
        />
        <input
          className=" mt-10 text-xl mb-10  h-10 text-white border border-white bg-black"
          type="submit"
          content="Hello"
          value="Send"
        />
      </form>
    </main>
  );
}
