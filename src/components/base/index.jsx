import React from 'react';
import NavigationBar from '../styled/navigation'
import Main from '../styled/main';


// This is the base structure for the websites page. For example,
// this page will consist of layout that all other pages share like:
// NavBar/ sidebar/ footer/ etc.!

export default function BaseLayout({ children, title }) {
    document.getElementsByTagName('title')[0].innerHTML = title;
    return (
        <>
            <NavigationBar />
            <Main.Wrapper>
                <h1>{title}</h1>
                {children}
            </Main.Wrapper>
        </>
    );
}