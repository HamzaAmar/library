import React, { useState, useEffect, useContext, createContext } from 'react';
import firebase, { UserType } from '@utils/firebase';

const {
  createUserWithEmailAndPassword,
  auth,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  confirmPasswordReset,
  onAuthStateChanged,
  signOut
} = firebase;

const AuthContext = createContext(null);
// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
// export function ProvideAuth({ children }) {
//   const auth = useProvideAuth();
//   return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
// }
// Hook for child components to get the auth object ...
// ... and re-render when it changes.
// export const useAuth = () => {
//   return useContext(AuthContext);
// };
// Provider hook that creates auth object and handles state

interface User {
  name: string;
  email: string;
}
interface CustomResponse extends Response {
  user: User;
}

export default function useProvideAuth() {
  const [user, setUser] = useState<UserType | boolean | null>(false);
  const signin = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password)
      .then((response: any) => {
        setUser(response.user);
        return response.user;
      })
      .catch(function (err) {
        console.error(err);
      });
  };
  const signup = (name: string, email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password).then(
      (response: any) => {
        setUser(response.user);
        return response.user;
      }
    );
  };
  const signout = () => {
    return signOut(auth).then(() => {
      setUser(false);
    });
  };
  const sendPasswordReset = (email: string) => {
    return sendPasswordResetEmail(auth, email).then(() => {
      return true;
    });
  };
  const confirmPassword = (code: string, password: string) => {
    return confirmPasswordReset(auth, code, password).then(() => {
      return true;
    });
  };
  // Subscribe to user on mount
  // Because this sets state in the callback it will cause any ...
  // ... component that utilizes this hook to re-render with the ...
  // ... latest auth object.
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user: any) => {
      if (user) {
        setUser(user);
      } else {
        setUser(false);
      }
    });
    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);
  // Return the user object and auth methods
  return {
    user,
    signin,
    signup,
    signout,
    sendPasswordReset,
    confirmPassword
  };
}
