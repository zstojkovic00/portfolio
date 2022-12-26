import React, { useState, useEffect} from 'react';
import LogoTitle from '../../assets/images/logo-s.png';
import AnimatedLetters from '../AnimatedLetters/Index';
import './index.scss'
import MyPicture from '../../assets/images/profilnaslika1.png';


const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['e','l','j','k','o',""]
    const jobArray1 = ['s','t','u','d','e','n','t']
    const jobArray2 = ['o','f','','s','o','f','t','w','a','r','e','','e','n','g','i','n','e','e','r','i','n','g','.']


    useEffect(() => {

        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)

        return () => {
            clearTimeout(timeoutId)
        }
    }, [])


    return (


        <div className="container home-page">


            <div class="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={letterClass}>i,</span>
                    <br />
                    <span className={letterClass}>I</span>
                    <span className={letterClass}>'m</span>
                    <img src={LogoTitle} alt = "developer" />
                    <AnimatedLetters letterClass={letterClass} strArray={nameArray}  idx={15}/>

                    <AnimatedLetters letterClass={letterClass} strArray={jobArray1}  idx={15}/>
                    <br />

                    <AnimatedLetters letterClass={letterClass} strArray={jobArray2}  idx={13}/>

                </h1>
                <br/>

                <h2 > Software and churches are much the same - <br/>first we build them, then we pray.   </h2>

                <a
                    href= "https://drive.google.com/file/d/1u0cXsNos5ZFZl0gG3IjF1OcElRFkARQn/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                >
                    <button>Resume</button>
                </a>




            </div>

            <img className="image-container" src={MyPicture} alt = "Me" />



        </div>



    );





}



export default Home
