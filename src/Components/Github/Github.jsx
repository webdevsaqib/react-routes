import React from 'react'
import { json, useLoaderData } from 'react-router-dom'




function Github() {
    const data = useLoaderData()
  return (
    <div>
        <h1 className=' text-3xl p-10 text-center'>Github Name: {data.name}</h1>
        <img className='w-[100px] mx-auto' src={data.avatar_url} alt="github avatar" />
    </div>
  )
}

export default Github

export const githubinfoLoader = async() => {
    const response = await
    fetch('https://api.github.com/users/webdevsaqib')
    return response.json()
}

