import React from 'react'
import "./about.css"
const About=()=>{
    return (
      <div id="about" className="container about">
            <div className="about-img">
                <img src="https://img.freepik.com/free-vector/stack-books-graphic-illustration_53876-8852.jpg?t=st=1655310479~exp=1655311079~hmac=72e422fb06520fb9463e469383f745f35ef73a3435980ca1cb8dd449fdd0030b&w=740" alt="books with flowers img"/>
            </div>
            <div className="about-text">
                <h2>About The Book</h2>
                <p>A small river named Duden flows by their place 
                    and supplies it with the necessary regelialia. 
                    It is a paradisematic country, in which roasted 
                    parts of sentences fly into your mouth.</p>
                <h3>Award achievements</h3>
                <p>Far far away, behind the word mountains, far from
                 the countries Vokalia and Consonantia, there live
                  the blind texts. Separated they live in Bookmarksgrove 
                  right at the coast of the Semantics, a large language ocean.
                </p>
                <h3>Read On Any Devices</h3>
                <p>Separated they live in Bookmarksgrove right at the coast 
                    of the Semantics, a large language ocean.
               </p>
            </div>
      </div>
    )
}


export default About