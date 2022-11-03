import React from "react"
import Layout from "../../components/Layout/HomeLayout"
import Activities from "./components/Activities"
import BottomNav from "./components/BottomNav"
import Complain from "./components/Complain"
import Header from "./components/Header"

const Home = () => {
  return (
    <Layout>
      <Header />
      <Complain />
      <Activities />
      <BottomNav />
    </Layout>
  )
}

export default Home
