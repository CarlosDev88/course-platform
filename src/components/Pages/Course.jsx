import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getCourse } from "../../redux/actionsCreator";
import store from "../../redux/store";
import Banner from "../Organisms/Banner";

const Course = ({ course }) => {
  useEffect(() => {
    store.dispatch(getCourse(11));
  }, []);
  return (
    <>
      {course && (
        <>
          <Banner
            color="dark-color"
            imagen={{
              src:
                "https://edteam-media.s3.amazonaws.com/courses/small/61e5a210-8dab-412e-a6dc-802c070cc18c.jpg",
              alt: "home de la pagina",
            }}
            title={course.name}
            subTitle={course.subtitle}
            info={course.information}
            courseBanner
            poster={course.curso[0].picture}
            especialidad={course.curso[0].data.specialities[0].name}
          />

          <main className="ed-grid lg-grid-10">
            <div className="lg-cols-7">
              <div className="course-features ed-grid lg-grid-3 l-block s-border s-pxy-2 s-radius s-bg-white s-shadow-bottom row-gap ">
                <div>
                  <h3>¿Qué aprenderás?</h3>
                  <ul dangerouslySetInnerHTML={{ __html: course.you_learn }} />
                </div>
                <div>
                  <h3>Cónocimientos previos</h3>
                  <ul
                    dangerouslySetInnerHTML={{ __html: course.requirements }}
                  />
                </div>
                <div>
                  <h3>Nivel:</h3>
                  <p>{course.level}</p>
                </div>
              </div>
              <div>
                <h2>Temario del curso</h2>
                <div className="s-border s-pxy-2 lg-pxy-4 s-radius s-bg-white l-block l-section s-shadow-bottom">
                  {course.curso[0].data.classes.map(cl => (
                    <div className="course-class l-section" key={cl.class.id}>
                      <h3>{cl.class.title}</h3>
                      <p>{cl.class.description}</p>
                      <ul>
                        {cl.subjects.map(s => (
                          <li key={s.subject.id}>{s.subject.title}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="lg-cols-3">
              <h2 className="t3">Profesor</h2>
              <p>Nombre del profesor</p>
            </div>
          </main>
        </>
      )}
    </>
  );
};

const mapStateToProps = state => ({
  course: state.courseReducer.course,
});

export default connect(mapStateToProps, {})(Course);
