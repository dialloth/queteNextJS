import React, { useEffect } from "react";
import Head from 'next/head';
import Image from "next/image";

export default function Index() {

  useEffect(() => console.log("index page did mount"));

  return (
    <div>
    <Head>
        <title>My first NextJS app</title>
      </Head>
      <h1 style={{ color: "black", textAlign: "center"}}>Welcome to my first NextJS app !</h1>
      <div className="text">
          <Image
              src="/images/dave.png" // Route of the image file
              height={144} // Desired size with correct aspect ratio
              width={144} // Desired size with correct aspect ratio
              alt="A wilder"
          />
    </div>          
    </div>
  );
}
