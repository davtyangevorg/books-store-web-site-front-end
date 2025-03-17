import { lazy, Suspense, useState } from "react";
import { FeaturedBooks } from "./pages/featured-books";
import { Footer } from "./pages/footer";
import Header from "./pages/header";
import { useUser } from "./hooks/use-user";

// Lazy load the NotUsableContent component
const NotUsableContent = lazy(() => import("./pages/not-usable-content"));

function App() {
  useUser();
  const [isOpenLazy, setIsOpenLazy] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpenLazy(!isOpenLazy)}>lazy load</button>
      <button
        onClick={() =>
          import("./helpers").then((module) => {
            console.log(module.sum(1, 2));
          })
        }
      >
        sum
      </button>
      <Suspense fallback={<div>Loading...</div>}>
        {isOpenLazy && <NotUsableContent />}
      </Suspense>
      <Header />
      <FeaturedBooks />
      <Footer />
    </>
  );
}

export default App;
