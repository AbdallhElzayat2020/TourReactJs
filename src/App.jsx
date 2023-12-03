import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import Tours from "./components/Tours";
const url = "https://course-api.com/react-tours-project";
const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState(true);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };
  const fetchTours = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setTours(tours);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    fetchTours();
  }, []);
  //Loading
  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  //Check If Are Tours
  if (tours.length === 0) {
    return (
      <div className="title">
        <h2>No Tours Found</h2>
        <button
          type="button"
          onClick={fetchTours}
          style={{ marginTop: "2rem" }}
          className="btn"
        >
          Refresh Page
        </button>
      </div>
    );
  }
  return (
    <main>
      <Tours removeTour={removeTour} tours={tours} />
    </main>
  );
};
export default App;
