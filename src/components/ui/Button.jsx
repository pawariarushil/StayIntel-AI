/**
 * Reusable button component.
 *
 * @param {string} text - Button label
 * @param {Function} onClick - Click handler
 * @param {"primary" | "secondary"} variant - Button style
 * @param {boolean} disabled - Disable button
 */

function Button({
  text,
  onClick,
  variant = "primary",
  disabled = false,
}) {
  return (
    <button
      className={`ui-button ${variant}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

export default Button;