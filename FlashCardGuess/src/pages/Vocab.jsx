import { useState } from "react"
import AddCard from "../components/AddCard"
import Card from "../components/Card"
import { ChevronLeft , ChevronRight,} from 'lucide-react'
import api from '../../api'


function Vocab() {
  const Get_data = async () =>{
    const response = await api.get('/vocab')
    return response.data
  }

  const data = [
    { id: 1, Word : "Watashi", meaning : "I or Me ", image_url: "https://images.alphacoders.com/932/thumb-1920-932313.jpg" },
    { id: 2, Word: "kudashi", meaning: "I or Me ", image_url: "https://images.alphacoders.com/932/thumb-1920-932313.jpg" },
    { id: 3, Word: "ogeri", meaning: "I or Me ", image_url: "https://images.alphacoders.com/932/thumb-1920-932313.jpg" },
    { id: 4, Word: "yorusa ku da", meaning: "I or Me ", image_url: "https://images.alphacoders.com/932/thumb-1920-932313.jpg" },
  ]

  const [ShowAddCard, setShowAddCard] = useState(false)
  const [ShowArrowSignLeft, setShowArrowSignLeft] = useState(false)
  const [ShowArrowSignRight, setShowArrowSignRight] = useState(false)
  const [Cards, setCards] = useState(data)
  

  return (
    <div className='text-white pt-10'>
      <h1 className='md:text-7xl text-2xl text-white font-bold text-center mb-5'> Flash Card For Vocabary </h1>
      <button className="bg-green-500 rounded-2xl p-3 font-bold cursor-pointer active:scale-95 hidden md:block absolute top-16 right-10" onClick={async () => {
        // setShowAddCard(true)
        const raw =  await Get_data()
        console.log(raw)
      }}> Add Word </button>
      <div className="grid grid-cols-3 gap-0">
        <div className="hover:bg-gray-600 opacity-[0.4] hidden md:block" onMouseEnter={() => {
          setShowArrowSignLeft(true)
        }} onMouseLeave={() => {
          setShowArrowSignLeft(false)
        }}>
          <div className="relative">{ShowArrowSignLeft && <ChevronLeft className="absolute right-0 top-30" size={200} strokeWidth={3} />}</div>
        </div>
        
        <div className='bg-white w-screen md:w-auto p-10 grid place-items-center'>
          {
            [...Cards].reverse().map((card) => {
              return <Card key={card.id} Cards={Cards} setCards={setCards} {...card} />
            })
          }
        </div>

        <div className="hover:bg-gray-600 opacity-[0.4] hidden md:block" onMouseEnter={() => {
          setShowArrowSignRight(true)
        }} onMouseLeave={() => {
          setShowArrowSignRight(false)
        }}>
          <div className="relative">{ShowArrowSignRight && <ChevronRight className="absolute left-0 top-30" size={200} strokeWidth={3} />}</div>
        </div>
      </div>
      {ShowAddCard && <AddCard setShowAddCard={setShowAddCard} />}
    </div>
  )
}

export default Vocab
