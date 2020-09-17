import React, { useState, useEffect, useRef } from 'react';


const Dropdown = ({ options , selected, onSelectedChange, label }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    console.log(options)
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) {
        return;
      }

      setOpen(false);
    }

    document.body.addEventListener('click', onBodyClick);

    return () => {
      document.body.removeEventListener('click', onBodyClick);
    };
  }, [])

  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null;
    }
    return (
      <article
        key={option.value}
        className="item"
        onClick={() => onSelectedChange(option)}
      >
        {option.label}
      </article>
    )
  });

  return (
    <section ref={ref} className="Dropdown">
      <article className="dropdown-field">
        <label
          className="dropdown-label"
        >
          {label}
        </label>
        <article
          className={`dropdown-bar ${open ? 'active' : ''}`}
          onClick={() => setOpen(!open)}
        >
          <img />
          <article
            className="text"
          >
            {selected.label}
          </article>
          <article
            className={`dropdown-menu ${open ? 'visible transition' : ''}`}
          >
            {renderedOptions}
          </article>
        </article>
      </article>
    </section>
  )
};

export default Dropdown;