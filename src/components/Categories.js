import React, { useEffect, useState } from 'react'
import { db } from '../firebase-config'
import { collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore"

export default function Categories() {

  const [categories, setcategories] = useState([]);
  const categoriesCollectionRef = collection(db, "categories");
  useEffect(() => {
    const getcategories = async () => {
      const data = await getDocs(categoriesCollectionRef);
      setcategories(data.docs.map((doc) => ({...doc.data(), id: doc.id })))
    };

    getcategories();
  }, [])

  return (
    <div className='container mt-4'>
      <h2 className='category-title'>Nos prestations</h2>
      <div className='row'>
        {categories.map((category) => {
          return (
            <div className='col-6 col-md-3 d-flex justify-content-center'>
              <div className='category-card'>
                <div className='category-card__header'>
                  <a href="#" className='category-card__wrapper'>
                    <img src="https://picsum.photos/800/600?image=700" width="800" height="600" className='category-card__img' />
                  </a>
                  <div className='category-card__heading'>
                    <div className='category-card__title'>{category.name}</div>
                  </div>
                </div>
                <div className='category-card__content'>
                  <div className='category-card__description'>{category.subname}</div>
                  <a href="#" className='category-card__link'>Découvrir</a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}
