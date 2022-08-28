import { useRef, useState } from "react";
import { questions } from "../utils";

export function Quiz() {
  const [score, setScore] = useState("");
  const ref = useRef(null);

  const correctAns = questions.map((ques) => ques.ans);

  function calculateScore() {
    const formResults = new FormData(ref.current);
    let score = 0,
      length = 0,
      index = 0;

    console.log(formResults.entries());

    for (let value of formResults.values()) {
      length++;
    }
    if (length !== correctAns.length) {
      setScore("Please mark all question");
      return;
    }
    for (let value of formResults.values()) {
      if (value === correctAns[index]) {
        score += 1;
      }
      index += 1;
      setScore(`Your score is ${score}`);
    }
  }

  return (
    <div>
      <h1 className="heading">Quiz on triangles</h1>
      <h3>For each correct answer you will get 1 point.</h3>
      <h3 className="sub-heading">Attemp all questions.</h3>

      <form className="quiz-form" ref={ref}>
        {questions.map((ques, index) => (
          <div className="question-container" key={index}>
            <p className="question">{ques.ques}</p>
            <label className="option">
              <input type="radio" name={ques.name} value="a" />
              {ques.a}
            </label>
            <label className="option">
              <input type="radio" name={ques.name} value="b" />
              {ques.b}
            </label>
            {ques.c && (
              <label className="option">
                <input type="radio" name={ques.name} value="c" />
                {ques.c}
              </label>
            )}
          </div>
        ))}
      </form>
      <button
        className="btn-check"
        id="submit-answers-btn"
        onClick={calculateScore}
      >
        Submit Answers
      </button>
      <h2 id="output">{score}</h2>
    </div>
  );
}
