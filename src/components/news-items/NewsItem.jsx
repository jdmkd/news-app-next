'use client';
import "../../app/globals.css";
import React from 'react'
import Image from 'next/image';
import Link from 'next/link'
import { split } from "postcss/lib/list";

export default function NewsItem(props){
        let { title, description, imageUrl, newsUrl, author, date, source } = props;
        return (
            <div className="my-3">
                <div className="card" style={{background:'yellow',overflow:"hidden",height:'30rem',}}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        position: 'absolute',
                        right: '0'
                    }
                    }> 
                        <span className="badge rounded-pill bg-danger"> {source} </span>
                    </div>
                    {/* <Image src={!imageUrl ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg" : imageUrl}  */}
                    
                    <Image src={"https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg"}
                            className="card-img-top" 
                            alt="..."
                            width={200} height={200} />
                            
                    <div className="card-body">
                        <h5 className="card-title">{title.split(' ').slice(0, 10).join(' ')}...</h5>
                        <p className="card-text">{description.split(' ').slice(0, 20).join(' ')}...</p>
                        <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on  {new Date(date).toGMTString()}</small></p>
                        <Link rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</Link>
                    </div>
                </div>
            </div>
        )
     
};
