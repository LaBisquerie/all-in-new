import React, {useState, useEffect} from 'react'
import { db } from '../firebase-config';
import { collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore"

export default function Activities() {

  /* ======================================= */
  /* ===== AFFICHER DATA DE LA DATABASE =====*/
  /* ======================================= */

  const [activities, setActivities] = useState([]);
  const activitiesCollectionRef = collection(db, "activities");
  useEffect(() => {
    const getActivities = async () => {
      const data = await getDocs(activitiesCollectionRef);
      setActivities(data.docs.map((doc) => ({...doc.data(), id: doc.id })))
    };

    getActivities();
  }, [])

  /* ========================================== */
  /* ===== CREE UNE DATA DAND LA DATABASE ===== */
  /* ========================================== */

  const [newName, setNewName] = useState("");
  const [newPrice, setNewPrice] = useState(0);

  const createActivity = async () => {
    await addDoc(activitiesCollectionRef, {name: newName, price: newPrice });
  }

  /* ========================================== */
  /* ===== SUPPRIMER UNE DATA DAND LA DATABASE ===== */
  /* ========================================== */

  const deleteActivity = async (id) => {
    const activityDoc = doc(db, "activities", id);
    await deleteDoc(activityDoc);
  }

  return (
    <div>
      {/* AFFICHER DATA DE LA DATABASE */}
      {activities.map((activity) => {
        return (
          <div>
            {" "}
            <h1>Activity: {activity.name}</h1>
            <h1>Price : {activity.price}</h1>

            {/* SUPPRIMER DATA DANS LA DATABASE */}
            <button onClick={() => {deleteActivity(activity.id)}}>Supprimer une activité</button>
          </div>
        );
      })}

      {/* CREER DATA DANS LA DATABASE */}
      <input placeholder='name of activity...' onChange={(event) => {setNewName(event.target.value);}} />
      <input type="number" placeholder='Price...' onChange={(event) => {setNewPrice(event.target.value);}} />
      <button onClick={createActivity}>Créer activité</button>
    </div>
  )
}
