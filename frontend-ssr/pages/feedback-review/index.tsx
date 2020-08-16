import React from 'react';
import Head from 'next/head';

import Header from '~/components/header/Header.component';
import styles from '~/styles/pages/feedback-review.module.scss';
import ExerciseArea from '~/components/feedback-review/ExerciseArea';


/**
 * TODO:
 * 1. Move components - DONE
 * 2. Add button actions
 * 3. Add link to commenter profile - DONE, link to bob for now
 * 4. Create API functionality
 */

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
