function TextInput({ label, type = "text", value, onChange }) {
  return (
    <label className="block">
      {label && <span className="text-gray-700">{label}</span>}
      <input
        className="px-4 py-2 border border-gray-500 rounded-md w-full"
        type={type}
        value={value}
        placeholder={label}
        onChange={onChange}
      />
    </label>
  );
}
export default TextInput;
