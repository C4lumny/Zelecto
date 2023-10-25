import "./App.css";
import { Header } from "./components/header";

export function App() {
  return (
    <>
      <Header />
      <div className=" mt-14 flex justify-center items-center gap-2">
        <img src="src/assets/cubiertos.svg" alt="" className="w-14"/>
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-black to-purple-400">RECETAS</h1>
      </div>
    </>
  );
}
