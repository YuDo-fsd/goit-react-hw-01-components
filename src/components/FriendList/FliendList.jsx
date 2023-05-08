import FriendListItem from './FriendListItem';

import friends from '../../data/friends.json';

export default function FriendList({ items }) {
  return (
    <section className="friendsSection">
      <ul className="friend-list">
        <FriendListItem items={friends} />
      </ul>
    </section>
  );
}
