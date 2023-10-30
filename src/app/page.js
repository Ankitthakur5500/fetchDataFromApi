"use client";
import Image from 'next/image'
import styles from './page.module.css'
import { useEffect, useState } from 'react'
import Link from 'next/link';


export default function Home() {

  return (
  <div className='ankit'>
    <h1>Fetching data from an api!!!</h1>
    <Link href='/component/blog'>
    Blog
    </Link>
  </div>
   );
}
