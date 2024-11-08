import { useState } from 'react';
import s from './post.module.css';
import { IconButton } from 'shared/components/IconButton';
import LikeIcon from '../../../assets/icons/heart.svg';
import ViewIcon from '../../../assets/icons/eye.svg';
import CommentIcon from '../../../assets/icons/comment.svg';
import BookmarkIcon from '../../../assets/icons/bookmark.svg';


type StatsButtonProps = {
  likes: number;
  views: number;
  comments: number;
  bookmarks: number;
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
      <IconButton onClick={onLikeClick}> <LikeIcon/> {likes} </IconButton>
      <IconButton onClick={onViewClick}> <ViewIcon/> {views} </IconButton>
      <IconButton> <CommentIcon/> {props.comments} </IconButton>
      <IconButton> <BookmarkIcon/> {props.bookmarks} </IconButton>
    </div>
  );
};
