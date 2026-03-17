import { useState, useEffect } from "react";

export default function OTPGenerator() {
  const [otp, setOtp] = useState("Click 'Generate OTP' to get a code");
  const [time, setTime] = useState(null);

  const decrement = () => {
    const nextTime = time - 1;
    setTime(nextTime);
  };

  useEffect(() => {
    if (time === 0 || time === null) {
      return;
    }
    const intervalId = setInterval(decrement, 1000);
    return () => clearInterval(intervalId);
  }, [time]);

  function generateOtp() {
    return Math.floor(Math.random() * 1000000)
      .toString()
      .padStart(6, "0");
  }

  return (
    <div className="container">
      <h1 id="otp-title">OTP Generator</h1>
      <h2 id="otp-display">{otp}</h2>
      {time === null ? (
        <p id="otp-timer" aria-live="polite">
          {" "}
        </p>
      ) : (
        <p id="otp-timer" aria-live="polite">
          {time === 0
            ? "OTP expired. Click the button to generate a new OTP."
            : `Expires in: ${time} seconds`}
        </p>
      )}
      <button
        id="generate-otp-button"
        onClick={(e) => {
          setOtp(generateOtp());
          setTime(5);
        }}
        disabled={time !== 0 && time !== null}
      >
        Generate OTP
      </button>
    </div>
  );
}
