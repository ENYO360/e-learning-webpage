import React, { useState, useEffect } from "react"
import { auth, db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import {  Link } from 'react-router-dom';
import '../Css/UserDetails.css';

export default function UserDetails({ user }) {
    const handleLogout = () => {
        auth.signOut();
    };

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "formSubmissions"));
                const dataList = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setData(dataList);
            } catch (error) {
                console.log("Error fetchihng data", error);
            }
        };

        fetchData();
    }, []);

    return (
        <>  
            <div className="dashboard-wrapper">
                <h1>Hello {data.map((item) => <p key={item.id}>{JSON.stringify(item.username)}</p>)}</h1>
                <h2>Welcome to your Dashboard</h2>
                <p>More Info. coming soon!</p>
                <button onClick={handleLogout}>Logout</button> <br />
                <Link to='/'>Home</Link>
            </div>
        </>
    );
}