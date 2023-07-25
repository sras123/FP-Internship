import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  countriesList: [],
  totalCount: 0,
  fetching: false,
  error: "",
  selectedCountry: "",
  filteredCountries: [],
};
export const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    setCountries: (state, action) => {
      state.countriesList = action.payload;
    },
    setTotalCount: (state, action) => {
      state.totalCount = action.payload;
    },
    setFetching: (state, action) => {
      state.fetching = action.payload;
    },
    setSelectedCountry: (state, action) => {
      state.selectedCountry = action.payload;
    },
    filterCountriesList: (state, action) => {
      state.filteredCountries = state.countriesList.filter((item: any) =>
        item.name?.includes(action.payload)
      );
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  setCountries,
  setTotalCount,
  setFetching,
  setSelectedCountry,
  filterCountriesList,
  setError,
} = countriesSlice.actions;

export default countriesSlice.reducer;
