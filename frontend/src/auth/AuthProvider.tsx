import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface AuthContextType {
  token: string | null;
  userId: string | null;
  isLoggedIn: boolean;
  login: (newToken: string | null, newUserId: string | null) => void;
  logout: () => void;
}

// Create the context with default values
export const AuthContext = createContext<AuthContextType>({
  token: null,
  userId: null,
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token")
  );
  const [userId, setUserId] = useState<string | null>(
    localStorage.getItem("userId")
  );
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(!!token);

  useEffect(() => {
    if (token && userId) {
      localStorage.setItem("token", token);
      localStorage.setItem("userId", userId);
    } else {
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
    }
    setIsLoggedIn(!!token);
  }, [token, userId]);

  const login = (newToken: string | null, newUserId: string | null) => {
    setToken(newToken);
    setUserId(newUserId);
  };

  const logout = () => {
    setToken(null);
    setUserId(null);
  };

  const value: AuthContextType = {
    token,
    userId,
    isLoggedIn,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
