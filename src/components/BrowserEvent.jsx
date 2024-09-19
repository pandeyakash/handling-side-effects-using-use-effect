import { useEffect, useState } from "react";
import "./BrowserEvent.css";

export const BrowserEvent = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    document.title = "Browser Events";

    return () => {
      document.title = "Browser Events - Unmounted";
    };
  });

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <>
      <h1>Browser Events</h1>
      <div className="browser-event">
        <div onMouseMove={handleMouseMove} id="mouse-movement">
          <h2>Browser Event</h2>
          <div>
            <p>
              Mouse Position: ({mousePosition.x}, {mousePosition.y})
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
