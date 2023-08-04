'use client';

import { useState } from 'react';
import { collection, doc, setDoc } from 'firebase/firestore';
import { useFirestore } from 'reactfire';
import { z } from 'zod';

const contactFormSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  name: z
    .string()
    .min(2, 'Name must be between 2 and 50 characters')
    .max(50, 'Name must be between 2 and 50 characters'),
  message: z
    .string()
    .min(2, 'Message must be between 2 and 500 characters')
    .max(500, 'Message must be between 2 and 500 characters')
    .refine((message) => message.trim().length > 0, {
      message: 'Message cannot be empty',
    }),
});

// eslint-disable-next-line no-unused-vars
type ContactForm = z.infer<typeof contactFormSchema>;

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [isFormDataSent, setIsFormDataSent] = useState(false);

  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    message: '',
  });

  const [formDataError, setFormDataError] = useState<{
    name: string[];
    email: string[];
    message: string[];
  }>({
    name: [],
    email: [],
    message: [],
  });

  const veirfyUserInput = () => {
    const result = contactFormSchema.safeParse(formData);
    console.log(result);

    if (result.success) {
      setFormDataError({
        name: [],
        email: [],
        message: [],
      });

      return true;
    }

    setFormDataError({
      name: result.error.issues
        .filter((issue) => issue.path[0] === 'name')
        .map((issue) => issue.message),
      email: result.error.issues
        .filter((issue) => issue.path[0] === 'email')
        .map((issue) => issue.message),
      message: result.error.issues
        .filter((issue) => issue.path[0] === 'message')
        .map((issue) => issue.message),
    });

    return false;
  };

  const messagesCollectionRef = collection(useFirestore(), 'messages');

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (!veirfyUserInput()) {
      console.log('Please fill out all fields');

      setLoading(false);

      return;
    }

    try {
      // Reference to the specific document with the email as the ID
      const messageDocRef = doc(messagesCollectionRef, formData.email);
      // Set the data to the specific document
      await setDoc(messageDocRef, formData);

      setIsFormDataSent(true);

      //   artificial delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Clear the form
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting message:', error);
    }

    setLoading(false);
  };

  return (
    <>
      <ContactFormWrapper>
        <form onSubmit={onSubmit} className='mx-auto max-w-md'>
          <div>
            <h1 className='text-2xl font-semibold'>Contact Me</h1>
          </div>
          <div className='divide-y divide-gray-200'>
            <div className='space-y-4 py-8 text-base leading-6 text-gray-700 sm:text-lg sm:leading-7'>
              <div className='relative pb-4'>
                <input
                  disabled={loading}
                  autoComplete='off'
                  id='name'
                  name='name'
                  type='text'
                  className='focus:borer-rose-600 peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none'
                  placeholder='Name'
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                <label
                  htmlFor='name'
                  className='peer-placeholder-shown:text-gray-440 absolute left-0 -top-3.5 text-sm text-gray-600 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-600'
                >
                  Name
                </label>
                {formDataError.name.map((error, idx) => (
                  <p key={idx} className='text-sm text-red-500'>
                    {error}
                  </p>
                ))}
              </div>

              <div className='relative pb-4'>
                <input
                  disabled={loading}
                  autoComplete='off'
                  id='email'
                  name='email'
                  type='email'
                  className='focus:borer-rose-600 peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none'
                  placeholder='Email'
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                <label
                  htmlFor='email'
                  className='peer-placeholder-shown:text-gray-440 absolute left-0 -top-3.5 text-sm text-gray-600 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-600'
                >
                  Email
                </label>
                {formDataError.email.map((error, idx) => (
                  <p key={idx} className='text-sm text-red-500'>
                    {error}
                  </p>
                ))}
              </div>

              <div className='relative pb-4'>
                <textarea
                  disabled={loading}
                  autoComplete='off'
                  id='message'
                  name='message'
                  rows={5}
                  className='focus:borer-rose-600 peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none'
                  placeholder='Please write your message here...'
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
                <label
                  htmlFor='message'
                  className='peer-placeholder-shown:text-gray-440 absolute left-0 -top-3.5 text-sm text-gray-600 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-600'
                >
                  Message
                </label>
                {formDataError.message.map((error, idx) => (
                  <p key={idx} className='text-sm text-red-500'>
                    {error}
                  </p>
                ))}
              </div>
              <div className='relative'>
                <button disabled={loading} className='rounded-md bg-blue-500 px-2 py-1 text-white'>
                  {loading ? 'Submitting...' : 'Submit'}
                </button>
              </div>
            </div>
          </div>
        </form>

        {isFormDataSent && (
          <div className='text-center'>
            <h1 className='text-2xl font-semibold'>Thank you for your message!</h1>
            <p className='text-lg'>I will get back to you as soon as possible.</p>
          </div>
        )}
      </ContactFormWrapper>
    </>
  );
}

function ContactFormWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex min-h-screen flex-col justify-center  py-6 sm:py-12'>
      <div className='relative py-3 sm:mx-auto sm:max-w-xl'>
        <div className='absolute inset-0 -skew-y-6 transform bg-gradient-to-r from-blue-300 to-blue-600 shadow-2xl sm:-rotate-6 sm:skew-y-0 sm:rounded-3xl'></div>
        <div className='relative bg-white px-4 py-10 shadow-2xl sm:rounded-3xl sm:p-20'>
          <div className='mx-auto max-w-md '>{children}</div>
        </div>
      </div>
    </div>
  );
}
