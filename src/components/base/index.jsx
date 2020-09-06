import React from 'react';


// This is the base structure for the websites page. For example,
// this page will consist of layout that all other pages share like:
// NavBar/ sidebar/ footer/ etc.!

export default function BaseLayout({ children, title }) {
    document.getElementsByTagName('title')[0].innerHTML = title;
    return (
        <div className="wrapper" >
            <h1>{title}</h1>
            {children}
        </div>
    );
}