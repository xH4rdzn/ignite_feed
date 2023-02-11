import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post () {
  return (
   <article className={styles.post}>
    <header>
      <div className={styles.author}>
      <Avatar src='https://3.bp.blogspot.com/-fhGvWsdwCUs/Teo8S-JjsyI/AAAAAAAAAAQ/johi8LoA744/s113/pMxpV.png'/>
      <div className={styles.authorInfo}>
        <strong>Igor Coelho</strong>
        <span>Front-End Developer</span>
      </div>
      </div>
      <time dateTime='2023-02-11 17:31'>Publicado há 1h</time>
    </header>
    <div className={styles.content}>
      <p>Fala galeraa 👋</p>
      <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
      <p>👉{' '} <a href="">ane.design/doctorcare</a></p>
      <p>
        <a href="">#novoprojeto </a>{' '}
      <a href="">#nlw</a>{' '}
      <a href="">#rocketseat</a>
      </p>
    </div>

    <form className={styles.commentForm}>
      <strong>Deixe seu feedback !</strong>
      <textarea
      placeholder='deixe um comentário'
      />
      <footer>
      <button type="submit">Publicar</button>
      </footer>
    </form>

    <div className={styles.commentList}>
      <Comment/>
      <Comment/>
      <Comment/>
    </div>
   </article>
  )
}