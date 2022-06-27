import { Route, Routes } from "react-router-dom";
import { Subscribe } from "./pages/Subscribe";
import { Event } from "./pages/Event";


export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Subscribe />} />
      <Route path="/test" element={<h1> Test </h1>} />
      <Route path="/event" element={<Event />} />
      <Route path="/event/lesson/:slug" element={<Event />} />
    </Routes>
  );
}
