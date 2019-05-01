import {useState, useEffect} from 'react';

function useScroll(element) {
    let [scroll, setScroll] = useState(0);

    window.addEventListener('scroll', () => {
        setScroll(window.scrollY);
    });

    useEffect(()=>{
        console.log(element.current);
        console.log(scroll);
    });
}

export default useScroll;


// const sectionList = layout.querySelectorAll('[id]');
// console.log(sectionList)
// window.addEventListener('scroll', (e) => {

//     let el = document.querySelector('#travels');
//     let menu = document.querySelector('.nav-menu');
//     let menuHeight = menu.clientHeight;
//     let elPositionTop = el.offsetTop - menuHeight;
//     let scrollPosition = window.scrollY;

//     if(scrollPosition === elPositionTop) {
//         window.location.assign(`http://localhost:3000/#travels`)
//     }

// });