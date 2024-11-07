import { useState } from 'react';
import s from './post.module.css';
import { IconButton } from 'shared/components/IconButton';
import { ReactComponent as heart } from '../../../assets/icons/heart.svg';

type StatsButtonProps = {
  likes: number;
  views: number;
};

export const StatsButtons = (props: StatsButtonProps) => {
  const [likes, setLikes] = useState(props.likes);
  const [views, setViews] = useState(props.views);

  const onLikeClick = () => {
    setLikes(likes + 1);
  };
  const onViewClick = () => {
    setViews(views + 1);
  };

  return (
    <div className={s.stats}>
      <IconButton icon={heart}> {likes} </IconButton>
      <button className={s.moreOptionsButton}> Viwes: 234</button>
      <button className={s.moreOptionsButton} onClick={onLikeClick}>
        Likes: {likes}
      </button>
      <button className={s.moreOptionsButton}> Comments: 234</button>
      <button className={s.moreOptionsButton}> Bookmarks: 23432</button>
    </div>
  );
};
