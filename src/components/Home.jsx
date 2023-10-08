import React, { useRef, useEffect, useState } from "react";
import { gsap,Elastic,Linear} from "gsap";
import { Draggable} from 'gsap/Draggable'
import one from '../assets/images/one.jpeg';
import two from '../assets/images/two.jpeg';
import three from '../assets/images/three.jpeg';
import four from '../assets/images/four.jpeg';
import five from '../assets/images/five.jpeg';;
import six from '../assets/images/six.jpeg';
import {motion} from 'framer-motion'
import { Navigate, useNavigate } from "react-router-dom";


let Home = ()=>{
    gsap.registerPlugin(Draggable)

    let drag = useRef(null)
    let container = useRef(null)
    let maindiv = useRef(null)
    let main = useRef(null)
    let title = useRef(null)
   const [mousePos,setmousePos]=useState({
    x:0,
    y:0,
   })
   let navi = useNavigate()
   const prechange= ()=>{
    gsap.to(maindiv.current,{
        backgroundColor:'black',
        duration:2,
    })
    gsap.to(title.current,{
        color:'white',
        duration:2,
    })
   }
   const change = ()=>{
    navi('/blogs')
   }

 

   const [curVar,setcurVar]=useState("default")

    const oneref = useRef(null);
    const tworef = useRef(null)
    const threeref = useRef(null)
    const fourref = useRef(null)
    const fiveref = useRef(null)
    const sixref = useRef(null)

  useEffect(() => {
    const mouseMove=e=>{
        setmousePos({
            x:e.clientX,
            y:e.clientY,
        })
    }

    Draggable.create(drag.current,{
        type:'x',
        bounds: container.current,
        onPress:()=>prechange(),
        onDragEnd: ()=>change(),
         ease:'power3.out'
    })

    window.addEventListener('mousemove',mouseMove)

    const handleClick = event => {
        const { offsetX, offsetY, target } = event;
        const { clientWidth, clientHeight } = target;
        const xPos = (offsetX/clientWidth) - 0.5;
        const yPos = (offsetY/clientHeight) - 0.5;
        const leftImages = [oneref.current,tworef.current,threeref.current]
        const rightImages = [fourref.current,fiveref.current,sixref.current]

        const modifier = (index) => index*1.2+0.5;

        leftImages.forEach((image, index) => {
                    gsap.to(image, {
                        duration: 1.2,
            x: xPos*20*modifier(index),
            y: yPos*30*modifier(index),
            rotationY: xPos*40,
            rotationX: yPos*10, 
            ease:'power3.out'
                    });
                });

          rightImages.forEach((image, index) => {
        gsap.to(image, {
            duration: 1.2,
            x: xPos*20*modifier(index),
            y: -yPos*30*modifier(index),
            rotationY: xPos*40,
            rotationX: yPos*10, 
            ease:'power3.out'
        });
    });
        
    };

    const element = [oneref.current,tworef.current,threeref.current,fourref.current,fiveref.current,sixref.current];
    element.forEach((e)=>{
        e.addEventListener('mousemove', handleClick);
    })

    return () => {
        element.forEach((e)=>{
            e.removeEventListener('mousemove', handleClick);
        })
      window.removeEventListener('mousemove',mouseMove)
    };
  }, []);

  const variants = {
    default:{
        x:mousePos.x-10,
        y:mousePos.y-10,
    },
    text:{
        x:mousePos.x-50,
        y:mousePos.y-50,
        height:130,
        width:130,
        backgroundColor:'rgb(217, 94, 224)',
        mixBlendMode:'color-burn'
    }
  }
  const textEnter = ()=>setcurVar("text")
  const textLeave=()=>setcurVar("default")

   
    return(
        <div ref={main} className="main">
     <div ref={maindiv} className="slider bg-white h-screen w-screen ">
             <div className="header__gallery">
                     <div className="hg__left">
                        <div ref={oneref} className="hg__image hg__image--l">
                            <img src={one} />
                        </div>
                         <div ref={tworef} className="hg__image hg__image--m">
                             <img src={two} />
                         </div>
                         <div ref={threeref} className="hg__image hg__image--s">
                             <img src={three} />
                         </div>
                     </div>
                     <div className="hg__right">
                         <div ref={fourref} className="hg__image hg__image--l">
                             <img src={four} />
                         </div>
                         <div ref={fiveref} className="hg__image hg__image--m">
                             <img src={five}/>
                         </div>
                         <div ref={sixref} className="hg__image hg__image--s">
                             <img src={six} />
                         </div>
                     </div>
                </div>
                <div>
                <div onMouseEnter={textEnter} onMouseLeave={textLeave} className="title z-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"><h1 ref={title}>Bloggin'IT</h1></div>
                <div ref={container} className="drag">
                    <div ref={drag} className="dragme">
                        <div className="dragmec"></div>
                    </div>
                    <div className="dragged"><div className="dragged1"></div></div>
                    
                </div>
                </div>
                <motion.div className="cursor" variants={variants} animate={curVar}/>
         </div>
         <div className="maindiv2 h-screen w-screen bg-green-200">

         </div>
         </div>
    )
}

export default Home