import { createContext, useState } from "react";

export const statusContext = createContext();

export const StatusProvider = ({ children }) => {
  const [isConnected, setIsConnected] = useState(false);

  const login = () => {
    // Effectuez une demande POST pour vérifier les informations d'identification de l'utilisateur
    // Si l'utilisateur est authentifié, définir isAuthenticated sur true
    setIsConnected(true);
  };

  const logout = () => {
    // Définir isAuthenticated sur false lors de la déconnexion de l'utilisateur
    setIsConnected(false);
  };

  return (
    <statusContext.Provider value={{ isConnected, login, logout }}>
      {children}
    </statusContext.Provider>
  );
};
