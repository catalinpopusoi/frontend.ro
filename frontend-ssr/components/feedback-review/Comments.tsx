import React from 'react';
import styles from './comments.module.scss';
import CommentBlock from './CommentBlock';
import { Comment } from './comment.model';

interface CommentsProps {
  comments: Comment[];
}

export default function Comments(props: CommentsProps) {
  if (props.comments?.length === 0) return <h3>Nu exista comentarii pentru acest exercitiu</h3>;

  return (
    <div className={styles.comments}>
      <header>
        <h3>Comentarii</h3>
        <button className="btn btn--blue">Aproba tot</button>
        <button className="btn btn--danger">Respinge tot</button>
      </header>
      <section className="comments">
        {props.comments?.map(comment => <CommentBlock key={comment.id} {...comment} />)}
      </section>
    </div>
  )
}