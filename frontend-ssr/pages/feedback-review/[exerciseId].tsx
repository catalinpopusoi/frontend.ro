import React, { useState, useEffect } from 'react';
import Head from 'next/head';

import Header from '~/components/header/Header.component';
import styles from '~/styles/pages/feedback-review.module.scss';
import { Exercise } from '../api/exercises/exercise.model';
import NotFoundPage from '../404';
import Editor from '~/components/feedback-review/Editor';
import Comments from '~/components/feedback-review/Comments';
import { Comment } from '~/components/feedback-review/CommentBlock';

interface FeedbackReviewProps {
  exerciseId: string;
}

const initialExerciseState: Exercise = {
  id: null,
  title: '',
  description: '',
  solution: '',
};

export default function FeedbackReview(props: FeedbackReviewProps) {
  const { exerciseId } = props;

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [exercise, setExercise] = useState<Exercise>(initialExerciseState);
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    const getData = async () => {
      const exerciseResp = await fetch(`/api/exercises/${exerciseId}`);
      if (exerciseResp.status === 200) {
        const exerciseJson = await exerciseResp.json();
        setExercise(exerciseJson);
      }

      const commentsResp = await fetch(`/api/comments/${exerciseId}`);
      if (commentsResp.status === 200) {
        const commentsJson = await commentsResp.json();
        setComments(commentsJson);
      }

      setIsLoading(false);
    };

    getData();
  }, []);

  if (isLoading) return 'Loading...';
  if (!exercise || !exercise.id) return <NotFoundPage />;

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

FeedbackReview.getInitialProps = async ({ query }) => {
  const { exerciseId } = query;

  return {
    exerciseId,
  };
};
