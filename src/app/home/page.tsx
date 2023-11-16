import Link from "next/link";

const Home = () => {
    return (
        <>
        <Link href={"/test1"}><h1>Test1</h1></Link>
        <Link href={"/test2"}><h1>Test2</h1></Link>
        </>
    )
}
export default Home;