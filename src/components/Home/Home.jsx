import "./home.style.css";
import { motion } from 'framer-motion'
import React from "react";
import About from "../About/About";
import Service from "../Service/Service";
import Trainer from "../Trainer/Trainer";
import Plan from "../Plan/Plan";

export default function Home() {

  const containerVariants = {
    hidden: {
      x: '-100vw'
    },
    visible: {
      x: 0,
      transition: {
        type: "tween",
        delay: 1.5
      }
    }

  }

  return (
    <>
      <section className="home" id="Home">
        <div>
          <div>
            <motion.h1
              // initial={{ x: '-100vw' }}
              // animate={{ x: 0 }}
              // transition={{
              //   type: "tween",
              //   delay:1.5
              //   }}
              variants={containerVariants}
              initial= 'hidden'
              animate= 'visible'
              
            >
              it's never too easy but
              <br /> you have to try
            </motion.h1>
            <motion.div className="btn" type="button"
              initial={{ x: '-100vw' }}
              animate={{ x: 0 }}
              transition={{
                type: "tween",
                delay:2
                
              }}
              whileHover={{
                scale: 1.1,
                boxShadow:'0px 0px 20px rgba(255,255,255,0.5)'
              }}
              
            >
              get started
            </motion.div>
          </div>
        </div>
      </section>
      <About />
      <Service />
      <Trainer />
      <Plan />



    </>
  );
}
