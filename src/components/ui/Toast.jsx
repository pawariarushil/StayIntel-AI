/**
 * Reusable toast component.
 *
 * @param {boolean} show - Controls visibility
 * @param {string} message - Toast message
 * @param {"success" | "error"} type - Toast style
 */

function Toast({ show, message, type = "success" }) {
  if (!show) return null;

  return <div className={`toast ${type}`}>{message}</div>;
}

export default Toast;