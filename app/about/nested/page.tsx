'use client';
import { User } from '@prisma/client';
import { useState } from 'react';

export default function NestedAbout() {
  const [user, setUser] = useState<User | null>(null);

  return (
    <>
      <div>NestedAbout</div>

      <label htmlFor='name'>Name</label>
      <input
        type='text'
        name='name'
        id='name'
        onChange={(e) => {
          setUser({ ...user, name: e.target.value } as User);
        }}
      />

      <button
        onClick={() => {
          setUser(null);
        }}
      >
        Add User
      </button>
    </>
  );
}
