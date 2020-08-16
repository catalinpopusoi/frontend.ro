import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import Header from '~/components/header/Header.component';
import styles from '~/styles/pages/feedback-review.module.scss';


/**
 * TODO:
 * 1. Move components
 * 2. Add button actions
 * 3. Add link to commenter profile
 * 4. Create API functionality
 */

interface Comment {
  id: number;
  user: string;
  comment: string;
};

const MOCK_COMMENTS: Comment[] = [
  { id: 1, user: 'Pava', comment: 'Lorem ipsum dolor sit amet.' },
  { id: 2, user: 'Catalin Popusoi', comment: 'Pretium fusce id velit ut tortor pretium.' },
  { id: 3, user: 'George-Marian Morosac', comment: 'Nibh ipsum consequat nisl vel pretium lectus quam.' },
  { id: 4, user: 'Cristian Gatu', comment: 'Ac tincidunt vitae semper quis lectus nulla.' },
  { id: 5, user: 'Dragos Silion', comment: 'Viverra maecenas accumsan lacus vel facilisis.' },
];

function Comment(props: Comment) {
  return (
    <div className={styles.comment}>
      <header>
        <h4>
          <Link href="/bob" prefetch={false}>
            <a>
              <strong>{props.user}</strong>
            </a>
          </Link>
          <span> a lasat urmatorul comentariu</span>
        </h4>
        <button>&#128077;</button>
        <button>&#128078;</button>
        <button>&#128172;</button>
      </header>
      <p>
        {props.comment}
      </p>
    </div>
  )
}

function ExerciseArea() {
  return (
    <section className={styles.exercise}>
      <div className={styles.editor}>
        <p>Code goes here</p>
      </div>
      <div className={styles.feedback}>
        <header>
          <h3>Comentarii</h3>
          <button className="btn btn--blue">Aproba tot</button>
          <button className="btn btn--danger">Respinge tot</button>
        </header>
        <section className={styles.comments}>
          {MOCK_COMMENTS.map(comment => <Comment key={comment.id} {...comment} />)}
        </section>
      </div>
    </section>
  )
}

export default function FeedbackReview() {
  return (
    <>
      <Head>
        <title>Review Feedback | FrontEnd.ro</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.page}>
        <h1>
          Feedback pentru exercitiul 1
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Pretium fusce id velit ut tortor pretium. Turpis egestas integer eget 
          aliquet nibh praesent tristique. Netus et malesuada fames ac. Eget mauris 
          pharetra et ultrices neque. Nibh ipsum consequat nisl vel pretium lectus 
          quam. Ac tincidunt vitae semper quis lectus nulla. Viverra maecenas accumsan 
          lacus vel facilisis. Diam maecenas ultricies mi eget mauris pharetra. 
          Nullam vehicula ipsum a arcu.
        </p>
        <ExerciseArea />
      </main>
    </>
  );
}
