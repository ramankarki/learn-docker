import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

export default function Modal({ text, className: contentClassName, setLists }) {
  const [showModal, setShowModal] = useState(false)
  const router = useRouter()
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()

    if (router.pathname === '/') {
      axios
        .post(
          'http://localhost:5000',

          { body, title }
        )
        .then(({ data }) => {
          setLists((prev) => [data, ...prev])
          setShowModal(false)
          setTitle('')
          setBody('')
        })
        .catch(console.log)
    } else {
      setShowModal(false)
      setTitle('')
      setBody('')
      const anchorTag = document.createElement('a')
      anchorTag.target = '_blank'
      anchorTag.href = `https://github.com/ramankarki/learn-docker-frontend/issues/new?title=${title.replace(
        ' ',
        '+'
      )}&body=${body.replace(' ', '+')}`
      anchorTag.click()
    }
  }

  return (
    <>
      <button
        className='mx-auto mt-10 block w-[100%] border px-6 py-3 text-sm font-bold'
        type='button'
        onClick={() => setShowModal(true)}
      >
        {text || 'text props'}
      </button>
      {showModal ? (
        <>
          <div className='fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none'>
            {/*content*/}
            <div className={'relative max-w-xl ' + contentClassName}>
              {/* body */}
              <div>
                <form onSubmit={submitHandler}>
                  <label>
                    <p className='mb-1'>Title</p>
                    <input
                      className='w-full px-4 py-3 focus:bg-gray-600 focus:outline-none'
                      type='text'
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </label>
                  <label className='mt-5 block'>
                    <p className='mb-1'>Body</p>
                    <textarea
                      className='min-h-[120px] w-full px-4 py-3 focus:bg-gray-600 focus:outline-none'
                      value={body}
                      onChange={(e) => setBody(e.target.value)}
                    ></textarea>
                  </label>
                  <div className='flex'>
                    <button
                      type='submit'
                      className='ml-auto mt-4 block border py-2 px-4 font-bold'
                    >
                      {text}
                    </button>
                    <button
                      type='button'
                      className='ml-4 mt-4 block border py-2 px-4 font-bold'
                      onClick={() => setShowModal(false)}
                    >
                      CANCEL
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className='fixed inset-0 z-40 bg-black opacity-25'></div>
        </>
      ) : null}
    </>
  )
}
