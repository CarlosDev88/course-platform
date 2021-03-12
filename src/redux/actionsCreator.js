import axios from "axios";
import {
  GET_ALL_COURSES,
  GET_ALL_POST,
  GET_ALL_SPECIALITIES,
  GET_ALL_TEACHERS,
  GET_FRAGMENT,
  GET_COURSE,
  GET_POST,
  GET_SPECIALITY,
} from "./actions";

const API_URL = "http://localhost:3005";

export const getAllPost = () => dispatch => {
  axios.get(`${API_URL}/posts`).then(resp => {
    return dispatch({
      type: GET_ALL_POST,
      posts: resp.data,
    });
  });
};

export const getAllSpecialities = () => dispatch => {
  axios.get(`${API_URL}/especialidades`).then(resp => {
    return dispatch({
      type: GET_ALL_SPECIALITIES,
      especialities: resp.data,
    });
  });
};

export const getAllCourses = () => dispatch => {
  axios.get(`${API_URL}/cursos`).then(resp => {
    return dispatch({
      type: GET_ALL_COURSES,
      courses: resp.data,
    });
  });
};

export const getAllTeachers = () => dispatch => {
  axios.get(`${API_URL}/profesores`).then(resp => {
    return dispatch({
      type: GET_ALL_TEACHERS,
      teachers: resp.data,
    });
  });
};

export const getPost = id => dispatch => {
  axios.get(`${API_URL}/posts/${id}`).then(resp => {
    return dispatch({
      type: GET_POST,
      post: resp.data,
    });
  });
};

export const getEspeciality = id => dispatch => {
  axios.get(`${API_URL}/especialidad/${id}`).then(resp => {
    return dispatch({
      type: GET_SPECIALITY,
      speciality: resp.data,
    });
  });
};

export const getCourse = id => dispatch => {
  axios.get(`${API_URL}/cursos/${id}`).then(resp => {
    return dispatch({
      type: GET_COURSE,
      course: resp.data,
    });
  });
};

export const getFragment = id => dispatch => {
  axios.get(`${API_URL}/clases/${id}`).then(resp => {
    return dispatch({
      type: GET_FRAGMENT,
      fragment: resp.data,
    });
  });
};
