
import Feed from '@components/Feed';

// CSS styling with "_" means that it's from our own CSS file; "-" between the words is from Tailwind

const Home = () => {
return (
<div>
    
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            Karina Manley
            <br className="max-md:hidden" />
            <span className="blue_gradient text-center"> Real support for your hair</span>
        </h1>
        <p className="desc text-center">
        Discover the stylist of your dreams
        </p>
        <Feed/>
    </section>
    
</div>
)
}

export default Home