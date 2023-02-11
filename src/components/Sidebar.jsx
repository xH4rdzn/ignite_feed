import styles from './Sidebar.module.css';
import {PencilLine} from 'phosphor-react';

export function Sidebar () {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src="https://images.unsplash.com/photo-1525498128493-380d1990a112?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"/>
      <div className={styles.profile}>
        <img className={styles.avatar} src="https://3.bp.blogspot.com/-fhGvWsdwCUs/Teo8S-JjsyI/AAAAAAAAAAQ/johi8LoA744/s113/pMxpV.png"/>
        <strong>Igor Coelho</strong>
        <span>Front-End Developer</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20}/>
          Editar seu Perfil
          </a>
      </footer>
    </aside>
  )
}