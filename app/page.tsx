import Link from "next/link"

const Home = () => {

  return (
    <>
      <div>Главная</div>
      <Link href={'/catalog'}>каталог</Link>
    </>
  )
}

export default Home