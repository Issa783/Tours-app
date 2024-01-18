import React, { useEffect, useState } from "react";
import Loading from "./Components/loading";
import Tours from "./Components/tours";
import Navbar from "./Components/header";
import styles from "./style.module.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTours = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchData = () => {
    fetch("https://course-api.com/react-tours-project")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setTours(data);
      })
      .catch((error) => {
        //console.error("Error fetching data:", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData(); // Call fetchData directly within useEffect
  }, []); // Empty dependency array means it will run once on mount

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className={styles.title}>
          <h2>No tours left</h2>
          <button onClick={fetchData} className={styles.btn}>Refresh</button>
        </div>
      </main>
    );
  }

  const toursData = tours.map((toursdata) => (
    <Tours key={toursdata.id} toursdata={toursdata} removeTours={removeTours} />
  ));

  return (
    <main>
      <Navbar />
      {toursData}
    </main>
  );
}

export default App;
