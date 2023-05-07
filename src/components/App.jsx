import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';

import user from '../data/user.json';
import data from '../data/data.json';

export default function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics items={data} />
    </div>
  );
}
