import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment () {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://3.bp.blogspot.com/-fhGvWsdwCUs/Teo8S-JjsyI/AAAAAAAAAAQ/johi8LoA744/s113/pMxpV.png"/>
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Lucas Silva</strong>
              <time>Cerca de 2h atrás</time>
            </div>
            <button title='Deletar Comentário'>
              <Trash size={24}/>
            </button>
          </header>
          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>
        <footer>
          <button>
            <ThumbsUp/>
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}