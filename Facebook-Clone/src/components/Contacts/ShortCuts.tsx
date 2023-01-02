import React from 'react'
import ContactProfile from './Contact.profile'

const ShortCuts = () => {
  return (
    <div className='my-4'>
        <h3 className='font-bold'>Your Shortcuts</h3>
        <ContactProfile image='/Images/post.jpg' name='Sajilo Coding' />
        <ContactProfile image='/Images/post1.jpg' name='Cristiano Ronaldo Nepali Fans'/>
        <ContactProfile image='/Images/story.jpg' name='IT Jobs Nepal'/>
        <ContactProfile image='/Images/profile3.jpg' name='Job Vacancy kathmandu Nepal'/>
        <ContactProfile image='/Images/profil2.jpg' name='Nepali News'/>

    </div>
  )
}

export default ShortCuts