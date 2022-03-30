import React from "react"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import MovieList from "../components/MovieList"
import "../assets/css/main.css"
import "normalize.css"

export default function Home() {
  return (
    <div className="content">
      <Navbar />
      <Hero />
      <MovieList />
    </div>
  )
}
