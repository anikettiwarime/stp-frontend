import axios from 'axios';
import React, { useState } from 'react'

const Contact = () => {
  const URL = 'http://localhost:8000/api/feedbacks/';

  const [formData, setFormData] = useState({ name: '', email: '', feedback: '', });
  const [submitted, setSubmitted] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((data) => ({ ...data, [name]: value, }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    axios.post(URL, formData).then(async (res) => {
      console.log(res);
      if (res.status === 201) {
        setSubmitted(true);
      }
    }).catch((error) => {
      console.log(error);
    })
  }

  if (submitted) {
    return (
      <div className='p-20'>
        <p className='text-4xl text-center flex'>Thanks for your valuable feedback.</p>
        <button
          className="bg-blue-400 hover:bg-blue-500 text-white font-bold te py-2 px-4 mt-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
          onClick={() => {
            setSubmitted(false)
            setFormData({ name: '', email: '', feedback: '', })
          }}
        >
          Submit another feedback
        </button>
      </div>
    )
  } else {
    return (
      <div className='p-8 mx-40'>
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className='text-xl mb-4'>Please give your valuable feedback.</h2>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Your name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Your email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              name="feedback"
              placeholder="Your message"
              value={formData.feedback}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    )
  }


}

export default Contact