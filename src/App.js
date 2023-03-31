import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import React from 'react';
import Root from './components/Root';
import HomePage from './components/HomePage';
import PageOne from './components/pages/PageOne';
import PageTwo from './components/pages/PageTwo';
import PageThree from './components/pages/PageThree';
import { useEffect, useState } from "react";
import useContentful from "./components/useContentful";


function App() {
  const [photos, setPhotos] = useState([]);
  const { getPhotos } = useContentful();

  //let bananaPhoto = photos[0].fields.avatar[0].fields.file.url

  

  // photos.map((item) =>{
  //   console.log(item.avatar[0].fields.file.url)
  //   bananaPhoto = item.avatar[0].fields.file.url
  
  // })

  useEffect(() => {
    getPhotos().then((response) => response && setPhotos(response));
  }, []);

  const router = createBrowserRouter( createRoutesFromElements (
    <Route>
    <Route path="/" element={ <Root/> }>
      <Route index element={ <HomePage/> } />
     <Route path='green-smoothie' element={ <PageOne/> } />
     <Route path='strawberry-smoothie' element={ <PageTwo/> } />
     <Route path='banana-smoothie' element={ <PageThree /> } />
    </Route>
    </Route>
    ))
  
  return (
    <div className="App">
       
    <RouterProvider router={ router }/>
    </div>
  );
}

export default App;
