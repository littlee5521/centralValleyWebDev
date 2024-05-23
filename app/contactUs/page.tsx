"use client";
import { useRef, useEffect } from "react";
import emailsJs from "@emailjs/browser";

export default function Page() {
  const formRef = useRef<HTMLFormElement>(null);
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
        />
        <label className=" text-2xl mb-2">Email</label>
        <input
          className="mb-5 pl-5 rounded-md h-10 text-black"
          type="email"
          name="user_email"
        />
        <label className=" text-2xl mb-2">Message</label>
        <textarea className=" rounded-md pl-5 h-40 text-black" name="message" />
        <input
          className=" mt-10 text-xl  h-10 text-black  bg-gray-400"
          type="submit"
          content="Hello"
          value="Send"
        />
      </form>
    </main>
  );
}
