import React from 'react';
import Head from 'next/head';

import Header from '~/components/header/Header.component';
import styles from '~/styles/pages/feedback-review.module.scss';
import { Exercise } from '../api/exercises/exercise.model';
import NotFoundPage from '../404';
import Editor from '~/components/feedback-review/Editor';
import Comments from '~/components/feedback-review/Comments';
import { Comment } from '~/components/feedback-review/CommentBlock';

interface FeedbackReviewProps {
  exercise: Exercise;
  comments: Comment[];
}

export default function FeedbackReview(props: FeedbackReviewProps) {
  const { exercise, comments } = props;
  if (!exercise) return <NotFoundPage />;

  return (
    <>
      <Head>
        <title>Review Feedback | FrontEnd.ro</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.page}>
        <h1>
          Exercitiu:
          {' '}
          <strong>{exercise.title}</strong>
        </h1>
        <p>
          {exercise.description}
        </p>
        <Editor solution={exercise.solution} />
        <Comments comments={comments} />
      </main>
    </>
  );
}

export async function getServerSideProps({ params }) {
  const exerciseResp = await fetch(`${process.env.HOST}/api/exercises/${params.exerciseId}`);
  /** This needs to be dispatched only for admin users */
  const commentsResp = await fetch(`${process.env.HOST}/api/comments/${params.exerciseId}`);

  let exercise = {};
  let comments = [];

  if (exerciseResp.status === 404) return { props: exercise };

  exercise = await exerciseResp.json();
  comments = await commentsResp.json();

  return {
    props: {
      exercise,
      comments,
    },
  };
}
