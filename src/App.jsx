import { useState } from "react";
import "./App.css";

import Counter from "./components/Counter";

function App() {
  const [countCounters, setCountCounters] = useState([0]);

  return (
    <>
      <div className="add-btn">
        {countCounters.length < 3 && (
          <button onClick={() => setCountCounters([...countCounters, 0])}>
            Add a Counter
          </button>
        )}
      </div>
      <div className="counters">
        {countCounters.map((counter, i) => {
          return (
            <Counter
              key={i}
              {...{ i, counter, countCounters, setCountCounters }}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
