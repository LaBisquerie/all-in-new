import React, { useEffect, useState } from 'react'
import { db } from '../firebase-config'
import { collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore"
import act1 from '../assets/act1.jpg'
import { FaRegHeart } from "react-icons/fa";

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

  const nbResult = activities.length;

  const countStars = (nbStars) => {
    switch(nbStars) {
      case 1:
        return "⭐";
      case 2:
        return "⭐⭐"
      case 3:
        return "⭐⭐⭐";
      case 4:
        return "⭐⭐⭐⭐";
      case 5:
        return "⭐⭐⭐⭐⭐"
      default:
        return "";
    }
  }

  return (
    <div className='container mt-4 mb-4'>
      <div className='row'>
        <div className='col-3'>
          <div className='filter-block'>
            <div class="filter-block__heading">
              <h4>Filtrer par</h4>
              <a href="#" class="filter-block__reinit">Reinitialiser</a>
            </div>
            <div class="filter-block__content">
              <p class="filter-block__content-title">Prix</p>
              <div class="filter-block__content-checkbox">
                <input type="checkbox" name="25less" id="" />
                <label for="">Moins de 25€</label>
              </div>
              <div class="filter-block__content-checkbox">
                <input type="checkbox" name="50less" id="" />
                <label for="">Moins de 50€</label>
              </div>
              <div class="filter-block__content-checkbox">
                <input type="checkbox" name="75less" id="" />
                <label for="">Moins de 75€</label>
              </div>
            </div>
            <div class="filter-block__content">
              <p class="filter-block__content-title">Durée</p>
              <div class="filter-block__content-checkbox">
                <input type="checkbox" name="60less" id="" />
                <label for="">Moins de 60 minutes</label>
              </div>
              <div class="filter-block__content-checkbox">
                <input type="checkbox" name="90less" id="" />
                <label for="">Moins de 90 minutes</label>
              </div>
              <div class="filter-block__content-checkbox">
                <input type="checkbox" name="120less" id="" />
                <label for="">Moins de 120 minutes</label>
              </div>
            </div>
          </div>
        </div>
        <div className='col-9'>
          <div className='result-block'>
            <div class="result-block__filtred">
              <p>{nbResult} résultat(s)</p>
              <p>Filtrer par
                <select name="" id="">
                  <option value="croissant">Croissant</option>
                  <option value="decroissant">Décroissant</option>
                </select>
              </p>
            </div>
            {activities.map((activity) => {
              return (
                <div className='result-card'>
                  <img src={act1} alt={`${activity.image}.jpg`} width="400" height="300"/>
                  <div class="result-card__text">
                    <h3 class="result-card__title">{activity.name}</h3>
                    <p class="result-card__description">{activity.description}</p>
                    <div class="result-card__informations">
                      <p class="result-card__price">{activity.price} €</p>
                      <p class="result-card__duration">{activity.duration} minutes</p>
                      <p class="result-card__stars">
                        {countStars(activity.nbStars)}
                      </p>
                    </div>
                    <div class="result-card__buttons">
                      <a href="#" class="btn check-activities">Voir l'activité</a>
                      <a href="#" class="btn save-activities"><FaRegHeart /> Enregistrer pour plus tard</a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  )
}