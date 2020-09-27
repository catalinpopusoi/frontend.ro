import React from 'react';
import Link from 'next/link';
import { faThumbsUp, faThumbsDown, faComments } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Comment } from './comment.model';
import styles from './CommentBlock.module.scss';

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
        <button type="button">
          <FontAwesomeIcon icon={faThumbsUp} />
        </button>
        <button type="button">
          <FontAwesomeIcon icon={faThumbsDown} />
        </button>
        <button type="button">
          <FontAwesomeIcon icon={faComments} />
        </button>
      </header>
      <p>
        {props.comment}
      </p>
    </div>
  )
}