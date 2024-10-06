import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const endpoint = "http://frontier.earnflex.com/earnflex_get_all_timesheet_data";

const getActivationCode = async () => {
  try {
    const response = await axios.post(
      "https://api.findofficers.com/hiring_test/get_activation_code",
      ""
    );
    return response.data;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};

const initialState = {
  loading: false,
  error: null,
  data: [],
};

export const postFormData = createAsyncThunk(
  "task1/postFormData",
  async (formData, { rejectWithValue }) => {
    if (
      formData.deviceUserName !== "Saheel987@outlook.com" &&
      formData.webUserName !== "demo"
    ) {
      return rejectWithValue("Invalid input data");
    } else {
      try {
        // geting  the activation code here as i guess the code changes every few seconds
        const { activationCode } = await getActivationCode();
        const updatedFormData = {
          ...formData,
          activationCode,
        };

        const response = await axios.post(endpoint, updatedFormData);
        //   console.log(updatedFormData);
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response?.data || error.message);
      }
    }
  }
);

export const task1Slice = createSlice({
  name: "task1Slice",
  initialState,
  reducers: {
    chekInput: (state) => {
      state.error = "Please use the inputs provided in the tasks PDF";
    },
    resetData: (state) => {
      state.data = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postFormData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(postFormData.fulfilled, (state, action) => {
        state.loading = false;
        state.data.push(action.payload.data);
      })
      .addCase(postFormData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default task1Slice.reducer;
