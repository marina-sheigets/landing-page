import { useEffect } from "react"
import "./menu.css"
const  Menu =()=>{

    
  useEffect(()=>{

    window.addEventListener("scroll",()=>{
      const components=document.querySelectorAll(".container");
      const menuItems=document.querySelector(".menu-list").childNodes
      let current='';

      components.forEach((component)=>{
        const sectionTop=component.offsetTop
        if(window.scrollY>=sectionTop-150)
        {
          current=component.getAttribute("id");
        }
      })

      menuItems.forEach(li=>{
        li.classList.remove("active")
        if(li.classList.contains(current)){
          li.classList.add('active');
        }
      })
    })
  },[])

    return (
        <div className="container menu">
        <div className="img">
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2c/OneWeb_Logo.png" alt="logo" width="120" />
        </div>
        <nav className="menu-list">
                <a className="home" href="#home"><span>Home</span></a>
                <a className="about" href="#about">About</a>
                <a className="charter" href="#charter">Charter</a>
                <a className="reviews" href="#reviews">Reviews</a>
                <a className="books" href="#books">Books</a>
                <a className="author" href="#author">Author</a>
                <a className="contact" href="#contact">Contact</a>
            </nav> 
        </div>
    )
}

export default Menu