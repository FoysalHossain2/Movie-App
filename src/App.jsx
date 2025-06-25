import { useState } from "react";
import MovieList from "./cine/MovieList";
import Footer from "./compnent/Footer";
import Header from "./compnent/Header";
import Sidebar from "./compnent/Sidebar";
import { MovieContext } from "./context";

const App = () => {
  const [cartData, setCartData] = useState([]);

  return (
    <MovieContext.Provider value={(cartData, setCartData)}>
      <div>
        <Header />
        <main>
          <div class="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
            <Sidebar />
            <MovieList />
          </div>
        </main>

        <Footer />
      </div>
    </MovieContext.Provider>
  );
};

export default App;
