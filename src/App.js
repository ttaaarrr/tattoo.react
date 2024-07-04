
import './App.css';
import AppSearch from './components/AppSearch';
import Appheader from './components/Appheader';
import TattooItem from './components/TattooItem';
import TattooPost from './components/TattooPost';
import tattoos from './data/tattoos';
import React, { useState } from 'react';

function App() {
  const[selectedTattoo, setSelectedTattoo] = useState(null);
  const [searchText, setSearchText] = useState('');
  function onTattooOpenClick(theTattoo) {
    setSelectedTattoo(theTattoo);
  }
function onTattooCloseClick(){
  setSelectedTattoo(null);
}

  const tattooElements = tattoos.filter((tattoo) =>{
    return tattoo.title.includes(searchText);
  }).map((tattoo,index) => {
    return <TattooItem key ={index} tattoo = {tattoo} onTattooClick={onTattooOpenClick} />;
  });

  let tattooPost = null;
  if (!!selectedTattoo){
tattooPost = <TattooPost tattoo={selectedTattoo} onBgclick = {onTattooCloseClick}/>
  }
  return (
    <div className="App">
   <Appheader/>
   <section className="app-section">
      <div className="app-container">
         <AppSearch value={searchText} onValueChange = {setSearchText}/>
          <div className = "app-grid">
              { tattooElements}
          </div>
      </div>
   </section>
  {tattooPost}
    </div>
  );
}

export default App;
