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


// Just spent the last 2 hours breaking stuff 
// reverted back to yesterdays code 
// HIGH PRIORITY get this data fetched & render to the PAGE 
// map thru object & display specified code 