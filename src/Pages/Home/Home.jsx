import React from 'react';
import './Home.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Feed from '../../Components/Feed/Feed';

const Home = ({sidebar}) => {
  return (
    <div>
    <Sidebar sidebar={sidebar}/>
    <div className={`container ${sidebar?"":'largecontainer'}`}>
      <Feed></Feed>
    </div>

    </div>
  )
}

export default Home