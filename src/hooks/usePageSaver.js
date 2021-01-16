//@ts-check
import { useEffect, useLayoutEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import useDidMount from './useDidMount';

/**
 * 
 * @param {string} path 
 */

const usePageSaver = (path) => {
    const { pathname } = useLocation();
    const p = path || pathname.replace('/', '');
    const [currentPage, setCurrentPage] = useState(() => localStorage.moviesArkPage ? JSON.parse(localStorage.moviesArkPage)[p] : 1);
    const didMount = useDidMount();

    useLayoutEffect(() => {
        if (localStorage.moviesArkPage) {
            const moviesArkPage = JSON.parse(localStorage.getItem('moviesArkPage'));
            const page = moviesArkPage[p];

            if (typeof moviesArkPage[p] !== undefined) {
                setCurrentPage(page);
            }
        } else {
            localStorage.setItem('moviesArkPage', JSON.stringify({
                [p]: currentPage
            }));
        }
    }, []);

    useEffect(() => {
        if (didMount) {
            const moviesArkPage = JSON.parse(localStorage.getItem('moviesArkPage'));

            localStorage.setItem('moviesArkPage', JSON.stringify({
                ...moviesArkPage,
                [p]: currentPage
            }));
        }
    }, [currentPage]);

    return { currentPage, setCurrentPage }

};

export default usePageSaver;
