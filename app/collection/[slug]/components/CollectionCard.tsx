import { Content } from "@/app/types/catalog"
import Image from "next/image"
import Link from "next/link"

const CollectionCard = ({ item }: { item: Content }) => {
    return (
        <div key={item.id} className="w-50 shrink-0" >
            <div className="relative aspect-video w-full">
                <Link href={`/movie/${item.slug}`}><Image
                    src={`https://img.youtube.com/vi/${item.youtubeId}/maxresdefault.jpg`}
                    alt={item.title}
                    fill
                    className="rounded-xl object-cover"
                /></Link>
            </div>
        </div>
    )
}

export default CollectionCard