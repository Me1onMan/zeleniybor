import ErrorPage from "@/pages/ErrorPage/ErrorPage";
import HomePage from "@/pages/HomePage/HomePage";
import { BrowserRouter, Route, Routes } from "react-router";

function PageRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="rooms" element={} />
        <Route path="treatment" element={} />
        <Route path="vouchers" element={} />
        <Route path="sport-and-additional-services" element={} />
        <Route path="camp" element={} />
        <Route path="contacts" element={} />
        <Route path="about" element={} /> */}
        <Route path="error" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default PageRouter;
