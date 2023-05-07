import PropTypes from 'prop-types';

import css from './FriendList.module.css';

export default function FriendList({ items }) {
  return (
    <section className="friendsSection">
      <ul className="friend-list">
        {items.map(item => (
          <li key={item.id} className={css.item}>
            <p className="status">
              {item.isOnline === true ? (
                <span>&#128994;</span>
              ) : (
                <span>&#128308;</span>
              )}
            </p>
            <img className={css.avatar} src={item.avatar} alt={item.name} />
            <p className="name">{item.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

FriendList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
