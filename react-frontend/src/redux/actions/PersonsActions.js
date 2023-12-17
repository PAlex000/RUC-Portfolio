export const FETCH_PERSONS_REQUEST = "FETCH_PERSONS_REQUEST";
export const FETCH_PERSONS_SUCCESS = "FETCH_PERSONS_SUCCESS";
export const FETCH_PERSONS_FAILURE = "FETCH_PERSONS_FAILURE";

export const fetchPersonsRequest = () => ({ type: FETCH_PERSONS_REQUEST });
export const fetchPersonsSuccess = (persons, total) => ({
  type: FETCH_PERSONS_SUCCESS,
  payload: { persons, total },
});
export const fetchPersonsFailure = (error) => ({
  type: FETCH_PERSONS_FAILURE,
  payload: { error },
});

export const fetchPersons =
  (page = 0, pageSize = 10) =>
  async (dispatch) => {
    dispatch(fetchPersonsRequest());
    try {
      const response = await fetch(
        `/api/person?page=${page}&pageSize=${pageSize}`
      );
      const data = await response.json();
      dispatch(fetchPersonsSuccess(data.people, data.total));
    } catch (error) {
      dispatch(fetchPersonsFailure(error.toString()));
    }
  };

//--//

export const FETCH_PERSON_BY_ID_REQUEST = "FETCH_PERSON_BY_ID_REQUEST";
export const FETCH_PERSON_BY_ID_SUCCESS = "FETCH_PERSON_BY_ID_SUCCESS";
export const FETCH_PERSON_BY_ID_FAILURE = "FETCH_PERSON_BY_ID_FAILURE";

export const fetchPersonByIdRequest = () => ({
  type: FETCH_PERSON_BY_ID_REQUEST,
});
export const fetchPersonByIdSuccess = (person) => ({
  type: FETCH_PERSON_BY_ID_SUCCESS,
  payload: { person },
});
export const fetchPersonByIdFailure = (error) => ({
  type: FETCH_PERSON_BY_ID_FAILURE,
  payload: { error },
});

export const fetchPersonById = (personId) => async (dispatch) => {
  dispatch(fetchPersonByIdRequest());
  try {
    const response = await fetch(`/api/person/${personId}`);
    const person = await response.json();
    dispatch(fetchPersonByIdSuccess(person));
  } catch (error) {
    dispatch(fetchPersonByIdFailure(error.toString()));
  }
};

//--//

export const FETCH_PERSON_BY_NAME_REQUEST = "FETCH_PERSON_BY_NAME_REQUEST";
export const FETCH_PERSON_BY_NAME_SUCCESS = "FETCH_PERSON_BY_NAME_SUCCESS";
export const FETCH_PERSON_BY_NAME_FAILURE = "FETCH_PERSON_BY_NAME_FAILURE";

export const fetchPersonByNameRequest = () => ({
  type: FETCH_PERSON_BY_NAME_REQUEST,
});
export const fetchPersonByNameSuccess = (person) => ({
  type: FETCH_PERSON_BY_NAME_SUCCESS,
  payload: { person },
});
export const fetchPersonByNameFailure = (error) => ({
  type: FETCH_PERSON_BY_NAME_FAILURE,
  payload: { error },
});

export const fetchPersonByName = (primaryName) => async (dispatch) => {
  dispatch(fetchPersonByNameRequest());
  try {
    const response = await fetch(`/api/person/actor/${primaryName}`);
    const person = await response.json();
    dispatch(fetchPersonByNameSuccess(person));
  } catch (error) {
    dispatch(fetchPersonByNameFailure(error.toString()));
  }
};

//--//

export const CREATE_PERSON_REQUEST = "CREATE_PERSON_REQUEST";
export const CREATE_PERSON_SUCCESS = "CREATE_PERSON_SUCCESS";
export const CREATE_PERSON_FAILURE = "CREATE_PERSON_FAILURE";

export const createPersonRequest = () => ({ type: CREATE_PERSON_REQUEST });
export const createPersonSuccess = (person) => ({
  type: CREATE_PERSON_SUCCESS,
  payload: { person },
});
export const createPersonFailure = (error) => ({
  type: CREATE_PERSON_FAILURE,
  payload: { error },
});

export const createPerson = (personData) => async (dispatch) => {
  dispatch(createPersonRequest());
  try {
    const response = await fetch("/api/person", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(personData),
    });
    const person = await response.json();
    dispatch(createPersonSuccess(person));
  } catch (error) {
    dispatch(createPersonFailure(error.toString()));
  }
};

//--//

export const UPDATE_PERSON_REQUEST = "UPDATE_PERSON_REQUEST";
export const UPDATE_PERSON_SUCCESS = "UPDATE_PERSON_SUCCESS";
export const UPDATE_PERSON_FAILURE = "UPDATE_PERSON_FAILURE";

export const updatePersonRequest = () => ({ type: UPDATE_PERSON_REQUEST });
export const updatePersonSuccess = (personId) => ({
  type: UPDATE_PERSON_SUCCESS,
  payload: { personId },
});
export const updatePersonFailure = (error) => ({
  type: UPDATE_PERSON_FAILURE,
  payload: { error },
});

export const updatePerson = (personId, personData) => async (dispatch) => {
  dispatch(updatePersonRequest());
  try {
    const response = await fetch(`/api/person/${personId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(personData),
    });
    if (response.ok) {
      dispatch(updatePersonSuccess(personId));
    } else {
      throw new Error("Failed to update person");
    }
  } catch (error) {
    dispatch(updatePersonFailure(error.toString()));
  }
};

//--//

export const DELETE_PERSON_REQUEST = "DELETE_PERSON_REQUEST";
export const DELETE_PERSON_SUCCESS = "DELETE_PERSON_SUCCESS";
export const DELETE_PERSON_FAILURE = "DELETE_PERSON_FAILURE";

export const deletePersonRequest = (personId) => ({
  type: DELETE_PERSON_REQUEST,
  payload: { personId },
});
export const deletePersonSuccess = (personId) => ({
  type: DELETE_PERSON_SUCCESS,
  payload: { personId },
});
export const deletePersonFailure = (error) => ({
  type: DELETE_PERSON_FAILURE,
  payload: { error },
});

export const deletePerson = (personId) => async (dispatch) => {
  dispatch(deletePersonRequest(personId));
  try {
    const response = await fetch(`/api/person/${personId}`, {
      method: "DELETE",
    });
    if (response.ok) {
      dispatch(deletePersonSuccess(personId));
    } else {
      throw new Error("Failed to delete person");
    }
  } catch (error) {
    dispatch(deletePersonFailure(error.toString()));
  }
};
