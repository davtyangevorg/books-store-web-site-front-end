import { lazy, Suspense } from "react";
import { FeaturedBooks } from "./pages/featured-books";
import { Footer } from "./pages/footer";
import Header from "./pages/header";
import { useUser } from "./hooks/use-user";

// Lazy load the NotUsableContent component
const NotUsableContent = lazy(() => import("./pages/not-usable-content"));

function App() {
  useUser();

  return (
    <>
      <Header />
      <FeaturedBooks />
      <Footer />

      <Suspense fallback={<div>Loading...</div>}>
        <NotUsableContent />
      </Suspense>
    </>
  );
}

export default App;
