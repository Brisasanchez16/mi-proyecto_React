import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc} from 'firebase/firestore'
import dataProducts from "../components/Data/Data";

const firebaseConfig = {
    apiKey: "AIzaSyCd8uVZa9KuGqkY9rLBtrNt5eCWZXgTqQg",
    authDomain: "react-brisa-sanchez.firebaseapp.com",
    projectId: "react-brisa-sanchez",
    storageBucket: "react-brisa-sanchez.appspot.com",
    messagingSenderId: "488004299427",
    appId: "1:488004299427:web:ddc2e600f617e18f3fad16"
};

const app = initializeApp(firebaseConfig);
const firestoreDB = getFirestore(app)

export async function saveProductsToFirebase(){
const collectionProd = collection(firestoreDB, "productos")

for(let item of dataProducts){
    const docref = await addDoc(collectionProd, item)
    console.log(docref.id)
}

}

export default firestoreDB
