import {useState, useEffect} from 'react';

function useScroll(element) {
    const [scroll, setScroll] = useState(0);

    window.addEventListener('scroll', () => {
        setScroll(window.scrollY);
    });

    useEffect(() => {
        element.current
            .querySelectorAll('[id]')
            .forEach((el) => {
                if(el.offsetTop === scroll) {
                    window
                        .location
                        .replace(`/#${el.id}`);
                }
            });
    });
}

export default useScroll;