import React from "react";
import PropTypes from "prop-types";

/**
 * @typedef ButtonProps
 *
 * @property {"primary" | "danger"} variant - Bien the cua nut
 *
 * @property {React.ReactNode} content - Noi dung cua nut
 *
 * @property {React.ReactNode} onClick - Hanh dong cua nut
 *
 */

/**
 * Hien thi noi dung cua nut
 * @param {React.PropsWithChildren<ButtonProps>} props
 */

const Button = ({ variant, content, onClick }) => {
  return (
    <button className={variant} onClick={onClick}>
      {content}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "danger"]),
  content: PropTypes.string,
  onClick: PropTypes.func,
};
export default Button;
