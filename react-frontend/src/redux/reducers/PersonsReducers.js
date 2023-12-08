import {
  FETCH_PERSONS_REQUEST,
  FETCH_PERSONS_SUCCESS,
  FETCH_PERSONS_FAILURE,
  FETCH_PERSON_BY_ID_REQUEST,
  FETCH_PERSON_BY_ID_SUCCESS,
  FETCH_PERSON_BY_ID_FAILURE,
  FETCH_PERSON_BY_NAME_REQUEST,
  FETCH_PERSON_BY_NAME_SUCCESS,
  FETCH_PERSON_BY_NAME_FAILURE,
  CREATE_PERSON_REQUEST,
  CREATE_PERSON_SUCCESS,
  CREATE_PERSON_FAILURE,
  UPDATE_PERSON_REQUEST,
  UPDATE_PERSON_SUCCESS,
  UPDATE_PERSON_FAILURE,
  DELETE_PERSON_REQUEST,
  DELETE_PERSON_SUCCESS,
  DELETE_PERSON_FAILURE,
} from "./../actions/PersonActions";

const initialState = {
  persons: [],
  total: 0,
  currentPerson: null,
  loading: false,
  error: null,
};

const personsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PERSONS_REQUEST:
    case FETCH_PERSON_BY_ID_REQUEST:
    case FETCH_PERSON_BY_NAME_REQUEST:
    case CREATE_PERSON_REQUEST:
    case UPDATE_PERSON_REQUEST:
    case DELETE_PERSON_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_PERSONS_SUCCESS:
      return {
        ...state,
        persons: action.payload.persons,
        total: action.payload.total,
        loading: false,
      };
    case FETCH_PERSON_BY_ID_SUCCESS:
    case FETCH_PERSON_BY_NAME_SUCCESS:
    case CREATE_PERSON_SUCCESS:
      return {
        ...state,
        currentPerson: action.payload.person,
        loading: false,
      };
    case UPDATE_PERSON_SUCCESS:
      return {
        ...state,
        persons: state.persons.map((person) =>
          person.id === action.payload.personId ? action.payload.person : person
        ),
        loading: false,
      };
    case DELETE_PERSON_SUCCESS:
      return {
        ...state,
        persons: state.persons.filter(
          (person) => person.id !== action.payload.personId
        ),
        loading: false,
      };
    case FETCH_PERSONS_FAILURE:
    case FETCH_PERSON_BY_ID_FAILURE:
    case FETCH_PERSON_BY_NAME_FAILURE:
    case CREATE_PERSON_FAILURE:
    case UPDATE_PERSON_FAILURE:
    case DELETE_PERSON_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };
    default:
      return state;
  }
};

export default personsReducer;
