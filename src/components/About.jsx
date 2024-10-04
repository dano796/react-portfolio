import { MdOpacity } from 'react-icons/md'
import aboutImg from '../assets/aboutAnimation.svg'
import { ABOUT_TEXT } from '../constants'
import { motion } from 'framer-motion'
import { svg } from 'framer-motion/client'

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <motion.h2 
            whileInView={{opacity: 1, y: 0}}
            initial={{opacity: 0, y: -50}}
            transition={{duration: 1.5}}
            className="my-20 text-center text-4xl font-medium">About 
            <motion.span 
                whileInView={{opacity: 1, y: 0}}
                initial={{opacity: 0, y: -50}}
                transition={{duration: 1.5}}
                className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 
                bg-clip-text tracking-tight text-transparent font-semibold"> Me</motion.span>
        </motion.h2>
        
        <div className="flex flex-wrap">
            <motion.div
            whileInView={{opacity: 1, x: 0}}
            initial={{opacity: 0, x: -100}}
            transition={{duration: 1.5}}
            className="w-full lg:w-1/2 lg:p-8">
                <div className="flex item-center justify-center">
                    <img className="rounded-2xl w-4/5 -my-16 pb-12" src={aboutImg} alt="about" />
                </div>
            </motion.div>
            <motion.div 
            whileInView={{opacity: 1, x: 0}}
            initial={{opacity: 0, x: 150}}
            transition={{duration: 1.5}}
            className="w-full lg:w-1/2">
                <div className="flex justify-center lg:justify-start text-[17px]">
                    <p className="my-2 max-w-xl py-6 tracking-normal">{ABOUT_TEXT}</p>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default About