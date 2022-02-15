import axios from 'axios'
import React from 'react'

const randomUserAPI = () => {
  return axios.get('https://randomuser.me/api')
    .then(({data}) => {
        console.log(data)
        return JSON.stringify(data)
    })
    .catch(err => {
        console.error(err)
    })
  
}

export default randomUserAPI