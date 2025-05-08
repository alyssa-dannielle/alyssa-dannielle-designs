'use client';
import React, { useState } from 'react';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const ContactForm = ({ isOpen, onClose }: Props) => {
  const [status, setStatus] = useState<
    'idle' | 'sending' | 'success' | 'error'
  >('idle');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const formData = new FormData(e.currentTarget);
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      });
      setStatus('success');
      setTimeout(() => {
        onClose();
        setStatus('idle');
      }, 2000);
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className='fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4'>
      <div className='bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md relative'>
        <button
          onClick={onClose}
          className='absolute right-4 top-4 text-gray-500 hover:text-gray-700'
        >
          ✕
        </button>

        <h2 className='text-xl font-bold mb-4'>Contact Me</h2>

        <form
          onSubmit={handleSubmit}
          data-netlify='true'
          name='contact'
          className='space-y-4'
        >
          <input type='hidden' name='form-name' value='contact' />

          <div>
            <label htmlFor='name' className='block text-sm font-medium mb-1'>
              Name
            </label>
            <input
              type='text'
              name='name'
              id='name'
              required
              className='w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600'
            />
          </div>

          <div>
            <label htmlFor='email' className='block text-sm font-medium mb-1'>
              Email
            </label>
            <input
              type='email'
              name='email'
              id='email'
              required
              className='w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600'
            />
          </div>

          <div>
            <label htmlFor='message' className='block text-sm font-medium mb-1'>
              Message
            </label>
            <textarea
              name='message'
              id='message'
              rows={4}
              required
              className='w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600'
            />
          </div>

          <button
            type='submit'
            disabled={status === 'sending'}
            className='w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 disabled:opacity-50'
          >
            {status === 'sending'
              ? 'Sending...'
              : status === 'success'
                ? 'Sent!'
                : status === 'error'
                  ? 'Error - Try Again'
                  : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
