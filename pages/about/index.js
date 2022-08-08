import React from 'react';
import Router from 'next/router';
import { MainLayout } from '../../components/main-layout';

export default function About(){

    return(

       <MainLayout title={'About us page'}>
            <h1>About page</h1>
            <button onClick={()=>Router.push('/')}>Go back to Home</button>
       </MainLayout>
           
        
        
    )
}