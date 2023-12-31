import React from "react";
import PropTypes from "prop-types";

/**
 *
 * @typedef FilterForm
 * @property {string} label - Nhan cua o input
 * @property {string} value - Gia tri cua o input
 * @property {boolean} checked - Cho biet o input co duoc chon hay khong
 */

/**
 * Hien thi 1 checkbox loc danh sach
 *
 * @param {FilterForm} props
 */

const FilterForm = ({ label, value, checked, onChange }) => {
  const handleChange = () => {
    onChange(value);
  };

  return (
    <div className="checkbox-option">
      <input
        type="radio"
        name="filter-label"
        value={value}
        id={value}
        checked={checked}
        onChange={handleChange}
      />
      <label htmlFor={value}>{label}</label>
    </div>
  );
};

FilterForm.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  checked: PropTypes.bool,
};
export default FilterForm;
