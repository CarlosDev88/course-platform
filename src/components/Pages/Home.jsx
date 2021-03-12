import React, { useEffect } from "react";
import { connect } from "react-redux";
import store from "../../redux/store";
import { getAllPost } from "../../redux/actionsCreator";
import Banner from "../Organisms/Banner";
import Publication from "../Organisms/Publication";

const Home = ({ posts }) => {
  useEffect(() => {
    store.dispatch(getAllPost());
  }, []);
  return (
    <>
      <Banner
        color="dark-color"
        imagen={{
          src: "",
          alt: "home de la pagina",
        }}
        title="Bienvenido a la experiencia de aprendisaje"
        subTitle="cada curso esta desarrollado para aprender  de la  forma mas efectiva y rapida"
        home
        poster="https://edteam-media.s3.amazonaws.com/courses/small/61e5a210-8dab-412e-a6dc-802c070cc18c.jpg"
      />

      <main className="ed-grid m-grid-3">
        <div className="l-section m-cols-2">
          <h2>Ultimas publicaciones</h2>
          {posts ? (
            <div>
              {posts.map(p => (
                <Publication
                  key={p.id}
                  tittle={p.tittle}
                  author={p.author}
                  fecha={p.fecha}
                  content={p.content}
                />
              ))}
            </div>
          ) : (
            <p>No existen publicaciones recientes</p>
          )}
        </div>
        <div>
          <h3>lista de categorías</h3>
          <ul className="feature-list">
            <li>
              <span>React</span>
            </li>
            <li>
              <span>Java</span>
            </li>
            <li>
              <span>Php</span>
            </li>
            <li>
              <span>HTML</span>
            </li>
            <li>
              <span>Css</span>
            </li>
            <li>
              <span>JavaScript</span>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

const mapStateToProps = state => ({
  posts: state.postReducer.posts,
});

export default connect(mapStateToProps, {})(Home);
