import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mood: "happy",
  travel: "car",
  screenTime: 2,
  impact: {},
};

const moodSlice = createSlice({
  name: "mood",
  initialState,
  reducers: {
    setMood: (state, action) => {
      state.mood = action.payload;
    },
    setTravel: (state, action) => {
      state.travel = action.payload;
    },
    setScreenTime: (state, action) => {
      state.screenTime = action.payload;
    },
    calculateImpact: (state) => {
      let carbon = 0;

      if (state.travel === "car") carbon += 20;
      if (state.travel === "bike") carbon += 5;

      carbon += state.screenTime * 2;

      if (state.mood === "lazy") carbon += 10;

      state.impact = {
        carbon,
        energy: carbon * 1.5,
        productivity: state.mood === "productive" ? 80 : 40,
      };
    },
  },
});

export const {
  setMood,
  setTravel,
  setScreenTime,
  calculateImpact,
} = moodSlice.actions;

export default moodSlice.reducer;