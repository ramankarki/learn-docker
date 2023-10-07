import Head from 'next/head'
import { useEffect, useState } from 'react'
import axios from 'axios'

import Header from '../layout/Header'
import Modal from '../layout/Modal'

export default function Home() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:5000')
      .then(({ data }) => setPosts(data))
      .catch(console.log)
  }, [])

  return (
    <div className='mx-auto w-[90%] max-w-[800px]'>
      <Header />
      <div
        className='mx-auto mt-10 border-l-4 border-orange-700 bg-orange-900 p-4 leading-7 text-white'
        role='alert'
      >
        <p className='mb-2 font-bold'>Disclamer</p>
        <p>
          This project is built using Next.js, Express, MongoDB, and hosted on
          Digital Ocean in trial period. Anything you post will likely be
          removed anytime. This project was built just to experiment zero
          downtime deployment.
        </p>
      </div>
      <Modal
        text='CREATE POST'
        className='w-full max-w-lg border border-gray-500 bg-black p-6'
        setLists={setPosts}
      />
      <div className='mx-auto my-10 '>
        <h2 className='text-3xl font-bold'>Posts (Client Side)</h2>
        {posts.map((post) => (
          <div key={post._id} className='mt-6 bg-gray-900 p-8'>
            <h3 className='mb-2 text-lg font-bold'>{post.title}</h3>
            <p className=''>{post.body}</p>
            <p className='mt-3 text-sm opacity-80'>
              {new Date(post.createdAt).toLocaleTimeString()},{' '}
              {new Date(post.createdAt).toDateString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
