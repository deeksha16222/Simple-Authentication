import React, { useState } from "react";

export default function Authenticate() {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  function successful() {
    check();
  }
  function check() {
    if (name.length < 3 || pass.length < 3) alert("type correct values");
    else alert("form successfully submitted");
  }
  return (
    <>
      <input
        type="text"
        placeholder="Enter your name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />{" "}
      <br /> <br />
      <input
        type="password"
        placeholder="Enter your password"
        onChange={(e) => {
          setPass(e.target.value);
        }}
      />{" "}
      <br /> <br />
      <button onClick={successful}>Submit</button>
    </>
  );
}
