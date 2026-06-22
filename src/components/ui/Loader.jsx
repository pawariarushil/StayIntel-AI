/**
 * Reusable loader component.
 *
 * @param {number} size - Loader size in pixels
 */

function Loader({ size = 40 }) {
  return (
    <div
      className="loader"
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  );
}

export default Loader;