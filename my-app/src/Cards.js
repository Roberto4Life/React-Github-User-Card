import React from 'react';
import './index.css'

function Cards(props) {
    return (
        <>
            {props.doggos.map(doggos => (
                <div key={doggos.id} className='body'>
                    <img src={doggos.avatar_url} alt={doggos.login} />
                    <div className='cardy'>
                        <h3>{doggos.login}</h3>
                        <p>GitHub: {doggos.html_url}</p>
                        <p>Followers: {doggos.followers_url.length}</p>
                        <p>Following: {doggos.following_url.length}</p>
                    </div>
                </div>
            ))}
        </>
    );
}
export default Cards;