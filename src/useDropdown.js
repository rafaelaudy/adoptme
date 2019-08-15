import React, { useState } from "react";

const useDropdown = (label, defaultState, defaultOptions) => {
  const [state, setState] = useState(defaultState);
  const [options, setOptions] = useState(defaultOptions);
  const id = `use-dropdown-${label.toLowerCase().trim()}`;

  const Dropdown = (
    <label htmlFor={id}>
      {label}
      <select
        id={id}
        value={state}
        onChange={e => setState(e.target.value)}
        onBlur={e => setState(e.target.value)}
        disabled={!options.length}
      >
        <option>All</option>
        {options.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );

  return [state, Dropdown, setState, setOptions];
};

export default useDropdown;
