import React, { useState } from 'react';
import './Tariff.scss';

const Tariff = ({ name, price, speed, description, active }) => {
  const [isActive, setIsActive] = useState(active || false);

  const handleActiveToggle = () => {
    setIsActive(!isActive);
  };

  const colorClasses = {
    'Безлимитный 300': 'tariff-1',
    'Безлимитный 450': 'tariff-2',
    'Безлимитный 550': 'tariff-3',
    'Безлимитный 1000': 'tariff-4',
  };

  const colorClass = colorClasses[name] || '';

  const matches = price.match(/([\D]*)(\d+)([\D]*)/);
  const currencyText = matches[1];
  const digits = matches[2];
  const text = matches[3];

  return (
    <div
      className={`tariff-option ${colorClass} ${isActive ? 'active' : ''}`}
      onClick={handleActiveToggle}
    >
      <h2 className='tariff-name'>{name}</h2>
      <p className='tariff-price'>
        <span className="currency-text">{currencyText}</span>
        <span className="price-digits">{digits}</span>
        <span className="price-text">{text}</span>
      </p>
      <p className="tariff-speed">{speed}</p>
      <p className="tariff-description">{description}</p>
    </div>
  );
};
export default Tariff;
