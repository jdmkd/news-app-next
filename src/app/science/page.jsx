"use client"
import React, { useState } from 'react'
import NavBar from '@/components/navbar/NavBar';
import News from '@/components/news-page/News';
import LoadingBar from 'react-top-loading-bar';

export default function Home() {
    const pageSize = 5;
    // const apiKey = "7df9b0fc1b994abdb3d9a1f2bc6b2338"
    // const apiKey = "e1e83a0462474f0ab82ed6990ec8efd1"
    const apiKey = process.env.NEWS_API_KEY;
    // console.log("apiKey : ",apiKey);
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
        <News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science"/>
        
      </div>

    </>
  )
}