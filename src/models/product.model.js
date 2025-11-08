import { addDoc, collection, deleteDoc, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../config/firebase.config.js";

export async function getProducts() {
    const productsRef = collection(db, "products");
    const snapshot = await getDocs(productsRef);
    const products = snapshot.docs.map(doc => ({
        ...doc.data()
    }));
    return products;
};

export async function getProduct(id) {
    const docRef = doc(db, "products", id);
    const snapshot = await getDoc(docRef);
    return snapshot.data();
};

export async function insertProduct(product) {
    const docRef = await addDoc(collection(db, "products"), product);
    const snapshot = await getDoc(docRef);
    return snapshot.data();
}

export async function destroyProduct(id) {
    return await deleteDoc(doc(db, "products", id));
}
