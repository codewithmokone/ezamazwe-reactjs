import { collection, doc, getDoc, } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { db } from '../firebase'

function Subjects() {

  const { id, grade } = useParams()
  const [subjectsData, setSubjectsData] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    const fetchGrades = async () => {

      try {
        const docRef = doc(db, 'Content', id);
        const docSnapshot = await getDoc(docRef);

        if (docSnapshot.exists()) {
          const gradeData = docSnapshot.data();
          const subjectsForGrade = gradeData.subjects && gradeData.subjects[grade];

          if (subjectsForGrade) {
            setSubjectsData(subjectsForGrade);
          } else {
            setSubjectsData([]);
          }
        } else {
          console.log('No such document exists!');
        }
      } catch (error) {
        console.error('Error fetching document:', error);
      }
    };

    fetchGrades();
  }, [id]);

  // console.log("Subjects: ", subjectsData);

  return (
    <div>
      <h1>Subjects for {grade}</h1>
      <ul style={{ display: 'flex', flexDirection: 'column' }}>
        {subjectsData.map((subject, index) => (
          <Link key={index}>{subject}</Link>
        ))}
      </ul>
    </div>
  )
}

export default Subjects
