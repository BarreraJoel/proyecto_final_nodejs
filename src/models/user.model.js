import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase.config.js";

export async function getAllUser() {
    const usersRef = collection(db, "users");
    const snapshot = await getDocs(usersRef);
    const users = snapshot.docs.map(doc => ({
        ...doc.data()
    }));
    return users;
};