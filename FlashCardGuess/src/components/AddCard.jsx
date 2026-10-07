import React, { useState } from 'react'
import api from '../../api'

function AddCard(props) {

    const [WordName, setWordName] = useState('')
    const [Meaning, setMeaning] = useState('')
    const [ImageUrl, setImageUrl] = useState('')

    const onSubmitingData = async (e) => {
        e.preventDefault()
        const data = {
            word : WordName,
            meaning : Meaning,
            image_url : ImageUrl
        }
        try {
            const response = await api.post('/vocab',data)
            console.log(response.data)
            setWordName('')
            setMeaning('')
            setImageUrl('')
        } catch (error) {
            console.log("this error is Occur :",error)
        }
    }
  return (
      <div>
      <form onSubmit={ (e) => {
              onSubmitingData(e)
      } } className='absolute top-1/5 right-2/5 z-10 border-2 rounded-2xl border-white p-10 flex flex-col gap-3 items-center'>
        <h1 className='font-bold text-4xl'>Make a Flask Card </h1>
        <h1 className='text-2xl'> Word in Japanese</h1>
        <input onChange={(e) =>{
            setWordName(e.target.value)
            }
        } className='border-2 border-white outline-none rounded p-2 text-xl' type="text" value={WordName} />
        <h1 className='text-2xl'> Meaning </h1>
        <input onChange={(e) =>{
            setMeaning(e.target.value)
            }
        } className='border-2 border-white outline-none rounded p-2 text-xl' type="text" value={Meaning} />
        <h1 className='text-2xl'> Image Url </h1>
        <input onChange={(e) =>{
            setImageUrl(e.target.value)
            }
        } className='border-2 border-white outline-none rounded p-2 text-xl' type="text" value={ImageUrl} />
        <button className='cursor-pointer p-2 active:scale-95 text-2xl font-bold z-10 text-white border-white border-2 rounded-xl mt-5'>Add</button>
      </form>
          <div className='bg-black w-screen h-screen opacity-[0.9] z-0 absolute top-0' onClick={() => {
              props.setShowAddCard(false)
          }} ></div>
    </div>
  )
}

export default AddCard
