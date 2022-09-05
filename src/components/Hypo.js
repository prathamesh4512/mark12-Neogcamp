import { useState } from "react";
import "../styles.css";

export function Hypo() {
  const [height, setHeight] = useState("");
  const [base, setBase] = useState("");
  const [output, setOutput] = useState("");

  function calculateHypo() {
    if (height > 0 && base > 0) {
      const hypo = Math.sqrt(height * height + base * base).toFixed(2);
      setOutput("Length of hypotenuse is " + hypo + "cm");
    } else setOutput("Please enter both positive values");
  }

  return (
    <div>
      <h1 className="heading">Calculate Hypotenuse of a triangle</h1>
      <label htmlFor="base">Enter base value (a)(cm) =</label>
      <input
        type="number"
        name="base"
        value={base}
        onChange={(e) => setBase(e.target.value)}
      />
      <label htmlFor="height">Enter height value (b)(cm) =</label>
      <input
        type="number"
        name="height"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />
      <button onClick={calculateHypo}>Calculate Hypotenuse</button>
      <p>
        Hypotenuse=(a<sup>2</sup>+b<sup>2</sup>)
      </p>
      <h3 id="output">{output}</h3>
    </div>
  );
}
