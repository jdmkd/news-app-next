'use client';
import "../../app/globals.css";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link'

const Spinner = ()=> {
        return (
            <div className="text-center">
                <Image className="my-3" 
                        src='/images/loading.gif'
                        alt="loading"
                        unoptimized={true}
                        width={20} height={20}
                />

            </div>
        )
}

export default Spinner
