import { Header } from "./layout/Header";
import { Footer } from "./layout/Footer";
import { Main } from "./layout/Main";

function App() {
  return (
    <> {/* Коли не потрібен div( return повертає лише один елемент !) */}
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
