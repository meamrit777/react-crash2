import PropTypes from "prop-types";

export const Button = ({
  label,
  backgroundColor = "red",
  size = "medium",
  onClick,
}) => {
  let scale = 1;
  if (size === "small") scale = 0.75;
  if (size === "large") scale = 1.5;
  const style = {
    backgroundColor,
    padding: `${scale * 0.5}rem ${scale * 1}rem`,
    border: "none",
  };
  return (
    <button onClick={onClick} style={style}>
      {label}
    </button>
  );
};
Button.propTypes = {
  label: PropTypes.string,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  onclick: PropTypes.func,
};

Button.defaultProps = {
  label: "default",
  backgroundColor: "red",
  size: "medium",
  onClick: undefined,
};
