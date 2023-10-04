import React from 'react'

const ContactUs = () => {
  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '3px',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
  }

  const buttonStyle = {
    width: '100%',
    padding: '10px',
    background: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
  }

  const contactInfo = {
    address: '123 Main St, City, Country',
    phone: '+123 456 7890',
    email: 'contact@example.com',
  }

  const socialLinks = [
    { name: 'Facebook', url: 'https://www.facebook.com/example' },
    { name: 'Twitter', url: 'https://www.twitter.com/example' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/example' },
    // Add more social media links as needed
  ]
  const handleClick = () => {}
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          textAlign: 'center',
          justifyContent: 'space-between',
          backgroundImage:
            'url(https://images.pexels.com/photos/821754/pexels-photo-821754.jpeg)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          overflowY: 'hidden',
          flex: '1',
        }}
      >
        <article
          style={{
            padding: '20px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
          }}
        >
          <h1>Contact Us</h1>
          <br />
          <form>
            <label htmlFor='name'>Name:</label>
            <input
              type='text'
              id='name'
              style={inputStyle}
              placeholder='Your Name'
            />

            <label htmlFor='email'>Email:</label>
            <input
              type='email'
              id='email'
              style={inputStyle}
              placeholder='Your Email'
            />

            <label htmlFor='message'>Message:</label>
            <textarea
              id='message'
              style={inputStyle}
              placeholder='Your Message'
            ></textarea>

            <button type='submit' style={buttonStyle}>
              Submit
            </button>
          </form>
        </article>

        <section
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: '20px',
            paddingLeft: '20px',
            paddingRight: '20px',
          }}
        >
          <div
            style={{
              flex: 1, // Make Contact Information section take up available space
              marginTop: '-50px',
              // Adjust the top margin to move it higher
            }}
          >
            <h2 style={{ fontSize: '24px' }}>Contact Information</h2>{' '}
            {/* Increase font size */}
            <p style={{ fontSize: '18px' }}>
              Address: {contactInfo.address}
            </p>{' '}
            {/* Increase font size */}
            <p style={{ fontSize: '18px' }}>Phone: {contactInfo.phone}</p>{' '}
            {/* Increase font size */}
            <p style={{ fontSize: '18px' }}>
              Email:{' '}
              <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
            </p>
          </div>
        </section>
      </div>

      <footer
        style={{
          backgroundColor: '#333',
          color: 'white',
          textAlign: 'center',
          padding: '10px',
        }}
      >
        <h3>Follow Us</h3>
        <ul
          style={{
            listStyle: 'none',
            padding: 0,
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          {socialLinks.map((link) => (
            <li key={link.name} style={{ margin: '0 10px' }}>
              <a href={link.url} target='_blank' rel='noopener noreferrer'>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </footer>
    </>
  )
}

export default ContactUs
