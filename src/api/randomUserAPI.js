import axios from 'axios'
import React from 'react'

const randomUserAPI = () => {
  return axios.get('https://randomuser.me/api')
    .then(res => {
        console.log(res)
        return res
    })
    .catch(err => {
        console.error(err)
    })
  
}

export default randomUserAPI