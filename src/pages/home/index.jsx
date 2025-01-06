import { useEffect } from "react";
import { movieAPIInstance } from "../../api";

const HomePage = () => {
  useEffect(() => {
    //call tmdb movies api via axios
    movieAPIInstance.get("/movie/popular").then((response) => {
      console.log(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default HomePage;
