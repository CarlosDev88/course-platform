import React, { useEffect } from "react";
import Banner from "../Organisms/Banner";
import banner_img from "../../img/banner.jpg";
import store from "../../redux/store";
import { getAllSpecialities } from "../../redux/actionsCreator";
import { connect } from "react-redux";
import Card from "../Organisms/Card";

const Specialities = ({ especialities }) => {
  useEffect(() => {
    store.dispatch(getAllSpecialities());
  }, []);
  return (
    <>
      <Banner
        color="first-color"
        imagen={{
          src: banner_img,
          alt: "Banner especialidades",
        }}
        title="Especialidades"
        subTitle="Domina una tecnologia con las rutas de aprendisaje que te ofrecemos"
      />
      {especialities && (
        <main className="ed-grid m-grid-3">
          {especialities.map(e => (
            <Card
              path="especialidades"
              picture={e.picture}
              name={e.name}
              key={e.id}
              cardId={e.id}
            />
          ))}
        </main>
      )}
    </>
  );
};

const mapStateToProps = state => ({
  especialities: state.especialityReducer.especialities,
});

export default connect(mapStateToProps, {})(Specialities);
