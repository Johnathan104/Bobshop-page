import { useState, useEffect } from 'react'
import Nav from './static/Nav'
import "./js/animate.js"
import "./js/add.js"
import "./js/scripts.js"
import "./js/update.js"
import Hero from './components/sections/Hero'
import Login from './components/sections/Login'
import { auth, db } from './firebase.js'
import Survey from './components/sections/Survey.jsx'
import {  setDoc, getDoc, doc } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";
import Contact from './components/sections/Contact.jsx'
import About from './components/sections/About.jsx'
function App() {
  const problems = [
    {'kode_masalah': 'M001', 'nama_masalah': 'Overheating'},
    {'kode_masalah': 'M002', 'nama_masalah': 'Masalah Power Supply'},
    {'kode_masalah': 'M003', 'nama_masalah': 'Masalah Kinerja Umum'},
    {'kode_masalah': 'M004', 'nama_masalah': 'Performa Gaming Buruk'},
    {'kode_masalah': 'M005', 'nama_masalah': 'Masalah Kipas'},
    {'kode_masalah': 'M006', 'nama_masalah': 'Kerusakan Motherboard'},
    {'kode_masalah': 'M007', 'nama_masalah': 'Masalah Baterai'},
    {'kode_masalah': 'M008', 'nama_masalah': 'Masalah Periferal'},
    {'kode_masalah': 'M009', 'nama_masalah': 'Masalah Grafik'},
    {'kode_masalah': 'M010', 'nama_masalah': 'Sistem Tidak Stabil'},
    {'kode_masalah': 'M011', 'nama_masalah': 'te'},
    {'kode_masalah': 'M012', 'nama_masalah': 'coba lg'}]
  const rules = [
    { id: "R001", gejala_conditions: "G001 AND G007 AND G008", masalah: "M001" },
    { id: "R002", gejala_conditions: "G005 AND G006", masalah: "M002" },
    { id: "R003", gejala_conditions: "G001 AND G002 AND G003", masalah: "M003" },
    { id: "R004", gejala_conditions: "G002 AND G004 AND G009", masalah: "M004" },
    { id: "R005", gejala_conditions: "G003 AND G010", masalah: "M005" },
    { id: "R006", gejala_conditions: "G009 AND G011 AND G012", masalah: "M006" },
    { id: "R007", gejala_conditions: "G013 AND G014 AND G015", masalah: "M008" },
    { id: "R008", gejala_conditions: "G009 AND G010", masalah: "M007" },
    { id: "R009", gejala_conditions: "G005 AND G007 AND G010", masalah: "M010" },
    { id: "R010", gejala_conditions: "G001 AND G004", masalah: "M009" },
    { id: "R012", gejala_conditions: "G002 AND G005", masalah: "M001" }
];
  const [uid, setUid] = useState(null);
  const fillRules = async()=>{
    console.log("fill rules ran")
    rules.forEach(async (rule)=>{
      const docQuery = await getDoc(doc(db, "rules", rule.id));
      if (docQuery.exists()) {
        console.log(`Rule with ID ${rule.id} already exists.`);
      } else {
        const docRef = await setDoc(doc(db, "rules", rule.id), {
          gejala_conditions: rule.gejala_conditions,
          masalah: rule.masalah,
        });
        console.log(`Rule with ID ${docRef.id} added successfully.`);
      }
    })
  }
  const fillMasalah = async () => {
    console.log("fill masalah ran");
    problems.forEach(async (item) => {
      const docQuery = await getDoc(doc(db, "masalah", item.kode_masalah));
      if (docQuery.exists()) {
        console.log(`Masalah with ID ${item.kode_masalah} already exists.`);
      } else {
        const docRef = await setDoc(doc(db, "masalah", item.kode_masalah), {
          nama_masalah: item.nama_masalah,
        });
        console.log(`Masalah with ID ${docRef.id} added successfully.`);
      }
    });
  };
  
  useEffect( () => {
    fillMasalah()
    fillRules()
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in
        setUid(user.uid);
        console.log(uid)
      } else {
        // User is signed out
        setUid(null);
      }
     

    });
    return () => unsubscribe(); // Cleanup subscription on unmount
  });
  return (
    <>
      <Nav uid= {uid}/>
      {!uid ?
      <>
        <Hero/>
        <Login/>
      </>:
      <>
        <Hero/>
        <About/>
        <Survey/>
        <Contact/>
      </>
      }
      
    </>
  )
}

export default App
