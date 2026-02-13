import axios from "axios";
import Link from "next/link";
import Card from "../components/Card";
import CatalogWrapper from "./components/CatalogWrapper";
import { Catalog } from "../types/catalog";

const api = process.env.NEXT_PUBLIC_API_URL;


const Page = async () => {
    let catalog: Catalog[] = [];

    try {
        const res = await axios.get<Catalog[]>(`${api}/catalog`);
        catalog = res.data;
    } catch (err) {
        console.error("Ошибка при загрузке каталога:", err);
    }

    return (
        <div className="flex relative justify-center h-auto">
            <CatalogWrapper>
                {catalog.map((item) => (
                    <Link key={item.id || item.slug} href={`/collection/${item.slug}`}>
                        <Card {...item} />
                    </Link>
                ))}
            </CatalogWrapper>
        </div>
    );
};

export default Page;