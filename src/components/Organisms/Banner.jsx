import React from "react";
import { Link } from "react-router-dom";

const Banner = ({
  color,
  imagen,
  title,
  subTitle,
  home,
  poster,
  courseBanner,
  especialidad,
  info,
}) => (
  <div className={`main-banner img-container l-block ${color}`}>
    <div className="ed-grid">
      <div>
        <img src={imagen.src} alt={imagen.alt} className="main-banner__img" />
        {home ? (
          <div className="ed-grid m-grid-2">
            <div className="main-banner__data ">
              <h1 className="main-banner__title">{title}</h1>
              <p>{subTitle}</p>
              <Link to="/cursos" className="button accent-color">
                Ver Cursos
              </Link>
            </div>
            <div className="img-container s-tario-16-9">
              <img src={poster} alt="curso actual" />
            </div>
          </div>
        ) : courseBanner ? (
          <div className="ed-grid m-grid-3">
            <div className="main-banner__data m-cols-2 ">
              <h1 className="main-banner__title s-mb-0">{title}</h1>
              <p className="s-opacity-8">{subTitle}</p>
              <p>{info}</p>
              {especialidad && (
                <p>
                  Este curso forma parte de una especialidad
                  <Link to="/especialidades">{especialidad}</Link>
                </p>
              )}
            </div>
            <div className="img-container s-tario-16-9 m-cols-1">
              <img src={poster} alt="curso actual" />
            </div>
          </div>
        ) : (
          <div className="main-banner__data s-center">
            <h1 className="main-banner__title">{title}</h1>
            <p>{subTitle}</p>
          </div>
        )}
      </div>
    </div>
  </div>
);
export default Banner;
