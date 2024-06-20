import React from 'react';
import Card from './Cards';
import './index.css';
import Sdata from './Sdata';

function nCard(val)
{
  return(
    <Card
    key ={val.id}
    imgSrc={val.imgSrc} 
    title={val.title}
    sname={val.sname}
    link={val.link}/>
  )
}

const App=()=>(
<>
<h1 className='heading_style'>List of Top 5 Netflix Series in 2024</h1>

{/* <Card imgSrc={Sdata[0].imgSrc} 
title={Sdata[0].title}
sname={Sdata[0].sname}
link={Sdata[0].link}/> */}

{Sdata.map(nCard)}
</>
)

export default App;
// https://www.hitc.com/static/uploads/hitcn/1816/extracurricular_netflix_780_1544944.jpg

