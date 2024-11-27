import React from 'react'

const Skills = () => {
  return (
    <div id='Skills' className='container pt-32'>
        <div className='grid md:grid-cols-1 gap-20 items-center'>
     <div data-aos="zoom-in-up"> 
        <h2 className='text-4xl md:text-5xl'>Technologies I work with</h2>
        <p className='text-gray-500 pt-2'>
        proficiency in coding languages such as HTML, CSS, and JavaScript for front-end development, along with knowledge of server-side languages like Node.   
        Technical skills: Knowledge of HTML, CSS, JavaScript, React,Next.js and Node.js
         Problem-solving: Creative problem-solving skills

            </p>             
      </div>
      <div className='grid grid-cols-2 text-accent text-3xl sm:text-4xl'>
        <div className='space-y-2'>
            <h2 data-aos="zoom-in-up">Typescript</h2>
            <h2 data-aos="zoom-in-up">React.js</h2>
            <h2 data-aos="zoom-in-up">Node.js</h2>
            <h2 data-aos="zoom-in-up">Next.js</h2>
            <div className='space-y-2'>
            <h2 data-aos="zoom-in-up">Html</h2>
            <h2 data-aos="zoom-in-up">Css</h2>
            <h2 data-aos="zoom-in-up">Javascript</h2>
            </div>
        </div>
      </div>
        </div>
      
    </div>
  )
}

export default Skills
