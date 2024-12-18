import React, { useState } from "react";

const Anunturi: React.FC = () => {
  const [selectedMonth, setSelectedMonth] = useState<number>(
    new Date().getMonth()
  );
  const [filteredEvents, setFilteredEvents] = useState<{
    [key: string]: string;
  }>({});

  const events: { [key: string]: string } = {
    "2024-06-07": "Excursie la Muzeul de Istorie",
    "2024-06-10": "Ședința cu părinții clasei a VIII-a",
    "2024-06-15": "Premierea olimpicilor școlari",
    "2024-06-20": "Festivitatea de absolvire",
    "2024-07-10": "Cursuri de vacanță - Limba Engleză",
    "2024-09-05": "Începerea anului școlar",
    "2024-10-01": "Ziua educației",
    "2024-12-15": "Sărbători de Crăciun",
  };

  const filterEventsByMonth = (month: number) => {
    const filtered = Object.keys(events)
      .filter((date) => {
        const eventDate = new Date(date);
        return eventDate.getMonth() === month;
      })
      .reduce((obj, key) => {
        obj[key] = events[key];
        return obj;
      }, {} as { [key: string]: string });

    setFilteredEvents(filtered);
  };

  const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedMonth = parseInt(event.target.value);
    setSelectedMonth(selectedMonth);
    filterEventsByMonth(selectedMonth);
  };

  return (
    <section id="announcements-section">
      <div className="announcements-header">
        <h1>Anunțuri și Noutăți</h1>
        <div className="announcements-filter">
          <label htmlFor="month-selector">Alege o lună:</label>
          <select
            id="month-selector"
            value={selectedMonth}
            onChange={handleMonthChange}
          >
            {[
              "Ianuarie",
              "Februarie",
              "Martie",
              "Aprilie",
              "Mai",
              "Iunie",
              "Iulie",
              "August",
              "Septembrie",
              "Octombrie",
              "Noiembrie",
              "Decembrie",
            ].map((month, index) => (
              <option key={index} value={index}>
                {month}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="announcements-content">
        <ul>
          {Object.keys(filteredEvents).length === 0 ? (
            <li className="announcements-empty">
              Nu sunt evenimente pentru luna selectată.
            </li>
          ) : (
            Object.keys(filteredEvents).map((date) => {
              const eventDate = new Date(date);
              return (
                <li key={date}>
                  🗓️ <strong>{eventDate.toLocaleDateString()}</strong>:{" "}
                  {filteredEvents[date]}
                </li>
              );
            })
          )}
        </ul>
      </div>
    </section>
  );
};

export default Anunturi;
