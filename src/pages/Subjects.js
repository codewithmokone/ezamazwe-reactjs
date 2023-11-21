import { collection, getDoc, getDocs, query, where } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../firebase'

function Subjects() {

    const { grade } = useParams()

    const [subjects,setSubjects] = useState([])

    console.log("Grade Id: ", grade)
    console.log("Subjects: ", subjects);

    useEffect(() => {
        const fetchSubjectsData = async () => {
            const subjectsQuery = query(collection(db, "collectionTest"), where("gradeName", "==", "Grade 1"));
           
            try {
                const querySnapshot = await getDocs(subjectsQuery);
                const subjectsData = querySnapshot.docs.map((doc) => {
                    return {
                        id: doc.id,
                        data: doc.data()
                    }
                });
                console.log("Subjects: ", subjectsData);
                setSubjects(subjectsData);
            } catch (error) {
                console.error("Error fetching subjects:", error);
            }
           
        }
        fetchSubjectsData()
    },[grade])

    return (
        <div>
            {subjects.map((subject) => (
                <div key={subject.id}>
                    <h3>{subject.id}</h3>
                    <pre>{JSON.stringify(subject.data, null, 2)}</pre>
                </div>
            ))}
        </div>
    )
}

export default Subjects
