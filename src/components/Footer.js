import React from 'react'

const Footer = () => {
  const date = new Date();
  return (

    <footer className='bg-blue-200 text-black px-16 py-4'>
      <div className='flex justify-between py-4'>
        <div>
          <p className='text-2xl capitalize'> About Me</p>
          <p>This project is Developed by Aniket Tiwari</p>
        </div>
        <div>
          <p className='text-2xl capitalize'>Other Usefull stuff</p>
          <ul>
            <li>College No : +91 12345 67890</li>
            <li>Department No : +91 12345 67890</li>
            <li>Teacher's No : +91 12345 67890</li>
          </ul>
        </div>
        <div>
          <p className='text-2xl capitalize'>Contact us</p>
          <ul>
            <li>Address: Vidyanagar, Tal:karad, Dist:Satara</li>
            <li>gcek@email.com</li>
            <li>+91 12345 67890</li>
          </ul>
        </div>
      </div>
      <div className='text-center pb-4'>
        <p className=' text-sm'>Copyright © {date.getFullYear()}. All rights reserved.Institute of Petrochemical Engineering Lonere. Developed & Maintained by Department of Information Technology.</p>
      </div>
    </footer>

  )
}

export default Footer