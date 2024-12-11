import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

interface Data {
  id: number;
  name: string;
}

const App: React.FC = () => {
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/data")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data", error);
      });
  }, []);

  return (
    <div>
      <h1>Data from Azure SQL</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
