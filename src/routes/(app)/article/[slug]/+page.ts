import axios from 'axios'
export const load = async({ params }) => {

    const resp = await axios.post('http://127.0.0.1:5000/getnewsspecific',
    {
        id:params.slug
  })
  const data = resp.data
  console.log(data)
  return {data}
}