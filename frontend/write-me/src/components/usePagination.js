import {useState} from 'react';

export const usePagination = (data, itemsPerPage) => {
    const [page, setPage] = useState(1);
    if(data === null) return;
    const maxPage = Math.ceil(data.length / itemsPerPage);

    const currentData = () => {
        const begin = (page - 1) * itemsPerPage;
        const end = begin + itemsPerPage;
        return data.slice(begin, end);
    };

    const handleChange = (event, value) => {
        setPage(value);
    };

    return { page, currentData, maxPage, handleChange };
};