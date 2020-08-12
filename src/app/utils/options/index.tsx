import React from 'react';
import Page from './page';

export default function index({data}: {data:{question:String,
                                             options:string[]}}) {
    return <Page data={data}/>;
}
