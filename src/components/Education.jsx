import { EDUCATION } from "../constants"
import { motion } from 'framer-motion'

const Education = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <motion.h2 
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y: -50}}
        transition={{duration: 1}}
        className="my-20 text-center text-4xl font-medium">Education</motion.h2>
        <div>
            {EDUCATION.map((education, index) => (
                <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                        <motion.div 
                        whileInView={{opacity: 1, x: 0}}
                        initial={{opacity: 0, x: -100}}
                        transition={{duration: 1.25}}
                        className="w-full lg:w-1/4">
                            <p className="mb-2 text-[14px] text-neutral-300">{education.year}</p>
                        </motion.div>
                        <motion.div 
                        whileInView={{opacity: 1, x: 0}}
                        initial={{opacity: 0, x: 100}}
                        transition={{duration: 1.5}}
                        className="w-full max-w-xl lg:w-3/4 text-[17px]">
                            <h6 className="mb-2 font-semibold">
                                {education.role} - {" "} 
                                <span className="text-purple-300">
                                    {education.company}
                                </span>
                            </h6>
                            <p className="mb-4 text-neutral-300 text-[17px]">{education.description}</p>
                        </motion.div>
                </div>
            ))}
        </div>
    </div>
  )
}

/*
{education.technologies.map((tech, index) => (
    <span key={index} className="mr-2 mt-4 rounded bg-neutral-900
        px-2 py-1 text-sm font-medium text-purple-700">{tech}</span>
))}
*/

export default Education