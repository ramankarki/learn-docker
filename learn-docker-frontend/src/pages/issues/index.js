import { useEffect, useState } from 'react'
import axios from 'axios'
import Header from '../../layout/Header'
import Modal from '../../layout/Modal'

export default function CreateIssue({ data: issues }) {
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
          Digital Ocean in trial period. It uses GitHub API to create issues and
          can be viewed them in{' '}
          <a
            href='https://github.com/ramankarki/learn-docker-frontend/issues'
            target='_blank'
            rel='noreferrer'
            className='underline'
          >
            this repository
          </a>
          . GitHub workflow is triggered by creating issue which leads to
          re-deployment. This project was built just to experiment zero downtime
          deployment.
        </p>
      </div>
      <Modal
        text='CREATE ISSUE'
        className='w-full max-w-lg border border-gray-500 bg-black p-6'
      />
      <div className='mx-auto my-10'>
        <h2 className='text-3xl font-bold'>Issues (Build Time)</h2>
        {issues.map((issue) => (
          <div key={issue._id || issue.id} className='mt-6 bg-gray-900 p-8'>
            <h3 className='mb-2 text-lg font-bold'>{issue.title}</h3>
            <p className=''>{issue.body}</p>
            <p className='mt-3 text-sm opacity-80'>
              {new Date(
                issue.createdAt || issue.created_at
              ).toLocaleTimeString()}
              , {new Date(issue.createdAt || issue.created_at).toDateString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const { data } = await axios.get(
    'https://api.github.com/repos/ramankarki/learn-docker-frontend/issues'
  )
  return { props: { data } }
}
