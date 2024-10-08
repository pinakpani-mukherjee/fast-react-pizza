/*function getPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

async function fetchAddress() {
  // 1) We get the user's geolocation position
  const positionObj : any = await getPosition();
  const position = {
    latitude: positionObj.coords.latitude,
    longitude: positionObj.coords.longitude,
  };

  // 2) Then we use a reverse geocoding API to get a description of the user's address, so we can display it the order form, so that the user can correct it if wrong
  const addressObj = await getAddress(position);
  const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

  // 3) Then we return an object with the data that we are interested in
  return { position, address };
}
  */

import { combineReducers, createSlice, PayloadAction } from "@reduxjs/toolkit";

const rootReducer = combineReducers({});
export type RootState = ReturnType<typeof rootReducer>;

interface userState {
  username: string,
}


const initialState : userState = {
  username: "",
};


export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateName(state,action:PayloadAction<{name:string}>){
      state.username = action.payload.name
    }
  }
})

export const { updateName } = userSlice.actions;

export default userSlice.reducer;

export const getUser = (state : RootState ) =>
  state.user.username;