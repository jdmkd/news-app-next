'use client';
import "../../app/globals.css";
import React from 'react'
import Image from 'next/image';
import Link from 'next/link'

export default function NavBar(){

    return (
        <>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link href='/' className="navbar-brand">NewsApp</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item"><Link href="/" className="nav-link" aria-current="page">Home</Link></li>
                            <li className="nav-item"><Link href="/business" className="nav-link">Business</Link></li>
                            <li className="nav-item"><Link href="/entertainment" className="nav-link">Entertainment</Link></li>
                            <li className="nav-item"><Link href="/general" className="nav-link">General</Link></li>
                            <li className="nav-item"><Link href="/health" className="nav-link">Health</Link></li>
                            <li className="nav-item"><Link href="/science" className="nav-link">Science</Link></li>
                            <li className="nav-item"><Link href="/sports" className="nav-link">Sports</Link></li>
                            <li className="nav-item"><Link href="/technology" className="nav-link">Technology</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )

};
