import { useState } from "react";
import "../styles.css";

export function Triangle() {
  const [angle1, setAngle1] = useState("");
  const [angle3, setAngle3] = useState("");
  const [angle2, setAngle2] = useState("");
  const [output, setOutput] = useState("");

  function checkTriangle() {
    if (angle1 > 0 && angle2 > 0 && angle3 > 0) {
      +angle1 + +angle2 + +angle3 === 180
        ? setOutput("Yay, the angles form a triangle!")
        : setOutput("Oh Oh! The angle doesn't form a triangle");
    } else {
      setOutput("Please enter all three positives angles");
    }
  }

  return (
    <div>
      <h1 className="heading">Angle of Triangles</h1>
      <label htmlFor="angle1">Angle 1</label>
      <input
        type="number"
        name="angle1"
        value={angle1}
        onChange={(e) => setAngle1(e.target.value)}
      />
      <label htmlFor="angle2">Angle 2</label>
      <input
        type="number"
        name="angle2"
        value={angle2}
        onChange={(e) => setAngle2(e.target.value)}
      />
      <label htmlFor="angle3">Angle 3</label>
      <input
        type="number"
        name="angle3"
        value={angle3}
        onChange={(e) => setAngle3(e.target.value)}
      />
      <button onClick={checkTriangle}>is Triangle</button>
      <h3 id="output">{output}</h3>
    </div>
  );
}
