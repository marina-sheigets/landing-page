import React, { useState,useRef,useEffect }  from 'react'
import data from "./CharterDataArray"
import CharterItem from './CharterItem'
import "./charter.css"
const Charter=()=> {

  const containerRef=useRef(null);

  const options={
    root:null,
    threshold:1
  }

 /* useEffect(()=>{
    const observer=new new IntersectionObserver(changeAutomatically,options)
   if(containerRef.current) observer.observe(containerRef.current)
    return ()=>{
      if(containerRef.current) observer.unobserve(containerRef.current)
    }
  },[containerRef,options])*/
 

  function changeAutomatically(){
    console.log("observe")
  }

  function changeCurrent(e)
  {
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
                  <li><a className="charter-link" href="#title-page">Title Page</a></li>
                  <li><a className=" charter-link"  href="#copyright">Copyright</a></li>
                  <li><a className=" charter-link"  href="#table-of-contents">Table of contents</a></li>
                  <li><a className=" charter-link"  href="#dedication">Dedication</a></li>
                  <li><a  className=" charter-link" href="#foreword">Foreword</a></li>
                  <li><a className=" charter-link" href="#prologue">Prologue</a></li>
                  <li><a className=" charter-link" href="#epilogue">Epilogue</a></li>
                  <li><a className=" charter-link" href="#epigraph">Epigraph</a></li>
                </ul>
            </div>
            <div ref={containerRef} className="charter-articles">
              {
                data.map(elem=><CharterItem key={elem.id} item={elem}/>)
              }
            </div>
          </div>
      </div>
    )
}
export default Charter