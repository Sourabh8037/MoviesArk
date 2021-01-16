import { useLayoutEffect } from 'react';

const useDocumentTitle = (title) => {
    useLayoutEffect(() => {
        if (title) {
            document.title = title;
        } else {
            document.title = 'Movies-Ark | Movie Browser';
        }
    }, [title]);
};

export default useDocumentTitle;