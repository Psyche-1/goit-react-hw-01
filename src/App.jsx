import './App.css'
import Profile from './components/Profile/Profile'
import FriendList from './components/FriendList/FriendList'
import TransactionHistory from './components/TransactionHistory/TransactionHistory'

import userData from './userData.json'
import friends from './friends.json'
import transactions from './transactions.json'

const App = () => {
  return (
    <>
      <Profile
        name={userData.userData.username}
        tag={userData.userData.tag}
        location={userData.userData.location}
        image={userData.userData.avatar}
        stats={userData.userData.stats}
      />
      
      <FriendList friends={friends.friends} />

      <TransactionHistory items={transactions.transactions} />
    </>
    
  );
};


export default App
