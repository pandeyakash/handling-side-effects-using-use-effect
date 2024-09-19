import "./Button.css";

export const Button = ({ text, fn }) => {
  return <button onClick={fn}>{text}</button>;
};
