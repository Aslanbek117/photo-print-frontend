import React from 'react';

import CircleSmallLogo from './circleSmallLogo.svg';
import './department.css';

const daysOfWeek = [
  { title: 'Пн' },
  { title: 'Вт' },
  { title: 'Ср' },
  { title: 'Чт' },
  { title: 'Пт' },
  { title: 'Сб' },
  { title: 'Вс' },
];

const ActiveDepartment = ({ department }: { department: any }) => {
  return (
    <div className="active-department">
      <div className="active-department-header">
        <img alt="" src={CircleSmallLogo} />
        <div className="active-department-header-right">
          <p style={{ fontSize: 15, margin: 0, fontWeight: 'bold' }}>Отделение №1</p>
          <p style={{ fontSize: 15, margin: 0 }}>{department?.address}</p>
        </div>
      </div>
      <div className="active-department-body">
        {daysOfWeek.map((day, i) => {
          const active = day?.title === 'Чт';
          return (
            <div className={`schedule-item ${active && 'active-schedule-item'}`}>
              <p className="week-day">{day?.title}</p>
              <p className="work-times">08:00</p>
              <p className="work-times">-</p>
              <p className="work-times">22:00</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ActiveDepartment;
