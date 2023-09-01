import React from 'react'
import { useGlobalContext } from './Context'

const Stories = () => {
  const { hits, isLoading, removePost } = useGlobalContext();

  if (isLoading) {
    return <>
      <h1 className='text-center font-bold text-5xl mt-8	mb-8	'>Loading...</h1>
    </>
  }
  return (
    <>
    <div className='stories-div w-full h-full '>
      {hits.map((curPost) => {
        const { title, author, objectID, url, num_comments } = curPost;
        return (
          <div className="card mb-12 max-w-2xl m-auto p-7 rounded " key={objectID}>
            <h2 className='font-bold text-lg'>{title}</h2>
            <p className='mt-4 mb-4 text-black'>By <span> {author} </span>  | <span> {num_comments} </span> Comments </p>
            <div className='card-btn flex items-center justify-between' >
              <a href={url} target='/blank' className='text-lime-600'> Read More</a>
              <a href="#" onClick={ () => removePost(objectID)} className='text-red-700'>Remove</a>
            </div>
          </div>
        )
      })}
      </div>
    </>
  )
}

export default Stories
