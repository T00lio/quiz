import { useState } from "react";

function OptionButton({ label, isCorrect, onOptionSelected }) {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(true);
    onOptionSelected(isCorrect);

    // Reset the background color after 1.5 seconds
    setTimeout(() => {
      setIsSelected(false);
    }, 1500);
  };

  const buttonClass = isSelected
    ? isCorrect
      ? "bg-green-500"
      : "bg-red-500"
    : "bg-white";

  return (
    <button
      className={`flex rounded-xl p-5 mb-5 ${buttonClass}`}
      onClick={handleClick}
      disabled={isSelected}
    >
      {label}
    </button>
  );
}

export default OptionButton;
