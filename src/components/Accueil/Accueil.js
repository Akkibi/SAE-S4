import { useContext } from "react";
import { statusContext } from "../../context/context";

export const Accueil = () => {
  const { isConnected, logout } = useContext(statusContext);
  if (isConnected === true) {
    console.log("cucu");
  }
  return (
    <div>
      <h1>ICI L'accueil</h1>
    </div>
  );
};
