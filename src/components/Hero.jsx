import { HERO_CONTENT } from '../constants';
import profilePic from  '../assets/danielOrtizProfile.png';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col item-center lg:items-start">
                    <motion.h1 
                    whileInView={{opacity: 1, x: 0}}
                    initial={{opacity: 0, x: -100}}
                    transition={{duration: 1}}
                    className="pb-12 text-6xl tracking-tight lg:mt-12 lg:text-8xl font-medium">
                        Daniel Ortiz
                    </motion.h1>
                    <motion.span
                    whileInView={{opacity: 1, x: 0}}
                    initial={{opacity: 0, x: -100}}
                    transition={{duration: 1.25}}
                    className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 
                    bg-clip-text text-4xl tracking-tight text-transparent font-semibold">
                        Computer Science Student</motion.span>
                    <motion.p 
                    whileInView={{opacity: 1, x: 0}}
                    initial={{opacity: 0, x: -100}}
                    transition={{duration: 1.5}}
                    className="text-[17px] my-2 py-6 tracking-normal">
                        {HERO_CONTENT}
                    </motion.p>
                    <motion.a 
                        href="https://drive.google.com/file/d/1YfEtKCYTyscA13m6lkctGl6aF-JKtcs2/view?usp=sharing"
                        target="_blank" 
                        rel="noopener noreferrer"
                        whileInView={{opacity: 1, x: 0}}
                        initial={{opacity: 0, x: -100}}
                        transition={{duration: 1.75}}
                        className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500
                        text-white rounded-full px-6 py-3 text-[17px] tracking-wider font-semibold text-center 
                        p-4'>
                            View CV
                    </motion.a>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center">
                    <motion.img 
                    className='rounded-2xl w-4/5 mb-4 mt-10'
                    whileInView={{opacity: 1, x: 0}}
                    initial={{opacity: 0, x: 100}}
                    transition={{duration: 1}}
                    src={profilePic} alt="Daniel Ortiz" />
                </div>
            </div>
        </div>
    </div>
  );
};

export default Hero