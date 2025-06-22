// src/authService.js
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "./constant";


let curuser='';
export const signup = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const login = (email, password) => {
  try{
  return signInWithEmailAndPassword(auth, email, password);
  }
  catch(er){
console.log(er)
  }
};

export const logout = () => {
  return signOut(auth);
};

const authcheck=()=>{
  onAuthStateChanged(auth,(cursuser)=>nowuser=cursuser)
}
export {curuser};