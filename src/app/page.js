'use client'
import { useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css'
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <main>
      <h1>Basic Routing | Make New Page</h1>
      <Link href="/login">Go to Login Page</Link>
      <br></br>
      <Link href="/about">Go to About Page</Link>
      <br />
      <br />
      <br />
      <button onClick={()=> router.push("/login")} >Go to Login Page</button>
      <button onClick={()=> router.push("/about")} >Go to About Page</button>
    </main>
  )
}


