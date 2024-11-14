import { FeaturedBooks } from "./pages/featured-books";
import { Footer } from "./pages/footer";
import Header from "./pages/header";
import { useUser } from "./hooks/use-user";

function App() {
  useUser();

  return (
    <>
      <Header />
      <FeaturedBooks />
      <Footer />
    </>
  );
}

export default App;
