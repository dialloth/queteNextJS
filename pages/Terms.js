import Head from 'next/head';
import React, { useState } from "react";

export default function FirstPost() {
  //const [validate, setValidate] = useState("");

  const [checked, setChecked] = useState(true);
  const handleClick = () => setChecked(!checked);

  function SendAlert() {
    if (checked) {
      alert("Thanks for agreeing, enjoy your stay here");
    } else {
      alert("Veuillez cocher la case d'abord !");
    }
  }

  return (
    <>
    <Head>
        <title>My first NextJS app</title>
      </Head>
      <h1 style={{ color: "black", textAlign: "center"}}>Term of use Page!</h1>

      <div>
        <p style={{ color: "black", textAlign: "center" }}>
          <input
            onClick={handleClick}
            checked={checked}
            type="checkbox"
            name="terms"
          />
          I accept the <u>Terms and Conditions</u>
        </p>
        <button className="button" type="button" onClick={SendAlert}>
          {checked ? "Décoché" : "Coché"}
        </button>
      </div>
      
    </>
  );
}
