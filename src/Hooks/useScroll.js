import {useState, useEffect} from 'react';

function useScroll(element) {
    const [scroll, setScroll] = useState(0);

    window.addEventListener('scroll', () => {
        setScroll(window.scrollY);
    });

    useEffect(()=>{
        element.current
            .querySelectorAll('[id]')
            .forEach((el) => {
                if(el.offsetTop === scroll) {
                    // let host = window.location.host;
                    window
                        .location
                        .replace(`http://localhost:3000/#${el.id}`);
                }
            });
    });
}

export default useScroll;