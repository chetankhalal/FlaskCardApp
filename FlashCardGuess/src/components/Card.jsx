import { motion, useMotionValue, useTransform } from 'motion/react'

function card(props) {

  const x = useMotionValue(0)
  const opacity = useTransform(x, [-150, 0, 150], [0, 1, 0])
  const rotateRaw = useTransform(x, [-150, 150], [-18, 18])

  const isfront = props.id === props.Cards[0].id
  const rotate = useTransform(() => {
    const offset = isfront ? 0 : props.id % 2 ? 10 : -10
    return `${rotateRaw.get() + offset}deg`
  })

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
        scale: isfront ? 1.01 : 0.9
      }}
      onDragEnd={HandleDragEnd}
      style={{
        gridRow: 1,
        gridColumn: 1,
        x,
        opacity,
        rotate
      }} 
      className='w-xs md:w-sm h-full  bg-blue-400 flex flex-col justify-center items-center p-10 rounded-2xl hover:cursor-grab active:cursor-grabbing'>
      <div className='border-2 md:w-60 md:h-60 rounded-2xl overflow-hidden'>
        <img className='object-cover w-full h-full' src={props.image_url} alt="college" />
      </div>
      <h1 className='my-5 font-bold text-2xl '> {props.Word} </h1>
      <h1 className='my-5 font-bold text-xl '> {props.meaning} </h1>
      <h1> hello </h1>
    </motion.div>
  )
}

export default card
