import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import SmartphoneIcon from '@mui/icons-material/Smartphone';

const Contact = () => {
  return (
    <>
    <div className='contact'>
    <div className="title">
      <p>Contact</p></div>
      <hr />
      <div className="contact-box">
        <div className="location">
          <div className="loc">
            <div className="loca"><LocationOnIcon/></div>
            <div className="data1"><h1>Location:</h1><p>sivaramapuram(v)&(p),santhipuram(m),chittoor(d)</p></div>
          </div>
          <div className="loc">
            <div className="loca"><EmailIcon/></div>
            <div className="data1"><h1>Email:</h1><p>hemanthsree555@gmail.com</p></div>
          </div>
          <div className="loc">
            <div className="loca"><SmartphoneIcon/></div>
            <div className="data1"><h1>Call:</h1><p>+91- 9381529994</p></div>
          </div>
        </div>
        <div className="info">
          <form>
            <div className="form">
            <div><label htmlFor="">Your Name</label><br />
            <input type="text" /></div>
            <div><label htmlFor="">Email</label><br />
            <input type="text" /></div>
            </div>
            <div id='sub'><label htmlFor="">Subject</label><br />
            <input type="text" id='sub-input'/></div>
            <div className="message">
            <label htmlFor="">Message</label><br />
            <textarea name="" id="" cols="50" rows="8" style={{borderRadius:"5px"}}></textarea>
            </div>
            <div><button id='btn'>Send message</button></div>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default Contact