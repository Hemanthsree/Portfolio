import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const SocialMedia = () => {
  return (
    <div className='social'>
      <div className="twi"><TwitterIcon /></div>
      <div className="fac"><FacebookIcon /></div>
      <div className="insta"><InstagramIcon /></div>
      <div className="link"><LinkedInIcon /></div>
    </div>
  )
}

export default SocialMedia