'use client'
import axios from "axios"
import { useEffect, useState } from "react"

const api = process.env.NEXT_PUBLIC_API_URL
interface Data {
  id: string | number
  title: string
  description: string
  year?: number
  createdAt?: Date

}

const Home = () => {
  const [data, setData] = useState<Data[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get<Data[]>(`${api}/movies/allMovies`)
        setData(res.data)
      } catch (err) {
        console.error(err)
      }
    }

    fetchData()
  }, [])

  return (
    <div>{data?.map((item => (
      <div key={item.id}>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <small>{item.year}</small>
      </div>
    )))}</div>
  )
}

export default Home