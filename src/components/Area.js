import { useState } from "react";
import "../styles.css";

export function Area() {
  const [side1, setSide1] = useState("");
  const [side3, setSide3] = useState("");
  const [side2, setSide2] = useState("");
  const [output, setOutput] = useState("");

  function calculateArea() {
    if (side1 && side2 && side3) {
      const a = Number(side1),
        b = Number(side2),
        c = Number(side3);

      if (a > 0 && b > 0 && c > 0 && a + b > c && a + c > b && c + b > a) {
        const semiPerimeter = (a + b + c) / 2;
        const area = Math.sqrt(
          semiPerimeter *
            (semiPerimeter - a) *
            (semiPerimeter - b) *
            (semiPerimeter - c)
        ).toFixed(2);
        setOutput("Area of triangle is " + area + " cm²");
      } else {
        setOutput("Please enter valid sides");
      }
    } else {
      setOutput("Please enter all three sides");
    }
  }

  return (
    <div>
      <h1 className="heading">Calculate Area of Triangle</h1>
      <label htmlFor="side1">Side 1</label>
      <input
        type="number"
        name="side1"
        value={side1}
        onChange={(e) => setSide1(e.target.value)}
      />
      <label htmlFor="side2">Side 2</label>
      <input
        type="number"
        name="side2"
        value={side2}
        onChange={(e) => setSide2(e.target.value)}
      />
      <label htmlFor="side3">Side 3</label>
      <input
        type="number"
        name="side3"
        value={side3}
        onChange={(e) => setSide3(e.target.value)}
      />
      <button onClick={calculateArea}>Calculate Area</button>
      <h6 id="output">{output}</h6>
    </div>
  );
}
