import MovieList from "./cine/MovieList";
import Footer from "./compnent/Footer";
import Header from "./compnent/Header";
import Sidebar from "./compnent/Sidebar";

const App = () => {
  return (
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
  );
};

export default App;
