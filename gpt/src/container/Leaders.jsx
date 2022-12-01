import React from 'react';
import { Section } from '../components';



const Leaders = () => {
    return (
    <Section>
        <h2>Become tomorrow's leader</h2>
        <div className='section__leaders'>
            <p><span>No bosses.</span><br /> At Girl Power Talk everyone is equal, this means that there are no bosses or managers.
                Instead we have dedicated mentors that help guide our young leaders. We encourage you to try, to fail and learn, 
                and also to work accross departments. So if you dont want to be employee number thousand, but instead be part 
                of something that is truly aiming to change the world, then Girl Power Talk is for you. Our young leaders comes from
                all over the world, and if you share our state of mind, you can become one of them.
            </p>
            <img 
                src="https://girlpowertalk.com/wp-content/uploads/2022/02/Rectangle-163.jpg?id=8339" 
                alt="People celebrating" 
                className='leaders__img'
                />
        </div>
        <h2>Our young leaders are from all over the world</h2>
    </Section>
)}

export default Leaders;

