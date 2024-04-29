import React, { useState } from 'react';
import { Button } from '@mui/material';

const ReadMoreLess2 = ({ children, itemsToShow }) => {
    const [expanded, setExpanded] = useState(false);
    const showItems = expanded ? children : children.slice(0, itemsToShow);

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    return (
        <>
            <ul>{showItems}</ul>
            <Button onClick={toggleExpanded} sx={{ mt: 2 ,color:'black'}}>
                {expanded ? 'Read Less' : '+13Read More'}
            </Button>
        </>
    );
};

export default ReadMoreLess2;
