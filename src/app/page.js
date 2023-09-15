'use client'
import { useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css'
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const navigate=(name)=> {
    router.push(name);
  }

  return (
    <main>
      {/* <h1>Basic Routing | Make New Page</h1>
      <Link href="/login">Go to Login Page</Link>
      <br></br>
      <Link href="/about">Go to About Page</Link>
      <br />
      <br />
      <br />
      <button onClick={()=> navigate("/login")} >Go to Login Page</button>
      <button onClick={()=> navigate("/about")} >Go to About Page</button> */}

      {/* <h1>Fetch Data with API in Client Component</h1>
      <Link href="/productlist">Go to Product List</Link> */}

      <h1>Styles and CSS in NEXTJS</h1>
      <h2>Heading 2 in main page</h2>
    </main>
  )
}


