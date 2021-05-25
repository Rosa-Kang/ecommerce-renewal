import React from 'react'
import Nav from '../components/Nav/Nav';
import Hero from '../components/Hero/Hero';
import Footer from '../components/Footer/Footer';
import Categories from '../components/Categories/Categories';
import Collection from '../components/Collections/Collection';

function Home() {
    return (
        <div>
        <Nav />
        <Hero />
        <Categories />
        <Collection />
        <Footer />
        </div>
    )
}

export default Home
