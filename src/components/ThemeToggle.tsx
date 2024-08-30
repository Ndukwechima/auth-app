// src/components/ThemeToggle.tsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../redux/feaures/theme/ThemeSlice";
import { RootState } from "../redux/store/Store";

const ThemeToggle: React.FC = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state: RootState) => state.theme.mode);

  React.useEffect(() => {
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className="p-2 bg-gray-200 dark:bg-gray-800 rounded"
    >
      {mode === "light" ? "🌙" : "☀️"}
    </button>
  );
};

export default ThemeToggle;
