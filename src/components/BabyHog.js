import React, { useState } from "react";
import normalBaby from "../assets/unadulterated-hoglette.png";
import SunBaby from "../assets/sun-eyes.png";
import BlueBaby from "../assets/blue-eyes.png";
import GlowingBaby from "../assets/glowing-eyes.png";

// is there a way we could associate eye color string values with images?
// perhaps so we could do something along the lines of `eyeColorMapper['blue'] and get back the right image?`

function BabyHog({ name, hobby, eyeColor }) {
  const [weight, setWeight] = useState(0);

  function handleChangeWeight(e) {
    if (e.target.name === '+') {
      // console.log('Increased')
      setWeight(weight + 1)
    } else if (e.target.name === '-') {
      if (weight <= 0) {
        setWeight(0)
      } else {
        setWeight(weight - 1)

      }
    }
    // how can we reuse this for both buttons?
    // perhaps something with e.target.name === "+"
  }

  function imgSrc(eyeColor) {
    if (eyeColor === 'sun') {
      return SunBaby
    } else if (eyeColor === 'blue') {
      return BlueBaby
    } else if (eyeColor === 'glowing') {
      return GlowingBaby
    } else {
      return normalBaby
    }
  }

  return (
    <li className="hogbabies">
      <h1>{name}</h1>
      <h3>Weight: {weight}lbs</h3>
      <h3>Hobby: {hobby}</h3>
      <h4>Eye Color: {eyeColor}</h4>

      <button name="+" onClick={handleChangeWeight}>Increase Weight</button>
      <button name="-" onClick={handleChangeWeight}>Decrease Weight</button>

      <div className="hb-wrap">
        <img
          src={imgSrc(eyeColor)}
          style={{ height: `${parseInt(200 + weight)}px` }}
          alt={name}
        />
      </div>
    </li>
  );
}

export default BabyHog;
