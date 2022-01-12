import React, { useEffect, useState } from 'react'
import { db } from '../firebase-config'
import { collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore"

export default function SearchResult() {

  const [activities, setActivities] = useState([]);
  const activitiesCollectionRef = collection(db, "activities");
  useEffect(() => {
    const getActivities = async () => {
      const data = await getDocs(activitiesCollectionRef);
      setActivities(data.docs.map((doc) => ({...doc.data(), id: doc.id })))
    };

    getActivities();
  }, [])

  return (
    <div className='container-fluid mt-4 mb-4'>
      <div className='row'>
        <div className='col-3'>
          <div className='filter-block'>
            <h3>Filtres</h3>
          </div>
        </div>
        <div className='col-6'>
          <div className='result-block'>
            <h3>Résultat(s)</h3>
            {activities.map((activity) => {
              return (
                <div className='result-card'>
                  <p>title : {activity.name}</p>
                  <p>description : {activity.description}</p>
                  <p>price : {activity.price} €</p>
                  <p>durée : {activity.duration} minutes</p>
                  <p>nb étoile : {activity.nbStars}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className='col-3'>
          <h3>Pub</h3>
          <div className='right-block'></div>
        </div>
      </div>
    </div>
  )
}
