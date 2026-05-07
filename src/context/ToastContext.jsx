import React, { createContext, useContext, useState, useCallback } from "react";

const ToastContext = createContext();

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within ToastProvider");
  }
  return context;
};

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((message, type = "info", duration = 4000) => {
    const id = Date.now();
    const toast = { id, message, type };

    setToasts((prev) => [...prev, toast]);

    if (duration > 0) {
      setTimeout(() => {
        removeToast(id);
      }, duration);
    }

    return id;
  }, []);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const value = {
    toasts,
    addToast,
    removeToast,
  };

  return (
    <ToastContext.Provider value={value}>
      {children}
    </ToastContext.Provider>
  );
};

const Toast = ({ toast, onClose }) => {
  const baseStyles =
    "fixed bottom-4 right-4 px-6 py-3 rounded-lg text-white text-sm font-medium shadow-lg transition-all duration-300 animate-in fade-in slide-in-from-bottom-2";

  const typeStyles = {
    success: "bg-[#00CEA8]",
    error: "bg-[#FF6B6B]",
    warning: "bg-[#FFA500]",
    info: "bg-[#915EFF]",
  };

  return (
    <div className={`${baseStyles} ${typeStyles[toast.type] || typeStyles.info}`}>
      <div className="flex items-center justify-between gap-4">
        <span>{toast.message}</span>
        <button
          onClick={onClose}
          className="ml-4 text-white/80 hover:text-white transition-colors"
          aria-label="Close notification"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export const ToastContainer = () => {
  const { toasts, removeToast } = useToast();

  return (
    <div className="fixed bottom-4 right-4 pointer-events-none space-y-2">
      {toasts.map((toast) => (
        <div key={toast.id} className="pointer-events-auto">
          <Toast toast={toast} onClose={() => removeToast(toast.id)} />
        </div>
      ))}
    </div>
  );
};
