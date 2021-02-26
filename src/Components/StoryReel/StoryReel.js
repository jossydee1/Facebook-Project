import React from 'react';
import './StoryReel.css'
import Story from '../Story/Story';
import { useStateValue } from '../StateProvider';

function StoryReel() {
    const [{user}, dispatch] = useStateValue ();

    return (
        <div className='storyReel'>
            <Story 
                image='https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2014/11/8/1415445010984/Mark-Zuckerberg-012.jpg?width=445&quality=45&auto=format&fit=max&dpr=2&s=7c021d42242605824b6c267faf400a50'
                profileSrc={user.photoURL}
            title={user.displayName}
            />
        </div>
    )
}

export default StoryReel
