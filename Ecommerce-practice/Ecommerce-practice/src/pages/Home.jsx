import Hero from "../combonents/Hero.jsx"
import Categories from "../combonents/Categories.jsx"

export default function Home() {
    return (
        <>
            <Hero />
            <Categories available={true} />
        </>
    )
}
