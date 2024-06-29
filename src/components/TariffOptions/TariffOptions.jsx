import React from 'react';
import Tariff from '../Tariff/Tariff';
import '../Tariff/Tariff.scss';

const TariffOptions = () => {
  const description = 'Объем включенного трафика не ограничен';
  const tariffs = [
    { name: 'Безлимитный 300', price: 'руб 300 /мес', speed: 'до 10 Мбит/сек', active: false },
    { name: 'Безлимитный 450', price: 'руб 450 /мес', speed: 'до 50 Мбит/сек', active: false },
    { name: 'Безлимитный 550', price: 'руб 550 /мес', speed: 'до 100 Мбит/сек', active: false },
    { name: 'Безлимитный 1000', price: 'руб 1000 /мес', speed: 'до 200 Мбит/сек', active: false },
  ];

  return (
    <div className='tariff-container'>
      {tariffs.map((tariff, index) => (
        <Tariff
          key={index}
          name={tariff.name}
          price={tariff.price}
          speed={tariff.speed}
          description={description}
          active={tariff.active}
        />
      ))}
    </div>
  );
};

export default TariffOptions;
