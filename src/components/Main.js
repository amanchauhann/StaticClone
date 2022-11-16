import React from 'react'
import { Feature } from './Feature/Feature'
import { Footer } from './Footer/Footer'
import Nav from './Nav/Nav'
import { ProductSection } from './ProductSection/ProductSection'
import { Slogan } from './Slogan/Slogan'

function Main() {
  return (
    <>
    <Nav />
    <Slogan />
    <Feature />
    <ProductSection />
    <Footer />
    </>
  )
}

export default Main