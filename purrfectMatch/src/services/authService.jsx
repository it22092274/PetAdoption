// src/services/authService.js
import { auth, firebase } from '../firebase';

const signup = async (email, password) => {
  try {
    const userCredential = await auth.createUserWithEmailAndPassword(email, password);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

const login = async (email, password) => {
  try {
    const userCredential = await auth.signInWithEmailAndPassword(email, password);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

const loginWithGoogle = async () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  try {
    const userCredential = await auth.signInWithPopup(provider);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

const logout = async () => {
  try {
    await auth.signOut();
  } catch (error) {
    throw error;
  }
};

export { signup, login, loginWithGoogle, logout };
