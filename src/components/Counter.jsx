const Counter = ({ i, counter, countCounters, setCountCounters }) => {
  return (
    <>
      <div className="counter">
        <div>
          <button
            onClick={() => {
              const newCounters = [...countCounters];
              newCounters[i] = counter - 1;
              setCountCounters(newCounters);
            }}
            disabled={!counter}
          >
            -
          </button>

          <p>{counter}</p>

          <button
            onClick={() => {
              const newCounters = [...countCounters];
              newCounters[i] = counter + 1;
              setCountCounters(newCounters);
            }}
            disabled={counter > 10}
          >
            +
          </button>
        </div>
        <button
          onClick={() => {
            const newCounters = [...countCounters];
            newCounters[i] = 0;
            setCountCounters(newCounters);
          }}
        >
          reset
        </button>
      </div>
    </>
  );
};

export default Counter;
