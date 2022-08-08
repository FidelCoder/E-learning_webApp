import React, { useRef } from "react";
import { container } from "reactstrap";
import "./header,css";

const navLinks = [
    {
        display: 'Home',
        url : '#'
    },
    {
        display: "About",
        url: '#'
    },
    {
        display: 'Courses',
        url: 'Pages'
    },
    {
        display: 'Blog',
        url: '#'
    }
]

const Header = () => {
    const menuRef = useRef();

    const menuToggle = () => menuRef.current.classList.toggle('active__menu)');
    return(
        <header className="header">
            <container>
                <div className="navigation d-flex align-items-center justify">
                    <div className="logo">
                        <h2 className="d-flex align-items-center gap-1">
                            <i className="ri-pantone-line"></i> Learners.
                        </h2>
                    </div>
                    <div className="nav d-flex align-items-center gap-5">
                        <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
                            <ul className="nav__list">
                                {navLinks.map((item,index) => (
                                    <li key={index} className="nav__item">
                                        <a href={item.url}>item.display</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="nav__right">
                            <p className="mb-0 d-flex align-items-center gap-2">
                                <i class="ri-phone-line"></i> 0759280875
                            </p>
                        </div>
                    </div>
                    
                </div>
            </container>
        </header>
    )
}