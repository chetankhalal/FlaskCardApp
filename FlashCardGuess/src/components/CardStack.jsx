import { motion, useMotionValue, useTransform } from 'motion/react'
import { useEffect, useState } from 'react'

function CardStack() {
    const data = [
        { id: 1, name: "chetan",color:"bg-black" },
        { id: 2, name: "sai", color: "bg-white" },
        { id: 3, name: "pramod", color: "bg-green-700" },
        { id: 4, name: "pratik", color: "bg-red-700" },
        { id: 5, name: "pratish", color: "bg-purple-700" }
    ]
    const [Cards, setCards] = useState(data)

    return (
        <div className='bg-pink-400 grid place-items-center h-screen'>
            {
                [...Cards].reverse().map((card) => {
                    return <Box key={card.id} Cards={Cards} setCards={setCards} {...card} />
                })
            }
        </div>
    )
}
function Box({ id, name, color, Cards, setCards }) {

    const x = useMotionValue(0)
    const opacity = useTransform(x, [-150, 0, 150], [0, 1, 0])
    const rotateRaw = useTransform(x, [-150, 150], [-18, 18])

    const isfront = id === Cards[0].id
    const rotate = useTransform(() => {
        const offset = isfront ? 0 : id % 2 ? 10 : -10
        return `${rotateRaw.get() + offset}deg`
    })

    const HandleDragEnd = () => {
        if (Math.abs(x.get()) > 50) {
            // deleting the first card
            setCards((Prev) => Prev.filter((e) => e.id !== id))
        }
        if(x.get() > 0){
            console.log(" right swipe")
        }
        if(x.get() <0){
            console.log("Left swipe")
        }
    }


    return (<motion.div drag="x"
        dragConstraints={{
            left: 0,
            right: 0
        }}
        animate={{
            scale:isfront ? 1.1:0.9
        }}
        onDragEnd={HandleDragEnd}
        className={`w-72 h-96 rounded-2xl ${color} origin-bottom hover:cursor-grab active:cursor-grabbing`}
        style={{
            gridRow: 1,
            gridColumn: 1,
            x,
            opacity,
            rotate
        }}>
        <h1 className="text-center text-white font-bold text-2xl"> {name} </h1>
    </motion.div>)
}
export default CardStack
