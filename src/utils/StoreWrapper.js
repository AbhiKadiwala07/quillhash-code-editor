"use client";
import { store } from "@/store/store";
import { Provider } from "react-redux";

export function StoreWrapper({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
