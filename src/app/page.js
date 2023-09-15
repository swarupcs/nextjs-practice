'use client'
import { useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css'
import { useRouter } from 'next/navigation';

// import custom from './custom.module.css'
// import other from './other.module.css'
// import outside from '@/style/outside.module.css'

import style from "./style.module.css"

export default function Home() {
  // const router = useRouter();
  // const navigate=(name)=> {
  //   router.push(name);
  // }

  const [color, setColor] = useState("red")
  const {red} = style

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

      {/* <h1>Styles and CSS in NEXTJS</h1>
      <h2>Heading 2 in main page</h2> */}

      {/* <h1 className={custom.main}>CSS Modules with Next js</h1>
      <h2 className={other.main}>CSS Modules with Next js</h2>
      <p className={outside.main}>Some Text</p> */}



      <h1 className={color=="red" ? style.red : style.green}>Condition with Style</h1>
      <h2 style={{backgroundColor:color=='red' ? 'red' : 'green'}}>Heading 2</h2>
      <h3 id={style.orange}>Heading 3</h3>

      <h4 className={red}>Dummy Text</h4>
      <h4 className={red}>Dummy Text</h4>
      <h4 className={red}>Dummy Text</h4>
      <h4 className={red}>Dummy Text</h4>
      <h4 className={red}>Dummy Text</h4>


      <button onClick={()=> setColor("green")}>Update Color</button>

    </main>
  )
}


