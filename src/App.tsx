import Header from "@components/Header/Header";
import ErrorBoundary from "@utils/ErrorBoundary";
import WelcomeSlider from "@components/WelcomeSlider/WelcomeSlider";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <ErrorBoundary fallback={<div>Header Error Boundary</div>}>
        <Header />
        <WelcomeSlider />
        <Footer />
      </ErrorBoundary>
    </>
  );
}

export default App;
