import React, { useState } from "react";
import data from "./data";
function App() {
  const [count, setCount] = useState(3);
  const [text, setText] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const amount = parseInt(count);
    setText(data.slice(0, amount));
  };
  return (
    <section className="section-center">
      <h4>tired of boring lorem ipsum?</h4>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">Paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          min={1}
          max={data.length}
          step={1}
          value={count}
          onChange={(e) => {
            setCount(e.target.value);
          }}
        />
        <button className="btn">Generate</button>
      </form>
      <article className="lorem-text">
        {text.map((lorem, index) => {
          return <p key={index}>{lorem}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
