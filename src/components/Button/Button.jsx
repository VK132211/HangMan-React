import getButtonStyling from "./getButtonStyleType";

function Button({ buttonType = "button", text, styleType, onClickHandler }) {
  <button
    type={buttonType}
    className={`px-4 py-2 ${getButtonStyling(styleType)} text-white rounded-md transition-all `}
    onClick={onClickHandler}
  >
    {text}
  </button>;
}

export default Button;
