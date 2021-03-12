import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getEspeciality } from "../../redux/actionsCreator";
import store from "../../redux/store";
import Banner from "../Organisms/Banner";

const Speciality = ({ speciality }) => {
  useEffect(() => {
    store.dispatch(getEspeciality(1));
  }, []);
  return (
    <>
      {speciality && (
        <>
          <Banner
            color="dark-color"
            imagen={{
              src:
                "https://edteam-media.s3.amazonaws.com/courses/small/61e5a210-8dab-412e-a6dc-802c070cc18c.jpg",
              alt: "home de la pagina",
            }}
            title={speciality.data.name}
            subTitle={speciality.data.subtitle}
            info={speciality.data.information}
            courseBanner
            poster={speciality.data.picture}
          />
          <main className="ed-grid lg-grid-10">
            <div className="lg-cols-7">
              <div className="course-features ed-grid lg-grid-3 l-block s-border s-pxy-2 s-radius s-bg-white s-shadow-bottom row-gap ">
                <div>
                  <h3>¿Qué aprenderás?</h3>
                  <ul>
                    {speciality.data.abilities.map(a => (
                      <li key={a.id}>{a.description}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3>Cónocimientos previos</h3>
                  <ul>
                    {speciality.data.knowledge.map(k => (
                      <li key={k.id}>{k.description}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3>Nivel:</h3>
                  <p>{speciality.data.level}</p>
                </div>
              </div>
              <h2>Temario de la especialidad</h2>

              <div className="s-border s-pxy-2 lg-pxy-4 s-radius s-bg-white l-block l-section s-shadow-bottom">
                {speciality.data.courses.map(c => (
                  <div className="course-class l-section" key={c.id}>
                    <div className="ed-grid m-grid-3">
                      <img src={c.picture} alt={c.name}></img>
                      <div className="m-cols-2">
                        <h3>{c.name}</h3>
                        <p>{c.information}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </main>
        </>
      )}
    </>
  );
};

const mapStateToProps = state => ({
  speciality: state.especialityReducer.speciality,
});

export default connect(mapStateToProps, {})(Speciality);
