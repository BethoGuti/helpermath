import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch"
import { Btn } from "./Btn";
import { Footer } from "./Footer";
import { SpinnerLoading } from "./SpinnerLoading";
import { app, auth } from "../firebase";
import { getFirestore, doc, collection, setDoc, getDoc, QuerySnapshot, getDocs } from "firebase/firestore";




export const DetailsLessons = () => {
    const { id } = useParams();
    // const url = `http://localhost:3000/lecciones/${id}`;
    // const { data, isLoading } = useFetch(url);
    const [isLoading, setisLoading] = useState(true)
    const [data, setdata] = useState({})
    
    const getInfo = async () => {
        const db = getFirestore(app);

        const docuRef = doc(db, `lecciones/${id}`);
        const docuCifrada = await getDoc(docuRef);
        const infoFinal = docuCifrada.data();
        setdata( {...infoFinal} );
        setisLoading(false);
    }

    useEffect(() => {
        getInfo();
    }, [])
    

    return (
        <>
            {/* <Nav color="black" /> */}
            <section className="p-4">
                {
                    isLoading
                        ?
                        <SpinnerLoading />
                        :
                        (<>
                            <h1 className="text-center">{data.Title}</h1>
                            <p className="text-center">{data.description}</p>
                            <img src={data.img} alt="" className="w-50 d-block m-auto" />
                            {
                                data.video ?
                                <div className="text-center">
                                    <a href={data.video} className="link-success" target={"_blank"}>Recursos adicionales</a>
                                </div>
                                : ''
                            }
                            <div className="text-center mb-5">
                                <Link to={`/lesson/${id}`}>
                                    <Btn text="Iniciar" color="red" />
                                </Link>
                            </div>
                        </>)
                }
            </section>
            <Footer />
        </>
    )
}
