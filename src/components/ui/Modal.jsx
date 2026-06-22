/**
 * Reusable modal component.
 *
 * @param {boolean} isOpen - Controls visibility
 * @param {Function} onClose - Close handler
 * @param {string} title - Modal title
 * @param {React.ReactNode} children - Modal content
 */

function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{title}</h2>

        <div>{children}</div>

        <button className="ui-button primary" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;