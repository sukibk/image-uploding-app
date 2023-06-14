import pic from "../../../assets/mj-home-1.jpg";
import { Button } from "reactstrap";
import React from "react";

export default function FirstSection() {
  return (
    <div
      className={
        "bg-[url('/src/assets/main-background.webp')] bg-cover bg-center bg-no-repeat min-h-screen pt-[15dvh] px-20 flex flex-col md:flex-row md:justify-between ls:px-32"
      }
    >
      <div>
        <h1
          className={
            "text-[50px] leading-[3rem] md:text-[80px] md:leading-[5rem] lg:text-[150px] lg:leading-[10rem]"
          }
        >
          Jovana <br /> & <br /> Marko
        </h1>
      </div>
      <div className={"md:hidden my-4"}>
        <img
          className={"rounded-[30px]"}
          src={pic}
          alt='Marko and Jovana hugging in "Kafana Sipaj ne Pitaj"'
        />
      </div>
      <div className={"flex flex-col lg:w-1/5 self-end"}>
        <p className={"text-white text-right font-bold"}>
          Welcome to Our Memory Lane! This is a special place where we can
          create beautiful memories together. Here, we can share our precious
          moments and keep them alive forever.{" "}
          <span className={"hidden ls:inline"}>
            Let's capture the joy, laughter, and love we experience every day.
            This is our space to cherish the adventures, milestones, and
            sweetest memories we've shared. Feel free to upload your favorite
            pictures and relive those unforgettable times. Join me in creating a
            treasure trove of memories that will always bring a smile to our
            faces. Get ready to embark on a journey down memory lane and start
            making new memories today!
          </span>
        </p>
        <Button
          className={
            "bg-blue-600 border-0 hover:bg-blue-500 font-bold self-end my-5"
          }
          size="lg"
        >
          Add New Memories
        </Button>
      </div>
    </div>
  );
}
