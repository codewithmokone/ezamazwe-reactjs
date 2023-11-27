// import React, { useEffect, useState } from 'react'
// import { db } from '../firebase';
// import { collection, doc, getDoc, getDocs, where } from 'firebase/firestore';
// import { useParams } from 'react-router-dom';
// import { query } from 'express';

// function ViewSubject() {

//   const { id, subject } = useParams()
//   const [selectedSubject, setSelectedSubject] = useState({})

//   useEffect(() => {
//     const fetchGrades = async () => {

//       // try {
//       //   const docRef = doc(db, 'Courses');
//       //   const docSnapshot = await getDoc(docRef);

//       //   const gradeData = docSnapshot.data();
//       //   console.log("Subjects: ", gradeData)

//       //   if (docSnapshot.exists()) {
//       //     const gradeData = docSnapshot.data();
//       //     console.log("Subjects: ", gradeData)
//       //     const subjectForGrade = gradeData.subject && gradeData.subject[subject];

//       //     if (subjectForGrade) {
//       //       setSelectedSubject(subjectForGrade);
//       //     } else {
//       //       setSelectedSubject({});
//       //     }
//       //   } else {
//       //     console.log('No such document exists!');
//       //   }

//       // } catch (error) {
//       //   console.error('Error fetching document:', error);
//       // }

//       // try {
//       //   const subjectsCollectionRef = collection(db, 'Courses'); // Replace 'Subjects' with your collection name
//       //   const q = query(subjectsCollectionRef, where('caterogyTopic', '==', subject));

//       //   const querySnapshot = await getDoc(q);

//       //   if (querySnapshot) {
//       //     querySnapshot.forEach((doc) => {
//       //       console.log('Subject: ', doc.data());
//       //       setSelectedSubject(doc.data());
//       //     });
//       //   } else {
//       //     console.log('No matching documents.');
//       //     setSelectedSubject({});
//       //   }
//       // } catch (error) {
//       //   console.error('Error fetching documents:', error);
//       // }

//     };

//     fetchGrades();
//   }, [id,subject]);

//   return (
//     <div>
//     <h1>Course Details</h1>
//     {selectedSubject && (
//       <div>
//         <h2>{selectedSubject.courseName}</h2>
//         <p>Category: {selectedSubject.courseCategory}</p>
//         <p>Grade: {selectedSubject.categoryGrade}</p>
//         <p>Type: {selectedSubject.categoryType}</p>
//         <p>Price: {selectedSubject.CoursePrice}</p>
//         <p>Description: {selectedSubject.fullDescription}</p>
//       </div>
//     )}
//   </div>
//   )
// }

// export default ViewSubject