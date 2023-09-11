'use client'
import { useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css'

export default function Home() {

  return (
    <main>
      <h1>Basic Routing | Make New Page</h1>
      <Link href="/login">Go to Login Page</Link>
      <br></br>
      <Link href="/about">Go to About Page</Link>
    </main>
  )
}


