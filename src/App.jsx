import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import Counter from "./components/Counter";
import Footer from "./components/Footer";

function App() {
  const [countCounters, setCountCounters] = useState([0]);

  return (
    <>
      <Header />
      <div className="add-btn">
        <button
          disabled={countCounters.length >= 3}
          onClick={() => setCountCounters([...countCounters, 0])}
        >
          Add a Counter
        </button>
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
      <Footer />
    </>
  );
}

export default App;
