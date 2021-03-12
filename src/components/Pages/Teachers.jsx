import React, { useEffect } from "react";
import Banner from "../Organisms/Banner";
import banner_img from "../../img/banner.jpg";
import store from "../../redux/store";
import { getAllTeachers } from "../../redux/actionsCreator";
import { connect } from "react-redux";
import Teacher from "../Organisms/Teacher";

const Teachers = ({ match, teachers }) => {
  useEffect(() => {
    store.dispatch(getAllTeachers());
  }, [match]);
  return (
    <>
      <Banner
        color="third-color"
        imagen={{
          src: banner_img,
          alt: "Banner profesores",
        }}
        title="Nuestros profesores"
        subTitle="Somos un equipo altamente calificado para guiarte en tu proseso de
      aprendisaje"
      />
      {teachers.map && (
        <main className="ed-grid m-grid3 lg-grid-4 row-gap">
          {teachers.map(t => (
            <Teacher
              picture={t.picture}
              name={t.name}
              country={t.country}
              key={t.id}
            />
          ))}
        </main>
      )}
    </>
  );
};

const mapStateToProps = state => ({
  teachers: state.teacherReducer,
});

export default connect(mapStateToProps, {})(Teachers);
