import React from 'react'
import { useFetch } from '../hooks/useFetch'
import { Lessons } from './Lessons';
import { SpinnerLoading } from './SpinnerLoading';
import { app, auth } from "../firebase";
import { getFirestore, doc, collection, setDoc, getDoc, QuerySnapshot, getDocs } from "firebase/firestore";
import { useState } from 'react';
import { useEffect } from 'react';
import { getDatabase, ref, child, get, set } from "firebase/database";
import "firebase/firestore";
import { db } from '../firebase/config';


export const ContainerLessons = () => {
    const url = 'http://localhost:3000/lecciones';
    // const { data, isLoading } = useFetch(url);
    const [data, setData] = useState([]);
    // const data = [];
    const [isLoading, setIsLoading] = useState(true)

    // const obtenerLecciones = async () => {
    //     const dbRef = ref(getDatabase());
    //     get(child(dbRef, `lecciones/`)).then((snapshot) => {
    //         console.log(snapshot)
    //         if (snapshot.exists()) {
    //             console.log(snapshot.val());
    //         } else {
    //             console.log("No data available");
    //         }
    //     }).catch((error) => {
    //         console.error(error);
    //     });
    // }

    const obtenerLecciones = async () => {
        const datos =  await getDocs(collection(db, 'lecciones'));
        const docs = [];

        datos.forEach((doc) => {
            docs.push( {...doc.data(), id: doc.id} );
        })
        
        setData( [...docs] )
        setIsLoading(false)
    }


    useEffect(() => {
        obtenerLecciones();
    }, [])
    
    console.log(data)

    return (
        <section className='container mt-5 mb-5'>
            <h1 className='text-center mt-5 mb-3'>Lecciones disponibles en HelperMath</h1>
            <div className='row row-cols-1 row-cols-md-2 g-4'>
                {
                    isLoading
                    ?
                    <SpinnerLoading/>
                    :
                    data.map( (lesson) => <Lessons data={lesson} key={lesson.id} /> )
                }
            </div>
        </section>
    )
}
