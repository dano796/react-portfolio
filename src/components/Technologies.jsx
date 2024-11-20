import { animate, motion } from "framer-motion"
import { line } from "framer-motion/client"

const iconVariants = (duration) => ({
    initial: {y: -10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
})

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24   ">
        <motion.h2 
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y: -50}}
        transition={{duration: 1.5}}
        className="my-20 text-center text-4xl font-medium">Technologies</motion.h2>
        <motion.div 
        whileInView={{opacity: 1, x: 0}}
        initial={{opacity: 0, x: -100}}
        transition={{duration: 1.5}}
        className="flex flex-wrap items-center justify-center gap-4">
            <motion.div 
            variants={iconVariants(3.5)}
            initial="initial"
            animate="animate"
            className="p-4">
                <img src="https://cdn.jsdelivr.net/npm/devicon/icons/java/java-original.svg" className="w-16 h-16" />          
            </motion.div>
            <motion.div 
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className="p-4">
                <img src="https://cdn.jsdelivr.net/npm/devicon/icons/csharp/csharp-original.svg" className="w-16 h-16" />
            </motion.div>
            <motion.div 
            variants={iconVariants(3.5)}
            initial="initial"
            animate="animate"
            className="p-4">
                <img src="https://cdn.jsdelivr.net/npm/devicon/icons/python/python-original.svg" className="w-16 h-16" />
            </motion.div>
            <motion.div 
            variants={iconVariants(3.25)}
            initial="initial"
            animate="animate"
            className="p-4">
                <img src="https://cdn.jsdelivr.net/npm/devicon/icons/git/git-original.svg" className="w-16 h-16" />
            </motion.div>
            <motion.div 
            variants={iconVariants(4.25)}
            initial="initial"
            animate="animate"
            className="p-4">
                <img src="https://cdn.jsdelivr.net/npm/devicon/icons/microsoftsqlserver/microsoftsqlserver-original.svg" className="w-16 h-16" />
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies