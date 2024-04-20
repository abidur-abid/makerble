import LineChart from '@/app/components/LineChart';
import TotalPatient from '@/app/components/Totalpatient';
import SectionTitle from '@/app/shared components/SectionTitle';
import React from 'react';


const DoctorPortal = () => {
    return (
        <section>
            <LineChart/>
            <SectionTitle title={'All Patient'}/>
            <TotalPatient/>
        
        </section>
    );
};

export default DoctorPortal;