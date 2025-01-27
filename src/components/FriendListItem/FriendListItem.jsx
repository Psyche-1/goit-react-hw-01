import css from './FriendListItem.module.css'

export default function FriendListItem({ friend }) {
  return (
    <div>
        <img src={friend.avatar} alt="Avatar" width="48" />
          <p>{friend.name}</p>
          <p className = { friend.isOnline ? css.online : css.offline }>{ friend.isOnline ? "Online" :"Offline" }</p>
    </div>
  );
};