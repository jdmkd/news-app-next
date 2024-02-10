'use client';
import "../../app/globals.css";
import React, { useState } from 'react'
import Link from 'next/link'

import NavBar from '@/components/navbar/NavBar';
import News from '@/components/news-page/News';
import LoadingBar from 'react-top-loading-bar';

export default function NavMain() {
    const pageSize = 5;
    // const apiKey = "7df9b0fc1b994abdb3d9a1f2bc6b2338"
    //const apiKey = "e1e83a0462474f0ab82ed6990ec8efd1"
    const apiKey = process.env.NEWS_API_KEY;
    console.log("apiKey : ",apiKey);
    const [progress, setProgress] = useState(0)
  return (
    <>
      <div>
        <NavBar/> 
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress} 
        />
        <News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/>
        <News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business"/>
        <News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment"/>
        <News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health"/>
        <News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science"/>
        <News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports"/>
        <News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology"/>


          {/* <Link href="/"><News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/></Link> 
          <Link href="/business"><News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business"/></Link> 
          <Link href="/entertainment"><News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment"/></Link> 
          <Link href="/general"><News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/></Link> 
          <Link href="/health"><News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health"/></Link> 
          <Link href="/science"><News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science"/></Link> 
          <Link href="/sports"><News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports"/></Link> 
          <Link href="/technology"><News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology"/></Link>  */}
      
      </div>

    </>
  )
}
