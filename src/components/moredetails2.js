 










import * as React from 'react';
import Card from '@mui/material/Card';
import { Typography } from '@mui/material';
import ReadMoreLess2 from '../reducers/readmore2';
import FreshProperty from './freshProperties';
import MultiActionAreaCard from "../components/PplrOwnerPeoperties";
import { Container,Row,Col } from 'react-bootstrap';


export default function MoreDetails2() {
    const items = [
        "Resort like Ambience with Premium Amenities",
        "Global off-site construction technology",
        "Over 60% Thoughtful Green Spaces",
        "OC received 5 months ahead of schedule",
        "Ecopolis - 13.1 kms",
        "Manyata Embassy Business Park - 14.0 kms",
        "Doddabalapur Road Industrial Estate - 15.9 kms",
        "BMS Institute of Technology - 2.2 kms",
        "Srishti Institute of Art, Design & Technology - 3.7 kms",
        "Seshadripuram First Grade College - 4.4 kms 9",
        "Sir M. Visvesvaraya Institute of Technology - 9.5 kms",
        "Kendriya Vidyalaya CRPF - 1.7 kms",
        "National Public School - 4.5 kms",
        "Omega Multispecialty Hospital - 4.5 kms",
        "Aster CMI - 13.5 kms"
    ];

    return (
        <>
        <Card sx={{ maxWidth: 945, marginLeft: 6, marginTop: 5, bgcolor: 'light', border: '1px solid lightgray' }}>
            <h3 style={{ marginTop: '30px', fontWeight: 'bold',marginLeft: '1rem' }}>Why buy in this Project?</h3>
            <ReadMoreLess2 itemsToShow={3}>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ReadMoreLess2>
        </Card>
 



</>

    );
}
