import React from 'react';

import Page from './page';

export default function index({data, icon}: {data:{title:String,description:any}, icon:any}) {
    return <Page data={data} icon={icon}/>;
}