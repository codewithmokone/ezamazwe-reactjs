import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../firebase'
import { collection, where } from 'firebase/firestore'
import { query } from 'express'

function SubjectView() {

  const { id, subject } = useParams()
  const [selectedSubject, setSelectedSubject] = useState({})

  const fetchSubject = async () => {
    try {
      const courseRef = collection(db, "Courses");

      // Create a query against the collection.
      const subjectQuery = query(courseRef, where("categoryTopic", "==", subject));
      console.log("Couldn't fetch data. ", subjectQuery)
    } catch (error) {
      console.log("Couldn't fetch data. ", error)
    }
  }


  useEffect(() => {
    fetchSubject()
  }, [id, subject])

  return (
    <div>SubjectView</div>
  )
}

export default SubjectView