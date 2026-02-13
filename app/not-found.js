import Link from 'next/link'

export default function NotFound() {
  return (
    <div>
      Такой страницы нет
      Возможно, вы воспользовались недействительной ссылкой или страница была удалена. Проверьте URL-адрес или перейдите на главную страницу, там вас ожидают лучшие фильмы и сериалы.
      <Link href="/">Return Home</Link>
    </div>
  )
}