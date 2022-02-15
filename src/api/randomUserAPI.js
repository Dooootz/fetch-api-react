import axios from 'axios'

const randomUserAPI = () => {
  return axios.get('https://randomuser.me/api')
    .then(({data}) => {
        console.log(data)
        return data
    })
    .catch(err => {
        console.error(err)
    })
  
}

export default randomUserAPI