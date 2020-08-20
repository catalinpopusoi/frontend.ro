import React from 'react';
import Link from 'next/link';
import { Comment } from './comment.model';
import styles from './comment-block.module.scss';

export default function CommentBlock(props: Comment) {
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