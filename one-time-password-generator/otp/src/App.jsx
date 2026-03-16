const { useState, useEffect, useRef } = React;

export const OTPGenerator = () => {
  const [time, setTime] = useState(5);
  const [text, setText] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [otp, setOTP] = useState(null);

  useEffect(() => {
    if (time === 0) {
      setIsRunning(false);
      setText("OTP expired. Click the button to generate a new OTP.");
    }
  }, [time]);

  useEffect(() => {
    if (!isRunning) {
      return;
    }

    const interval = setInterval(() => {
      setTime((t) => t - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  function generateOTP() {
    setOTP(Math.floor(Math.random() * 900000) + 100000);
  }

  return (
    <div className="container">
      <h1 id="otp-title">OTP Generator</h1>
      <h2 id="otp-display">
        {otp === null ? "Click 'Generate OTP' to get a code" : otp}
      </h2>

      <p id="otp-timer" aria-live="polite">
        {otp === null ? text : `Expires in: ${time} seconds`}
      </p>
      <button
        id="generate-otp-button"
        onClick={() => {
          setTime(5);
          setIsRunning(true);
          generateOTP();
        }}
        disabled={otp !== null}
      >
        Generate OTP
      </button>
    </div>
  );
};
