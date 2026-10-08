import { motion, useMotionValue, useTransform } from 'motion/react'

function card(props) {

  const x = useMotionValue(0)
  const opacity = useTransform(x, [-150, 0, 150], [0, 1, 0])
  const rotate = useTransform(x, [-150, 150], [-18, 18])

  const isFront = props.identity === 0


  const HandleDragEnd = () => {
    if (Math.abs(x.get()) > 50) {
      // deleting the first card
      props.setCards((Prev) => Prev.filter((e) => e.id !== props.id))
    }
    if (x.get() > 0) {
      console.log(" right swipe")
    }
    if (x.get() < 0) {
      console.log("Left swipe")
    }
  }
  return (
    <motion.div drag="x"
      dragConstraints={{
        left: 0,
        right: 0
      }}
      animate={{
        scale: isFront ? 1.1 : 0.8,
      }}
      onDragEnd={HandleDragEnd}
      style={{
        gridRow: 1,
        gridColumn: 1,
        x,
        opacity,
        rotate,
        zIndex: 3 - props.identity
      }}
      className='w-xs md:w-sm h-full  bg-blue-400 flex flex-col justify-center items-center p-10 rounded-2xl hover:cursor-grab active:cursor-grabbing'>
      <div className='border-2 md:w-60 md:h-60 rounded-2xl overflow-hidden'>
        <img className='object-cover w-full h-full' src={props.image_url} alt={props.word} loading="lazy"
          draggable={false} />
      </div>
      <h1 className='my-3 font-bold text-4xl '> {props.word} </h1>
      <h1 className='my-3 font-bold text-xl '> {props.meaning} </h1>
    </motion.div>
  )
}

export default card
