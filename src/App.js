import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTES } from "./shared/constants";
import { PageWrapper } from "./PageWrapper";

import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { totals } from "./redux/features/cart/cartSlice";

export default function App() {
  const { cart } = useSelector((store) => store);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(totals());
  }, [cart]);
  return (
    <BrowserRouter>
      <PageWrapper>
        <Routes>
          {ROUTES.map(({ routeName, Component }) => {
            return (
              <Route
                key={routeName}
                path={routeName}
                element={<Component />}
              ></Route>
            );
          })}
        </Routes>
      </PageWrapper>
    </BrowserRouter>
  );
}
