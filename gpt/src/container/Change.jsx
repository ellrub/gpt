import React from 'react';
import { Section } from '../components';



const Change = () => {
    return (
    <Section>
        <h2>"Equal opportunities"</h2>
        <div className='section__change'>
            <p><span>Be bold, be you.</span><br /> Girl Power Talk is aiming for equal opportinities 
                not only for women, but also men and nonbinary individuals. We do this through meaningfull education so that
                people can learn confidently and build a carrer full of purpose. We want to unlock your full potential, so that you
                confidently can become a force for change.
            </p>
            <img 
                src="https://girlpowertalk.com/wp-content/uploads/2022/02/IMG_7549-1.jpg?id=8344" 
                alt="Arms displaying diversity" 
                className='change__img'
                />
        </div>
    </Section>
)}

export default Change;