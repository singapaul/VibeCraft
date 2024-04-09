import { d as db } from "../../../chunks/firebase.js";
import { query, collection, getDocs } from "firebase/firestore";
const load = async () => {
  const q = query(collection(db, "prompts"));
  const querySnapshot = await getDocs(q);
  const data = querySnapshot.docs.map((doc) => {
    return {
      id: doc.id,
      // This adds the document ID to your data object
      ...doc.data(),
      // This spreads the document data into the object
      ref: doc.ref.path
      // Optional: includes the full path to the document reference
    };
  });
  const typed = data;
  return {
    typed
  };
};
export {
  load
};
