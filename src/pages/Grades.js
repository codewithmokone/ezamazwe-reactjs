import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { db } from '../firebase'
import { collection, doc, getDoc } from 'firebase/firestore'

function Grades() {

    const { id } = useParams()
    const [data, setData] = useState([])

    const navigate = useNavigate()

    // const fetchGrades = async () => {
    //     try {
    //         const userCollection = collection(db, 'collectionTest');
    //         const userDocRef = doc(userCollection, item);
    //         const userDocSnapshot = await getDoc(userDocRef);
    //         const userInfo = userDocSnapshot.data();
    //         setData(userInfo)
    //         console.log("Data", userInfo)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    // useEffect(() => {
    //     fetchGrades();
    // }, [])

    useEffect(() => {
        const fetchGrades = async () => {
          try {
            const userCollectionRef = collection(db, 'collectionTest')
            const userDocRef = doc(userCollectionRef, id)
            const userDocSnapshot = await getDoc(userDocRef)
            
            if (userDocSnapshot.exists()) {
              const userInfo = userDocSnapshot.data()
              setData(userInfo.grades)
            }
          } catch (error) {
            console.log(error)
          }
        }
    
        fetchGrades()
      }, [id])


    // console.log("Grades: ", data)

    return (
        <div>
            {
                data && data.map((grade, index) => (
                    <li key={index}><a onClick={()=> {navigate(`/subjets/${grade.gradeName}`)}}>{grade.gradeName}</a></li>
                ))
            }
        </div>
    )
}

export default Grades
