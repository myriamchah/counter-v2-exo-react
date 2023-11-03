const Counter = ({ i, counter, countCounters, setCountCounters }) => {
  return (
    <>
      {counter > 0 && (
        <button
          onClick={() => {
            const newCounters = [...countCounters];
            newCounters[i] = counter - 1;
            setCountCounters(newCounters);
          }}
        >
          -
        </button>
      )}
      <p>{counter}</p>

      {counter < 10 && (
        <button
          onClick={() => {
            const newCounters = [...countCounters];
            newCounters[i] = counter + 1;
            setCountCounters(newCounters);
          }}
        >
          +
        </button>
      )}

      <button
        onClick={() => {
          const newCounters = [...countCounters];
          newCounters[i] = 0;
          setCountCounters(newCounters);
        }}
      >
        reset
      </button>
    </>
  );
};

export default Counter;
