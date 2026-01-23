'use client'
import { useParams } from "next/navigation"


const page = () => {
  const params = useParams()

  return (
    <div>{params.slug}</div>
  )
}

export default page