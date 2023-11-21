import React, { useEffect, useState } from 'react'
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from '../firebase';
import { useNavigate } from 'react-router-dom';

function Courses() {

    const [activeCategory, setActiveCategory] = useState(null);
    const [categoryData, setCategoryData] = useState([]);

    const navigate =useNavigate();

    const fetchCategoryData = async () => {
        try {
            const categoryCollection = (collection(db, "collectionTest"));
            const categorySnapshot = await getDocs(
                query(categoryCollection)
            )
            const data = [];
            categorySnapshot.forEach((doc) => {
                const categoryList = doc.data();
                data.push({ id: doc.id, ...categoryList });
            });
            setCategoryData(data);

        } catch (error) {
            console.error('Error fetching Firestore data:', error);
        }
    };

    // console.log("CollectionTest", categoryData)

    useEffect(() => {
        // Call the function to fetch data
        fetchCategoryData();
    }, [])

    return (
        <div>
            {categoryData.map((item, index) => (
                <button 
                    key={index}
                    onClick={() => { navigate(`/grades/${item.id}`)}}
                >{item.categoryTitle}</button>
            ))}
        </div>
    )
}

export default Courses
