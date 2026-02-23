import Header from "@components/Header/Header";
import ErrorBoundary from "@utils/ErrorBoundary";
import Footer from "./components/Footer/Footer";
import PageRouter from "./router/PageRouter";

function App() {
  return (
    <ErrorBoundary fallback={<div>Error Boundary</div>}>
      <Header />
      <PageRouter />
      <Footer />
    </ErrorBoundary>
  );
}

export default App;
