import {useEffect, useState } from 'react';

function useHash (actualHash) {
    const [hash, setHash] = useState('');
    
    if(actualHash !== hash) {
        setHash(actualHash);
    }

    useEffect(()=>{
        let el = hash && document.querySelector(hash);
        el && el.scrollIntoView({behavior: 'smooth'});
    });
}

export default useHash;