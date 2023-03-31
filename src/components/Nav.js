import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import useContentful from "./useContentful";


export default function Nav() {
  const [photos, setPhotos] = useState([]);
    const { getPhotos } = useContentful();
  
    const logo = photos.map((photo) => {
      return photo.avatar[3].fields.file.url
    })
  
    console.log(photos)
    console.log(logo)

    useEffect(() => {
        getPhotos().then((response) => response && setPhotos(response));
      }, []);
      
    return (
        <nav className="navbar-light navbar navbar-expand-sm">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Smoothie Logo" style= {{ height: "40px"}}/>
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
      
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <NavLink className="nav-link dropdown-toggle" to="#" data-bs-toggle="dropdown" aria-expanded="false"><span
                    className="sr-only">(current)</span>Smoothies</NavLink>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/green-smoothie">Green Smoothie</Link></li>
                  <li>
                    <hr className="dropdown-divider"/>
                  </li>
                  <li><Link className="dropdown-item" to="/strawberry-smoothie">Strawberry Smoothie</Link></li>
                  <li>
                    <hr className="dropdown-divider"/>
                  </li>
                  <li><Link className="dropdown-item" to="/banana-smoothie">Banana Smoothie</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="health">Health</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="about-us" id="aboutUs">About us</NavLink>
              </li>
            </ul>
          </div>
        </nav>
       
    )
}