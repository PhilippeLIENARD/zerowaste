import React from 'react';

function useToggle(initialValue = false) {
  const [value, setValue] = React.useState(initialValue);
  const toggle = React.useCallback(() => {
    setValue(v => !v);
  }, []);
  return [value, toggle];
}


const App = () => {
    const [isOn, toggleIsOn] = useToggle();
    return (
      <>
        {isOn ? 'The light is on!' : 'Hey who turned off the lights'}
        <button onClick={toggleIsOn}>
          Press me
        </button>
      </>
    )
  }

export default App;