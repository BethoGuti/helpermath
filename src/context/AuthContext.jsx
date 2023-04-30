import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  getAuth
} from "firebase/auth";
import { app, auth } from "../firebase";
import { getFirestore, doc, collection, setDoc, getDoc } from "firebase/firestore";

const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error("There is no Auth provider");
  return context;
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signup = async (email, password, name) => {
    // console.log(email, password, name)
    const user = await createUserWithEmailAndPassword(auth, email, password).then(user => user);
    // const user = await rest.then( user => user ); 
    const firestore = getFirestore(app);
    const docuRef = doc(firestore, `usuarios/${user.user.uid}`);
    setDoc(docuRef, { nombre_completo: name, rol: 'User' });
    return user;
  };

  const login = (email, password) => {

    return signInWithEmailAndPassword(auth, email, password);
    // return login;
  };


  const loginWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  const logout = () => signOut(auth);

  const resetPassword = async (email) => sendPasswordResetEmail(auth, email);

  useEffect(() => {
    const auth_2 = getAuth(app);
    const db = getFirestore(app);
    async function getRol(uid) {
      const docuRef = doc(db, `usuarios/${uid}`);
      const docuCifrada = await getDoc(docuRef);
      const infoFinal = docuCifrada.data().rol;
      return infoFinal;
    }

    function setUserWithFirebaseAndRol(usuarioFirebase) {

      if(!usuarioFirebase) return

      getRol(usuarioFirebase.uid).then((rol) => {
        const userData = {
          uid: usuarioFirebase.uid,
          email: usuarioFirebase.email,
          rol: rol,
        };
        setUser(userData);
      });
    }
    const unsubuscribe = onAuthStateChanged(auth, (currentUser) => {
      setUserWithFirebaseAndRol(currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubuscribe();
  }, []);

  return (
    <authContext.Provider
      value={{
        signup,
        login,
        user,
        logout,
        loading,
        loginWithGoogle,
        resetPassword,
      }}
    >
      {children}
    </authContext.Provider>
  );
}