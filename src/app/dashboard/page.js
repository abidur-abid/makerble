'use client'
import React from 'react';
import DashboardHero from '../components/DashboardHero';
import TotalCount from '../components/TotalCount';
import useAuth from '@/authentication/useAuth';


const Dashboard = () => {

   const {user, logout} = useAuth();
    const { displayName, email } = user || {};
    console.log(user)

    return (
        <section className='mt-16 lg:mt-0'>
            <DashboardHero/>
            
           {
            email === 'sadik.jkkniu@gmail.com' && <TotalCount/>
            
           }
        </section>
    );
};

export default Dashboard;