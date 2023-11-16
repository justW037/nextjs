'use client'
import AppTable from "@/components/app.table";
import useSWR from "swr";

export default function Home() {
    const fetcher = (url: string) => fetch(url).then(res => res.json())
    const { data, error, isLoading } = useSWR(
        `https://fakestoreapi.com/products`,
        fetcher,
        {
            revalidateIfStale: false,
            revalidateOnFocus: false,
            revalidateOnReconnect: false
        });
    return (
        <>
        <h1>test page</h1>
        <AppTable products={data?.sort((a: any, b: any) => b.id - a.id) ?? []} />
        </>
        
    )
}