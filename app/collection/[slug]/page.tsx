import { Catalog } from "@/app/types/catalog"
import axios from "axios"
import Loading from "./loading"
import ExpandableText from "./components/ExpandableText"
import FilterBar from "./components/FilterBar"
import CollectionCard from "./components/CollectionCard"

const api = process.env.NEXT_PUBLIC_API_URL

const Page = async ({ params }: { params: { slug: string } }) => {
  let catalog: Catalog | null = null
  const { slug } = await params;

  try {
    const res = await axios.get<Catalog>(`${api}/catalog/${slug}`)
    catalog = res.data
  } catch (err) {
    console.error(err)
  }

  if (!catalog) {
    return <Loading />
  }

  return (
    <>
      {catalog ? (
        <>
          <ExpandableText catalog={catalog} />
          <FilterBar />
          <h1 className="pl-3 text-lg font-medium">Рекомендации</h1>
          <div className="flex gap-4 mt-1 pl-3 overflow-x-auto">
            {catalog.content?.slice(0, 16).map(item => (
              <CollectionCard item={item} />
            ))}
          </div>
        </>
      ) : (
        <Loading />
      )}
    </>
  )
}

export default Page