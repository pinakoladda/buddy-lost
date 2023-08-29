import { Info } from "./components/Info";
import "./App.css";

export const App = () => {
  const onLocaleChange = (locale) => () => {
    localStorage.setItem("lang", locale)
    window.location.reload();
  };

  return (
    <>
      <a onClick={onLocaleChange("en")}>EN</a> |{" "}
      <a onClick={onLocaleChange("ru")}> RU</a>
      <Info />
    </>
  );
};
