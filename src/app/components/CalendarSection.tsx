import React, { useState } from "react";
import styled from "styled-components";

// Funcții pentru a obține zilele și începutul lunii
const getDaysInMonth = (year: number, month: number) => {
  return new Date(year, month + 1, 0).getDate();
};

const getFirstDayOfMonth = (year: number, month: number) => {
  return new Date(year, month, 1).getDay();
};

const CalendarSection: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);

  const days = [];
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  // Generare calendar pentru luna curentă
  const renderCalendar = () => {
    const rows = [];
    let dayCounter = 0;

    for (let i = 0; i < 6; i++) {
      // 6 rânduri max, pentru săptămânile lunii
      const cells = [];
      for (let j = 0; j < 7; j++) {
        // 7 zile pe săptămână
        if (i === 0 && j < firstDay) {
          cells.push(<td key={j}></td>); // Zilele înainte de prima zi a lunii
        } else if (dayCounter < daysInMonth) {
          dayCounter++;
          cells.push(
            <td key={j}>
              <button
                className={
                  dayCounter === new Date().getDate() ? "current-day" : ""
                }
              >
                {dayCounter}
              </button>
            </td>
          );
        } else {
          cells.push(<td key={j}></td>); // Zilele după ultima zi a lunii
        }
      }
      rows.push(<tr key={i}>{cells}</tr>);
    }

    return rows;
  };

  const handlePrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1)); // Mergi la luna anterioară
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1)); // Mergi la luna următoare
  };

  const handlePrevYear = () => {
    setCurrentDate(new Date(year - 1, month, 1)); // Mergi la anul anterior
  };

  const handleNextYear = () => {
    setCurrentDate(new Date(year + 1, month, 1)); // Mergi la anul următor
  };

  return (
    <CalendarWrapper>
      <NavButtons>
        <button onClick={handlePrevYear}>Anul precedent</button>
        <button onClick={handlePrevMonth}>Luna precedentă</button>
        <span>
          {currentDate.toLocaleString("default", { month: "long" })} {year}
        </span>
        <button onClick={handleNextMonth}>Luna următoare</button>
        <button onClick={handleNextYear}>Anul următor</button>
      </NavButtons>
      <CalendarTable>
        <thead>
          <tr>
            <th>Luni</th>
            <th>Marți</th>
            <th>Miercuri</th>
            <th>Joi</th>
            <th>Vineri</th>
            <th>Sâmbătă</th>
            <th>Duminică</th>
          </tr>
        </thead>
        <tbody>{renderCalendar()}</tbody>
      </CalendarTable>
    </CalendarWrapper>
  );
};

export default CalendarSection;

// Stiluri cu styled-components
const CalendarWrapper = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 100%;
  padding: 20px;
  font-family: "Arial", sans-serif;
  color: #333;
`;

const NavButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  button {
    background-color: #4caf50;
    color: white;
    border: none;
    padding: 8px 16px;
    font-size: 1rem;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s ease;
    margin: 0 8px;
  }

  button:hover {
    background-color: #45a049;
  }

  button:disabled {
    background-color: #ddd;
    cursor: not-allowed;
  }

  span {
    font-size: 1.2rem;
    color: #333;
    margin: 0 10px;
    text-transform: capitalize;
  }
`;

const CalendarTable = styled.table`
  width: 100%;
  margin-top: 20px;
  border-collapse: collapse;

  th {
    background-color: #f2f2f2;
    padding: 10px;
    text-align: center;
    color: #666;
    font-weight: normal;
  }

  td {
    text-align: center;
    padding: 12px 0;
    font-size: 1.1rem;
    cursor: pointer;
  }

  td button {
    background-color: transparent;
    border: none;
    color: #4caf50;
    font-size: 1.1rem;
    padding: 5px 10px;
    border-radius: 50%;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  td button:hover {
    background-color: #4caf50;
    color: white;
  }

  td button:disabled {
    color: #ddd;
  }

  td button.current-day {
    background-color: #ff5722;
    color: white;
  }

  td button.current-day:hover {
    background-color: #ff7043;
  }
`;
