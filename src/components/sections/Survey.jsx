import { useEffect, useState } from 'react'
import { collection, getDocs, getDoc, doc } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";
import { db } from '../../firebase';

export default function Survey() {
    const [content, setContent] = useState(null)
    const [rulesArray, setRules] = useState(null)
    const [problemsFound, setProblems] = useState(null)
    const [loadingGejala, setLoadingGejala] = useState(true); // Add loading state for gejala
    const [loadingRules, setLoadingRules] = useState(true); // Add loading state for rules

    useEffect(() => {
        // Call both functions to fetch data
        getGejala();
        getRules();
    }, []); // Only run once when the component mounts

    const getGejala = async () => {
        const querySnapshot = await getDocs(collection(db, "gejala"));
        let docsData = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        setContent(docsData);
        setLoadingGejala(false); // Set loading to false when gejala data is fetched
    }

    const getRules = async () => {
        const querySnapshot = await getDocs(collection(db, "rules"));
        let docsData = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        setRules(docsData);
        setLoadingRules(false); // Set loading to false when rules data is fetched
    }

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the form from refreshing the page
        setProblems(null);
        const formData = new FormData(event.target); // Get form data
        const formResults = {};
        let finding = []
        for (let [key, value] of formData.entries()) {
            formResults[key] = value;
        }

        rulesArray.forEach(async rule => {
            let found = 0;
            const conditions = rule.gejala_conditions.split(" AND ");
            console.log(conditions)
            conditions.forEach(condition => {
                if (formResults[condition] === "ya") {
                    found += 1;
                }
            })
            console.log(rule.id)
            console.log(found)
            if (found === conditions.length) {
                const docRef = await getDoc(doc(db, "masalah", rule.masalah))
                finding.push({ id: docRef.id, nama: docRef.data().nama_masalah })
                setProblems(finding)
            }
        })

        console.log(formResults); // Print the form results to the console
    };

    if (loadingGejala || loadingRules) {
        return <div className='h-100 container d-flex justify-content-center p-lg-5'>
                 <div className="loader"></div> 
            </div>; // Show loading message until both are done
    }

    return (
        <div id="survey" className='my-5 container survey-section text-center d-flex flex-column content'>
            <form onSubmit={handleSubmit} id="surveyForm">
                {content ? content.map(doc => (
                    <div className="d-flex flex-column my-3" key={doc.id}>
                        <span>{doc.nama}</span>
                        <hr />
                        <div>
                            <input className='me-1' type="radio" name={doc.id} value="ya" id={"gejala_" + doc.id + "_ya"} />
                            <label className='me-3' htmlFor={"gejala_" + doc.id + "_ya"}>Yes</label>
                            <input className='me-1' type="radio" name={doc.id} value="tidak" id={"gejala_" + doc.id + "_tidak"} />
                            <label htmlFor={"gejala_" + doc.id + "_tidak"}>No</label>
                        </div>
                    </div>
                )) : ""}
                <button type="submit" className="btn btn-primary mt-4">Submit</button>
            </form>
            <div className="d-flex flex-column justify-content-center align-items-center">
                <span className="h3 my-3">Problems found: </span>
                {problemsFound ? problemsFound.map(problem => (
                    <div key={problem.id} className="my-3 problems-found p-4 px-5">
                        <span className='h4'>Masalah yang ditemukan: {problem.nama}</span>
                    </div>
                )) : "none yet"}
            </div>
        </div>
    );
}
