'use client';

import ContactForm from '@/components/ContactForm';
import FirebaseApp from '@/firebase';
import { getFirestore } from 'firebase/firestore';
import React from 'react';
import { FirestoreProvider, useFirebaseApp } from 'reactfire';

function Contact() {
  return (
    <FirebaseApp>
      <FirestoreWrapper>
        <ContactForm />
      </FirestoreWrapper>
    </FirebaseApp>
  );
}

export default Contact;

function FirestoreWrapper({ children }: { children: React.ReactNode }) {
  const firestoreInstance = getFirestore(useFirebaseApp());

  return <FirestoreProvider sdk={firestoreInstance}>{children}</FirestoreProvider>;
}
