import css from "./Profile.module.css"

export default function Profile({ name, tag, location, image, stats }) {
  return (
<div className={css.wrapper}>
  <div>
    <img
      src={image}
          alt="User avatar"
          className={css.avatar}
    />
    <p>{name}</p>
    <p>@{tag}</p>
        <p>{location}</p>
  </div>

  <ul className={css.stats}>
    <li className={css.stat}>
      <span>Followers</span>
      <span>{stats.followers}</span>
    </li>
    <li className={css.stat}>
      <span>Views</span>
      <span>{stats.views}</span>
    </li>
    <li className={css.stat}>
      <span>Likes</span>
      <span>{stats.likes}</span>
    </li>
  </ul>
</div>


  );
};