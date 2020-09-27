import React from 'react';
import styles from './Editor.module.scss';

/**
 * At the moment, the solution is a simple string.
 * This can be changed when integrating the editor functionality.
 */

interface EditorProps {
  solution: String;
}

export default function Editor(props: EditorProps) {
  return (
    <div className={styles.editor}>
      <p>{props.solution}</p>
    </div>
  )
}