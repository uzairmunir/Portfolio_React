import React, { useRef, useState, useContext } from 'react';
import { Grid } from '@mui/material';
import './contact.scss';
import { Email, GitHub, Room, WhatsApp } from '@mui/icons-material';
import emailjs from 'emailjs-com';
import { ThemeContext } from '../../context/ThemeContext';

const Contact = () => {
  const formRef = useRef('');
  const [done, setDone] = useState(false);
  const [error, setError] = useState(false);
  const [value, setValue] = useState({
    name: '',
    subject: '',
    email: '',
    message: '',
  });
  const { dark } = useContext(ThemeContext);

  const onChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const sendMail = (e) => {
    e.preventDefault();
    if (value.email === '') {
      setError(true);
    } else {
      emailjs
        .sendForm(
          'service_al5vcgj',
          'template_tr1sidd',
          formRef.current,
          'user_4KZr9iiHdSfNP00BJPVOx'
        )
        .then(
          (result) => {
            console.log(result.status);

            setDone(true);
            setValue({ name: '', subject: '', email: '', message: '' });
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };
  setTimeout(() => {
    setDone(false);
    setError(false);
  }, 5000);

  return (
    <>
      <div
        className={dark ? 'dark-contact-container' : 'contact-container'}
        id='contact'
      >
        {/* <h1>Contact </h1> */}
        <Grid container spacing={2}>
          <Grid item xs={12} lg={6}>
            <div className='contact-wrapper'>
              <h1>Let's discuss your project</h1>
              <div className='contact-info'>
                <WhatsApp className='icon phone' />
                <span>+92 03026600578</span>
              </div>
              <div className='contact-info'>
                <Email className='icon mail' />
                <span>uzair8825@gmail.com</span>
              </div>
              <div className='contact-info'>
                <GitHub className='icon github' />
                <span>uzairmunir</span>
              </div>
              <div className='contact-info'>
                <Room className='icon address' />
                <span>Daska District Sialkot Pakistan</span>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} lg={6}>
            <div className='contact-wrapper'>
              <p>
                <strong>What's your story?</strong>
                Get in touch Always available for freelancing if the right
                project comes along me.
              </p>
              <form onSubmit={sendMail} ref={formRef}>
                <input
                  type='text'
                  placeholder='Name'
                  value={value.name}
                  name='name'
                  onChange={onChange}
                />
                <input
                  type='text'
                  placeholder='Subject'
                  name='subject'
                  value={value.subject}
                  onChange={onChange}
                />
                <input
                  type='email'
                  placeholder='Email'
                  value={value.email}
                  name='email'
                  onChange={onChange}
                />
                {error && <p>This field is required </p>}
                <textarea
                  rows='4'
                  cols='50'
                  placeholder='Message'
                  name='message'
                  value={value.message}
                  onChange={onChange}
                />

                <div className='btn-div'>
                  <button type='submit' className='btn'>
                    Send
                  </button>
                  {done && <p>Thank You I will reply you Asap...</p>}
                </div>
              </form>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Contact;
