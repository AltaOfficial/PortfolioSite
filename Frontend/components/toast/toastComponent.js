"use client";
import { FiX } from "react-icons/fi";
import { ToastContext } from "./toastContext";
import { useState, useMemo } from "react";

// Made with the help of a tutorial by maghfoor: https://www.youtube.com/watch?v=52g9qcTD6ZI

export function ToastComponent({ title, message, close }) {
  return (
    <div className="bg-[#262626] flex w-[21rem] px-8 py-4 rounded-md m-4 mt-1 gap-10 z-30">
      <div>
        <p className="font-bold">{title}</p>
        <p>{message}</p>
      </div>
      <button type="button">
        <FiX size={25} onClick={close} />
      </button>
    </div>
  );
}

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  function openToast({ title, message }) {
    const newToast = {
      id: Date.now(),
      title: title,
      message: message,
    };

    setToasts([...toasts, newToast]);
  }

  function closeToast(toastId) {
    setToasts(toasts.filter((toast) => toast.id != toastId));
  }

  const contextValue = useMemo(
    () => ({
      open: openToast,
      close: closeToast,
    }),
    [toasts]
  );

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
      <div className="flex fixed bottom-0 right-0 flex-col">
        {toasts &&
          toasts.map((toast) => {
            return (
              <ToastComponent
                key={toast.id}
                title={toast.title}
                message={toast.message}
                close={() => closeToast(toast.id)}
              />
            );
          })}
      </div>
    </ToastContext.Provider>
  );
}
