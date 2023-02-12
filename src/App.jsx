import { Header } from './components/Header'
import './global.css'
import styles from './App.module.css';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

// author: {avatarUrl: "" , name: "" , role: ""}
// publishedAt : Date
// content : " "

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandess',
      role: 'CTO @Rocketseat'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date ('2023-02-12 09:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/xH4rdzn.png',
      name: 'Igor Coelho',
      role: 'Dev Front-End'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de me inscrever no Ignite da Rocketseat, e estou curtindo muito as aulas, em breve posto meus novos projetos 🚀'},
    ],
    publishedAt: new Date ('2023-02-10 09:00:00'),
  },
];



export function App() {
  return (
    <div>
    <Header/>
    <div className={styles.wrapper}>
      <Sidebar/>
      <main>
      {posts.map(post => {
        return ( <Post 
         author= {post.author}
         content= {post.content}
         publishedAt= {post.publishedAt}
        />
        ) 
      })}
      </main>
    </div>
    </div>
  )
}


