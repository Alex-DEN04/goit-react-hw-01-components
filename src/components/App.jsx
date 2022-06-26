import Profile from "./Profile/Profile";
import user from "../user.json";
import Statistics from "./Statistics/Statistics";
import data from "../data.json";
import FriendList from "./FriendList/FriendList"
import friends from "../friends.json"
import TransactionHistory from "./TransactionHistory/TransactionHistory"
import transactions from "../transactions.json"

export const App = () => {
  const { username, tag, location, avatar, stats } = user;
  return (
    <Profile
      userName={username}
      tag={tag}
      location={location}
      avatar={avatar}
      stats={stats}
    />
  )
};

export const AppStatistic = () => {
  const statisticTitle = true;
  return (
    statisticTitle ? <Statistics
      title="Upload stats"
      stats={data} /> : <Statistics
      stats={data} />
  )
};

export const AppFriendList = () => {
  return (
    <FriendList
      items={friends}
    />
  )
};

export const AppTransactionHistory = () => {
  return (
    <TransactionHistory items={transactions}/>
  )
}