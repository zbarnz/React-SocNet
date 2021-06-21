
const Button = ({ color, text, width, background, height }) => {
  return (
    <button
      style={{ backgroundColor: background, color: color, width: width, height: height }}
      className="btn"
    >
      {text}
    </button>
  );
};

export default Button;
