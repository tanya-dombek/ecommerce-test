import React from "react";

const VariantsDropdown = ({ variants = [], selectedVariant, onChange }) => {
  if (!variants.length) return null;

  return (
    <select
      className="form-select mb-3"
      value={selectedVariant}
      onChange={(e) => onChange(e.target.value)}
    >
      {variants.map((variant, i) => (
        <option key={i} value={variant}>
          {variant}
        </option>
      ))}
    </select>
  );
};

export default VariantsDropdown;
