import React from 'react'

const ContactForm = () => {
  return (
    <div className='max-w-lg w-full'>
      <h1 className='text-3xl mb-4'>Contact Us</h1>
      <form className='grid gap-4 '>
        <div className='flex gap-4'>
          <input
            type='text'
            name=''
            id=''
            placeholder='Firstname'
            className='border border-gray-300 px-4 py-2 rounded w-full text-sm'
          />
          <input
            type='text'
            name=''
            id=''
            placeholder='Lastname'
            className='border border-gray-300 px-4 py-2 rounded w-full text-sm'
          />
        </div>
        <input
          type='text'
          name=''
          id=''
          placeholder='Email'
          className='border border-gray-300 px-4 py-2 rounded w-full text-sm'
        />
        <textarea
          name=''
          id=''
          rows={3}
          placeholder='Message'
          className='border border-gray-300 px-4 py-2 rounded w-full text-sm'
        ></textarea>
        <input
          type='submit'
          value='Submit'
          className='bg-blue-500 text-white uppercase py-4 rounded text-sm'
        />
      </form>
    </div>
  )
}

export default ContactForm
