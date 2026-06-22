/**
 * Reusable input component.
 *
 * @param {string} label - Input label
 * @param {string} placeholder - Placeholder text
 * @param {string} type - Input type
 * @param {string} value - Input value
 * @param {Function} onChange - Change handler
 */

function Input({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
}) {
  return (
    <div className="ui-input-group">
      <label>{label}</label>

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="ui-input"
      />
    </div>
  );
}

export default Input;