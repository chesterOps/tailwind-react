import { useState, useRef } from "react";

// OTP props
type OTPProps = {
  length?: number;
  onChange(value: string): void;
  className?: string;
};

const OTPInput = ({ length = 6, onChange, className = "" }: OTPProps) => {
  // Inital values
  const [otp, setOtp] = useState(Array(length).fill(""));

  // Input refs
  const inputs = useRef<(HTMLInputElement | undefined)[]>([]);

  // Handle OTP change
  const handleChange = (element: HTMLInputElement, index: number) => {
    // Check if values are numbers
    const value = element.value.replace(/[^0-9]/g, "");

    // Return if theres no value
    if (!value) return;

    // Get old OTP
    const newOtp = [...otp];

    // Set value
    newOtp[index] = value[0];

    // Set OTP
    setOtp(newOtp);

    // Call onChange function
    onChange?.(newOtp.join(""));

    // Move focus to next input
    if (index < length - 1) {
      inputs.current[index + 1]?.focus();
    }
  };

  // Handle key press
  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    // Check for backspace key
    if (e.key === "Backspace") {
      const newOtp = [...otp];

      // Check for value
      if (otp[index]) {
        // Clear value
        newOtp[index] = "";

        // Set OTP
        setOtp(newOtp);

        // Call onChange
        onChange?.(newOtp.join(""));
      } else if (index > 0) {
        // Go to previous box
        inputs.current[index - 1]?.focus();
      }
    } else if (e.key === "ArrowLeft" && index > 0) {
      // Go to previous box
      inputs.current[index - 1]?.focus();
    } else if (e.key === "ArrowRight" && index < length - 1) {
      // Go to next box
      inputs.current[index + 1]?.focus();
    }
  };

  // Handle OTP paste
  const handlePaste = (e: React.ClipboardEvent) => {
    // Prevent default paste
    e.preventDefault();

    // Make sure values are numbers and length is not more than defined length
    const pasted = e.clipboardData
      .getData("text")
      .replace(/[^0-9]/g, "")
      .slice(0, length);

    // Get old OTP
    const newOtp = [...otp];

    // Set new values
    for (let i = 0; i < length; i++) {
      newOtp[i] = pasted[i] || "";
    }

    // Set new OTP
    setOtp(newOtp);

    // Call onChange function
    onChange?.(newOtp.join(""));

    // Focus last input
    inputs.current[Math.min(pasted.length - 1, length - 1)]?.focus();
  };

  return (
    <div
      className={`${className} flex justify-between gap-2.5 flex-wrap items-center`}
    >
      {otp.map((digit, index) => (
        <input
          key={index}
          type="number"
          min={0}
          maxLength={1}
          max={9}
          className="w-14 h-14 no-spinner text-center border border-gray-300 rounded-lg outline-none focus:ring-primary focus:border-primary"
          value={digit}
          onChange={(e) => handleChange(e.target, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onPaste={handlePaste}
          ref={(el) => {
            if (el) inputs.current[index] = el;
          }}
        />
      ))}
    </div>
  );
};

export default OTPInput;
