import React, { useEffect } from "react";
import { connect } from "react-redux";
import Banner from "../Organisms/Banner";
import banner_img from "../../img/banner.jpg";
import store from "../../redux/store";
import { getAllCourses } from "../../redux/actionsCreator";
import Card from "../Organisms/Card";

const Courses = ({ courses }) => {
  useEffect(() => {
    store.dispatch(getAllCourses());
  }, []);

  return (
    <>
      <Banner
        color="dark-color"
        imagen={{
          src: banner_img,
          alt: "Banner cursos",
        }}
        title="Cursos"
        subTitle="Comienza tu camino desde cero a dominar la tecnologia"
      />

      {courses && (
        <main className="ed-grid m-grid-5">
          {courses.map(c => (
            <Card
              path="cursos"
              picture={c.picture}
              name={c.name}
              key={c.id}
              cardId={c.id}
            />
          ))}
        </main>
      )}
    </>
  );
};

const mapStateToProps = state => ({
  courses: state.courseReducer.courses,
});

export default connect(mapStateToProps, {})(Courses);
