import Education from '@/app/components/Education';
import SectionTitle from '@/app/shared components/SectionTitle';
import React from 'react';

const EducationInfo = () => {
    return (
        <section className='lg:-mt-20 '>
            <SectionTitle title={'My Education'}/>
            <Education/>
        </section>
    );
};

export default EducationInfo;