import { useNavigate, useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { SpinnerLoading } from './SpinnerLoading';
import { useEffect, useState } from 'react';
import { Paginacion } from './Paginacion';
import { ProgressBar } from 'react-bootstrap';
import { app, auth } from "../firebase";
import { getFirestore, doc, collection, setDoc, getDoc, QuerySnapshot, getDocs } from "firebase/firestore";
import { Btn } from './Btn';




export const Lesson = () => {
  const { id } = useParams();

  const [isLoading, setisLoading] = useState(true)
  const navigate = useNavigate();

  const [lesson, setlesson] = useState([])
  const [lessons, setLessons] = useState([])
  const [count, setCount] = useState(1)
  const [progress, setProgress] = useState(0)

  const getInfo = async () => {
    const db = getFirestore(app);

    const docuRef = doc(db, `lecciones/${id}`);
    const docuCifrada = await getDoc(docuRef);
    const infoFinal = docuCifrada.data();
    const lecciones = infoFinal.lesson;
    setlesson( [...lecciones] );
    setisLoading(false);
  }

  useEffect(() => {
    getInfo();
  }, [])

  useEffect(() => {
    setLessons(lesson);
  }, [lesson])

  const onCount = () => {
    if (count < lessons.length) {
      setCount(count + 1)
    }
  }

  useEffect(() => {
    // console.log(lessons.length);
    const progressLesson = (100 / lessons.length);
    const progress1 = progressLesson * count;
    setProgress(progress1)
  }, [count,lessons])


  const onSubtract = () => {
    setCount(count - 1)
  }

  const finalizar = () => {
    navigate('/');
  }

  return (
    <>
      <ProgressBar className='m-4 mt-1' now={progress} label={`${progress}%`} />

      {

        isLoading ? <SpinnerLoading /> :
          <>
            <div>

              {
                lessons ?
                  lessons.map((lesson, index) => (
                    <div className={count == index + 1 ? 'd-block' : 'd-none'} key={index}>
                      <h1 className='text-center mt-5'> {lesson.subtitle} </h1>
                      <p className='p-4 mt-3'>{lesson.content}</p>
                      <img className=' d-block m-auto w-50 mt-3 mb-5' src={lesson.img} alt="" />
                    </div>
                  ))
                  :
                  <SpinnerLoading />
              }
              
              {
                count == lesson.length ? <div className='text-center mb-5' ><div className='d-inline-block' onClick={finalizar}>
                  <Btn onClick={finalizar} text='Finalizar' color='red' />
                  </div></div> : <Paginacion onCount={onCount} onSubtract={onSubtract} />
              }
            </div>
          </>
      }

    </>
  )
}
