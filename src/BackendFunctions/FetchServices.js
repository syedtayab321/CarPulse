import { db } from '../FirebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
export const fetchServicesData = async () => {
  const servicesCollection = collection(db, 'services');
  const servicesSnapshot = await getDocs(servicesCollection);
  const servicesData = servicesSnapshot.docs.map(doc => ({
    id: doc.id,
    title: doc.data().serviceTitle,
    description: doc.data().description || 'Hello Description Here',
    color: doc.data().color || 'purple',
    link: doc.data().link || '/serviceDetails'
  }));

  return servicesData;
};
