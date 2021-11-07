import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
      const [cats,setCats] =useState([]);
      useEffect(()=>{
          const getCats =async ()=>
          {
              const res =await axios.get("/categories");
              setCats(res.data);
          };
          getCats();
      },[]);
    return (
        
        <div className="sidebar">
           <div className="sidebarItem">
               <span className="sidebarTitle">ABOUT ME</span>
               <img className="sidebarimg" src="https://images.unsplash.com/photo-1574871786514-46e1680ea587?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGZsb3dlciUyMGdpcmx8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" alt=""/>
               <p>
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quasi provident soluta neque dolorem molestiae cupiditate cum porro nulla consectetur dolor sit voluptas placeat temporibus vitae, ullam optio dolore! Inventore!
               </p>
           </div>
           {/* <div className="sidebarItem">
           <span className="sidebarTitle">CATEGORIES</span>
           <ul className="sidebarList">
               {cats.map((c)=>(
                   <Link to={`/?cat=${c.name}`} className="link">
               <li className="sidebarListItem">{c.name}</li>
               </Link>
               ))}
           </ul>

           </div> */}
           <div className="sidebarItem">
           <span className="sidebarTitle">FOLLOW US</span> 
           <div className="sidebarSocial">
           <i className="sidebarIcon fab fa-facebook-square"></i>
            <i className="sidebarIcon fab fa-twitter"></i>
            <i className="sidebarIcon fab fa-instagram"></i>
           </div>
           </div>
        </div>
    );
}
