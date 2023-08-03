'use client';

import { useState } from 'react';
import { collection, doc, setDoc } from 'firebase/firestore';
import { useFirestore } from 'reactfire';

export type IContactForm = {
  email: string;
  name: string;
  message: string;
};

export default function ContactForm() {
  const [name, setName] = useState('admin');
  const [email, setEmail] = useState('admin@gmail.com');
  const [message, setMessage] = useState('hey there!');
  const [loading, setLoading] = useState(false);

  const messagesCollectionRef = collection(useFirestore(), 'messages');

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    const messageData: IContactForm = {
      name: name,
      email: email,
      message: message,
    };

    // Reference to the specific document with the email as the ID
    const messageDocRef = doc(messagesCollectionRef, email);

    // Set the data to the specific document
    try {
      await setDoc(messageDocRef, messageData);
      console.log('Message submitted successfully');

      //   artificial delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Clear the form
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Error submitting message:', error);
    }

    setLoading(false);
  };

  return (
    <>
      {loading && <p>loading...</p>}

      <ContactFormWrapper>
        <form onSubmit={onSubmit} className='mx-auto max-w-md'>
          <div>
            <h1 className='text-2xl font-semibold'>Contact Me</h1>
          </div>
          <div className='divide-y divide-gray-200'>
            <div className='space-y-4 py-8 text-base leading-6 text-gray-700 sm:text-lg sm:leading-7'>
              <div className='relative'>
                <input
                  disabled={loading}
                  autoComplete='off'
                  id='name'
                  name='name'
                  type='text'
                  className='focus:borer-rose-600 peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none'
                  placeholder='Name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <label
                  htmlFor='name'
                  className='peer-placeholder-shown:text-gray-440 absolute left-0 -top-3.5 text-sm text-gray-600 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-600'
                >
                  Name
                </label>
              </div>
              <div className='relative'>
                <input
                  disabled={loading}
                  autoComplete='off'
                  id='email'
                  name='email'
                  type='email'
                  className='focus:borer-rose-600 peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none'
                  placeholder='Email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label
                  htmlFor='email'
                  className='peer-placeholder-shown:text-gray-440 absolute left-0 -top-3.5 text-sm text-gray-600 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-600'
                >
                  Email
                </label>
              </div>
              <div className='relative'>
                <textarea
                  disabled={loading}
                  autoComplete='off'
                  id='message'
                  name='message'
                  rows={5}
                  className='focus:borer-rose-600 peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none'
                  placeholder='Please write your message here...'
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <label
                  htmlFor='message'
                  className='peer-placeholder-shown:text-gray-440 absolute left-0 -top-3.5 text-sm text-gray-600 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-600'
                >
                  Message
                </label>
              </div>
              <div className='relative'>
                <button disabled={loading} className='rounded-md bg-blue-500 px-2 py-1 text-white'>
                  {loading ? 'Submitting...' : 'Submit'}
                </button>
              </div>
            </div>
          </div>
        </form>
      </ContactFormWrapper>
    </>
  );
}

function ContactFormWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex min-h-screen flex-col justify-center bg-gray-100 py-6 sm:py-12'>
      <div className='relative py-3 sm:mx-auto sm:max-w-xl'>
        <div className='absolute inset-0 -skew-y-6 transform bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg sm:-rotate-6 sm:skew-y-0 sm:rounded-3xl'></div>
        <div className='relative bg-white px-4 py-10 shadow-lg sm:rounded-3xl sm:p-20'>
          <div className='mx-auto max-w-md'>{children}</div>
        </div>
      </div>
    </div>
  );
}
