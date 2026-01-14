import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../store/themeSlice.js";

export default function ThemeToggle() {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.theme.mode);

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className="rounded-xl border px-3 py-2 text-sm
      border-zinc-300 text-zinc-900 hover:bg-zinc-100
      dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-800"
    >
      {mode === "dark" ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
}
