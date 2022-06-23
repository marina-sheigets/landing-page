import React, { useState,useRef,useEffect }  from 'react'
import data from "./CharterDataArray"
import CharterItem from './CharterItem'
import "./charter.css"
const Charter=()=> {



  useEffect(()=>{

    window.addEventListener("scroll",()=>{
      const sections=document.querySelector(".charter-articles").childNodes;
      const menuItems=document.querySelectorAll(".charter-link")
      let current='';

      sections.forEach((section)=>{
        const sectionTop=section.offsetTop
        if(window.scrollY>=sectionTop-150)
        {
          current=section.getAttribute("id");
        }
      })

      menuItems.forEach(li=>{
        li.classList.remove("current")
        if(li.classList.contains(current)){
          li.classList.add('current');
        }
      })
    })
  },[])
 


  function changeCurrent(e)
  {
      window.removeEventListener();
      let items=document.querySelectorAll(".charter-link");
      items=Array.from(items)
      
      items.forEach((item)=>{
        item.classList.remove("current");
      })
      e.target.classList.add("current");
  }


    return (
      <div id="charter" className="container charter">
          <div className="charter-heading">
            <h1>What's Inside The Book</h1>
          </div>
          <div className="charter-content">
            <div className="charter-navbar">
                <ul className="charter-ul" onClick={changeCurrent}>
                  <li><a className="charter-link title-page" href="#title-page">Title Page</a></li>
                  <li><a className="charter-link copyright"  href="#copyright">Copyright</a></li>
                  <li><a className="charter-link table-of-contents"  href="#table-of-contents">Table of contents</a></li>
                  <li><a className=" charter-link dedication"  href="#dedication">Dedication</a></li>
                  <li><a  className=" charter-link foreword" href="#foreword">Foreword</a></li>
                  <li><a className=" charter-link prologue" href="#prologue">Prologue</a></li>
                  <li><a className=" charter-link epilogue" href="#epilogue">Epilogue</a></li>
                  <li><a className=" charter-link epigraph" href="#epigraph">Epigraph</a></li>
                </ul>
            </div>
            <div className="charter-articles">
              {
                data.map(elem=><CharterItem key={elem.id} item={elem}/>)
              }
            </div>
          </div>
      </div>
    )
}
export default Charter