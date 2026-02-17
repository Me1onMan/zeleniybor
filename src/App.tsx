import Header from "@components/Header/Header";
import ErrorBoundary from "@utils/ErrorBoundary";
import WelcomeSlider from "@components/WelcomeSlider/WelcomeSlider";

function App() {
  return (
    <>
      <ErrorBoundary fallback={<div>Header Error Boundary</div>}>
        <Header />
      </ErrorBoundary>
      <WelcomeSlider />
    </>
  );
}

export default App;
