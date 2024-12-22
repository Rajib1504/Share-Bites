import React, { createContext, useState } from "react";
export const AuthContext = createContext();
const AuthPovider = ({ children }) => {
  const [user, setUser] = useState(null);
  console.log(user);
  const authInfo = {
    setUser,
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthPovider;
