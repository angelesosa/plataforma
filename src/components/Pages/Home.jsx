import React, { useEffect } from "react";
import Banner from "../Organisms/Banner";
import { connect } from "react-redux";
import store from "../../redux/store";
import { getAllPosts } from '../../redux/actionCreators';
import Publication from '../Organisms/Publication';

const Home = ({ posts }) => {

  useEffect(() => {
    store.dispatch(getAllPosts());
  }, [])

  return (
    <>
      <Banner
        color="dark-color"
        image={{
          src: "https://i.blogs.es/3cc483/1-hsisluifmo6kblfpoktlow/450_1000.jpeg",
          alt: "Cursos"
        }}
        title="Bienvenido a la experiencia mas increible en educacion online"
        subtitle="lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem "
        home
        poster="https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-12/banner-navidad-v11.png"
      />
      <main className="ed-grid m-grid-2">
        <div className="l-section">
          <h2>Ultimas publicaciones</h2>
          {posts ? (
            <div>
              {posts.map(p => (
                <Publication 
                title={p.title}
                author={p.author}
                date={p.date}
                content={p.content}
                key={p.id}/>
              ))}
            </div>
          ) : (
            <p>No existen publicaciones</p>
          )}
        </div>
        <div>
          <h3> Lista de categorias </h3>
          <ul className="feature-list">
            <li><span>React.js</span></li>
            <li><span>React native</span></li>
            <li><span>Angular</span></li>
            <li><span>View</span></li>
            <li><span>Html</span></li>
            <li><span>Css</span></li>
          </ul>
        </div>
      </main>
    </>
  )
};

const mapStateToProps = state => ({
  posts: state.postsReducer.posts
});

export default connect(mapStateToProps, {})(Home);
