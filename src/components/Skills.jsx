import React from 'react'

export const Skills = () => {
  return (
    <div className='skills'>
      <div className='title'>Skills</div>
      <hr />
      <div className='sentence'> As a fresher i dont have any experience but i have good knowledge on front end technologies.Eagerly waiting for the organisation to prove and enhance my skills for the development and gain more knowledge. Iam good at the below mentioned technologies.</div>
      <div className='main'>
        <div className='col3'>
        <label htmlFor="html">Html</label>
        <meter id='html' value='1.0'>100%</meter><br />
        <label htmlFor="css">Css</label>
        <meter id='css' value='0.9'>90%</meter><br />
        <label htmlFor="javascript">JavaScript</label>
        <meter id='JavaScript' value='0.9'>100%</meter><br />
        <label htmlFor="React">React</label>
        <meter id='React' value='0.9'>100%</meter>
        </div>
        <div className="col4">
        <label htmlFor="node">Node js</label>
        <meter id='node' value='0.8'>80%</meter><br />
        <label htmlFor="bootstrap">Bootstrap</label>
        <meter id='bootstrap' value='0.8'>80%</meter><br />
        <label htmlFor="express">Express js</label>
        <meter id='express' value='0.8'>80%</meter><br />
        <label htmlFor="mangodb">MangoDB</label>
        <meter id='Mangodb' value='0.9'>90%</meter>
        </div>
      </div>
    </div>
  )
}
