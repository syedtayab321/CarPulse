import { db } from "../FirebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";

export const fetchServiceByTitle = async (title) => {
  try {
    const servicesRef = collection(db, "services");
    const q = query(servicesRef, where("serviceTitle", "==", title));
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      const serviceDoc = querySnapshot.docs[0];
      return { id: serviceDoc.id, ...serviceDoc.data() };
    } else {
      console.error("No document found with the provided service title");
      return null;
    }
  } catch (error) {
    console.error("Error fetching service by title:", error);
    throw error;
  }
};
