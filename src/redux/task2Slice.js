import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const getActivationCode = async () => {
  try {
    const response = await axios.post(
      "https://api.findofficers.com/hiring_test/get_activation_code",
      ""
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching activation code:", error.message);
    throw error;
  }
};

export const getEmployees = createAsyncThunk(
  "employees/getEmployees",
  async () => {
    const { activationCode } = await getActivationCode();
    const response = await axios.post(
      "https://api.findofficers.com/hiring_test/get_all_employee",
      { activationCode }
    );

    return response.data;
  }
);

export const task2Slice = createSlice({
  name: "task2Slice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getEmployees.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getEmployees.fulfilled, (state, action) => {
        state.loading = false;
        state.data.push(action.payload[0]);
      })
      .addCase(getEmployees.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default task2Slice.reducer;
