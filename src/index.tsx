import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";
import { Header } from "./header/Header";
import {
  BrowserRouter,
  Routes,
  Route,
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import { SideNav } from "./sideNav/SideNav";
import {
  MainPage,
  SearchPage,
  TablesPage,
  CalendarPage,
  MapsPage,
  WidgetsPage,
  ProfilePage,
  FinancePage,
} from "./pages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      element={
        <>
          <SideNav />
          <main>
            <Outlet /> {/* e.g to display SearchPage content if route is "search" */}
          </main>
        </>
      }
    >
      <Route path="/" element={<MainPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/tables" element={<TablesPage />} />
      <Route path="/calendar" element={<CalendarPage />} />
      <Route path="/maps" element={<MapsPage />} />
      <Route path="/widgets" element={<WidgetsPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/finances" element={<FinancePage />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Header />
    <div className="main">
      <RouterProvider router={router} />
      {/* <BrowserRouter>
       
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/tables" element={<TablesPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/maps" element={<MapsPage />} />
          <Route path="/widgets" element={<WidgetsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/finances" element={<FinancePage />} />
        </Routes>
      </BrowserRouter> */}
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
