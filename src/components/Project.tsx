import { title } from 'process'
import React from 'react'
import Heading from './Heading'
import Card from './Card'

const data = [
{
    id:0,
    title:"Static Interactive Resume",
    desc:"A typescript based interactive resume built with html css and node.js",
    img:"/image.png (2).png",
    tags:["HTML,CSS,Node.js,Typescript"],
}

]

const Project = () => {
  return (
    <div id="project" className='container pt-32'>
        <Heading title='My project' />
        <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {data.map((el) => (<Card 
         key={el.id}
         title={el.title}
         desc={el.desc}
         img={el.img}
         tags={el.tags}
         />))}
    </div>
    </div>
  )
}

export default Project
