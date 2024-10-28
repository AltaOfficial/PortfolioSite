import { createContext, useContext } from "react";

// Made with the help of a tutorial by maghfoor: https://www.youtube.com/watch?v=52g9qcTD6ZI

export const ToastContext = createContext();

export const useToast = () => useContext(ToastContext);
