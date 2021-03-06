import {
  GET_ALL_COURSES,
  GET_ALL_POST,
  GET_ALL_SPECIALITIES,
  GET_ALL_TEACHERS,
  GET_COURSE,
  GET_FRAGMENT,
  GET_POST,
  GET_SPECIALITY,
} from "./actions";

export const postReducer = (state = {}, action) => {
  if (action.type === GET_ALL_POST) {
    return {
      ...state,
      posts: action.posts,
    };
  }

  if (action.type === GET_POST) {
    return {
      ...state,
      post: action.post,
    };
  }
  return state;
};

export const especialityReducer = (state = {}, action) => {
  if (action.type === GET_ALL_SPECIALITIES) {
    return {
      ...state,
      especialities: action.especialities,
    };
  }

  if (action.type === GET_SPECIALITY) {
    return {
      ...state,
      speciality: action.speciality,
    };
  }
  return state;
};

export const courseReducer = (state = {}, action) => {
  if (action.type === GET_ALL_COURSES) {
    return {
      ...state,
      courses: action.courses,
    };
  }

  if (action.type === GET_COURSE) {
    return {
      ...state,
      course: action.course,
    };
  }
  return state;
};

export const teacherReducer = (state = {}, action) => {
  if (action.type === GET_ALL_TEACHERS) {
    return action.teachers;
  }
  return {
    ...state,
    teachers: action.teachers,
  };
};

export const fragmentReducer = (state = {}, action) => {
  if (action.type === GET_FRAGMENT) {
    return {
      ...state,
      fragment: action.fragment,
    };
  }
  return state;
};
