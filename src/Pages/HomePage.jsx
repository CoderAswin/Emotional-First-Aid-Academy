import React from 'react'
import Navbar from '../Components/Navbar'
import CategoryList from '../Components/CategoryList'
import Topics from '../Components/Topics'
import FooterHomepage from '../Components/FooterHomepage'

const HomePage = () => {
  return (
    <div>
        <Navbar/>
        <CategoryList/>
        <Topics/>
        <FooterHomepage/>
    </div>
  )
}

export default HomePage