import { useState } from "react";
import "./App.css";
import { Data } from "./components/Data";
import { BrowserEvent } from "./components/BrowserEvent";
import { Counter } from "./components/Counter";
import { Button } from "./components/Button";

function App() {
  const [toggleCounter, setToggleCounter] = useState(false);
  const [toggleData, setToggleData] = useState(true);
  const [toggleBrowserEvent, setToggleBrowserEvent] = useState(false);

  const handleCounterClick = () => {
    setToggleCounter(true);
    setToggleData(false);
    setToggleBrowserEvent(false);
  };

  const handleDataClick = () => {
    setToggleData(true);
    setToggleBrowserEvent(false);
    setToggleCounter(false);
  };

  const handleBrowserEventClick = () => {
    setToggleBrowserEvent(true);
    setToggleData(false);
    setToggleCounter(false);
  };

  return (
    <>
      <nav>
        <Button text="Data" fn={handleDataClick} />
        <Button text="Counter" fn={handleCounterClick} />
        <Button text="Browser Event" fn={handleBrowserEventClick} />
      </nav>
      {toggleCounter ? <Counter /> : null}
      {toggleBrowserEvent ? <BrowserEvent /> : null}
      {toggleData ? <Data /> : null}
    </>
  );
}

export default App;
