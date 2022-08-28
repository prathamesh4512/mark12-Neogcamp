import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <header>
      <h1>fun with triangles</h1>
      <nav>
        <Link to="/">Is Triangle?</Link>
        <Link to="quiz">Quiz</Link>
        <Link to="hypo">Hypotenuse</Link>
        <Link to="area">Area of Triangle</Link>
      </nav>
    </header>
  );
}
