import React from 'react';
import styles from './exercise-area.module.scss';
import CommentBlock from './CommentBlock';
import { Comment } from './interfaces';

const MOCK_COMMENTS: Comment[] = [
  { id: 1, user: 'Pava', comment: 'Lorem ipsum dolor sit amet.' },
  { id: 2, user: 'Catalin Popusoi', comment: 'Pretium fusce id velit ut tortor pretium.' },
  { id: 3, user: 'George-Marian Morosac', comment: 'Nibh ipsum consequat nisl vel pretium lectus quam.' },
  { id: 4, user: 'Cristian Gatu', comment: 'Ac tincidunt vitae semper quis lectus nulla.' },
  { id: 5, user: 'Dragos Silion', comment: 'Viverra maecenas accumsan lacus vel facilisis.' },
];

export default function ExerciseArea() {
  return (
    <section className="exercise-area">
      <div className={styles.editor}>
        <p>Code goes here</p>
      </div>
      <div className={styles.feedback}>
        <header>
          <h3>Comentarii</h3>
          <button className="btn btn--blue">Aproba tot</button>
          <button className="btn btn--danger">Respinge tot</button>
        </header>
        <section className="comments">
          {MOCK_COMMENTS.map(comment => <CommentBlock key={comment.id} {...comment} />)}
        </section>
      </div>
    </section>
  )
}