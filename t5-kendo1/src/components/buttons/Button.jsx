import React from "react";

const Button = ({
  className = "k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary",
  style,
  label = "sumbit",
  onClick,
  type,
}) => {
  return (
    <button className={className} style={style} onClick={onClick} type={type}>
      {label}
    </button>
  );
};

export default Button;
