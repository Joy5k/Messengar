import React from 'react';
import FriendList from './FriendList';
import Messages from './Messages';
import FriendsProfile from './Profile/FriendsProfile';
import './Messenger.css'
const Messenger = () => {
    return (
        <div>
            <div class="grid sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4">
                <div className='border h-screen'>
                <FriendList></FriendList>
  </div>
                <div className='col-span-2  '>
                    <Messages></Messages>
    </div>
                <div className=' sm:hidden md:hidden lg:block'>
                    <FriendsProfile></FriendsProfile>
    </div>

</div>

        </div>
    );
};

export default Messenger;