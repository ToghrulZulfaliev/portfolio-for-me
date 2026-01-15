import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import IntroScreen from "./components/intro/IntroScreen.jsx";
import Home from "./pages/Home";
import BackgroundFX from "./components/BackgroundFX";
import ScrollProgress from "./components/ScrollProgress";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const mode = useSelector((state) => state.theme.mode);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", mode === "dark");
  }, [mode]);

  useEffect(() => {
    const t = setTimeout(() => setShowIntro(false), 2500);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <BackgroundFX />
      {!showIntro && <ScrollProgress />}
      {showIntro ? <IntroScreen /> : <Home />}
    </>
  );
}
