import SocialContact from '@/app/components/SocialContact';
import FormContact from '@/app/shared components/FromContact';
import SectionTitle from '@/app/shared components/SectionTitle';
import React from 'react';

const Contact = () => {
    return (
        <section>
            {/* <SocialContact/> */}
            <div className='lg:-mt-20'>
            <SectionTitle title={'Feel Free To Ask'}/>
            </div>
            <FormContact/>
        </section>
    );
};

export default Contact;