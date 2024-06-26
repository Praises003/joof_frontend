import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    tables: [],
     error: false,
     loading: false,
    
}

export const fetchTables = createAsyncThunk('tables/fetchTables', async (_, thunkApi) => {
  try {

    const token = thunkApi.getState().user.user.token
    console.log(token)

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    const response = await axios.get('https://joof-backend.onrender.com/api/table', config);
    console.log(response.data)
    return response.data;
    
  } catch (err) {
    const errMsg = (err.response && err.response.data && err.response.data.message) || err.message || err.toString()
        console.log(errMsg)
        return thunkApi.rejectWithValue(errMsg)

  }

  
  });

  export const reserveSeat = createAsyncThunk(
    'tables/reserveSeat',
    async ({ tableNumber, tableName, seatNumber, name }, thunkApi) => {
      try {

        const token = thunkApi.getState().user.user.token

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        const response = await axios.post('https://joof-backend.onrender.com/api/table/reserve', {
        tableNumber,
        tableName,
        seatNumber,
        name,
      }, config );
      return { tableNumber, seatNumber, name, success: response.data.success };

        
      } catch (err) {
        const errMsg = (err.response && err.response.data && err.response.data.message) || err.message || err.toString()
        console.log(errMsg)
        console.log(thunkApi.getState().user.user.token)
        return thunkApi.rejectWithValue(errMsg)

        
      }
          }
  );
  export const updateSeat = createAsyncThunk(
    'tables/updateSeat',
    async ({ tableNumber, seatNumber, newSeatNumber, newName, newTableName }, thunkApi) => {
      try {
        console.log(tableNumber, seatNumber)
        const token = thunkApi.getState().user.user.token;
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const response = await axios.put(
          `https://joof-backend.onrender.com/api/table/update-reserve/${tableNumber}/${seatNumber}`,
          { newSeatNumber, newName, newTableName },
          config
        );
        console.log('Response:', response.data);
        return { tableNumber: tableNumber, seatNumber, newSeatNumber, newName, newTableName };
      } catch (err) {
        const errMsg = (err.response && err.response.data && err.response.data.message) || err.message || err.toString()
        console.error(err)
        console.error(errMsg)
        
      
        return thunkApi.rejectWithValue(errMsg)
    }
  }
  );
  

  

  const tableSlice = createSlice({
    name:"table",
    initialState,

    reducers: {},

    
  extraReducers: (builder) => {
    builder
    .addCase(reserveSeat.fulfilled, (state, action) => {
      const { tableNumber, seatNumber, name, success } = action.payload;
      if (success) {
        const table = state.tables.find((t) => t.tableNumber === tableNumber);
        const seat = table.seats.find((s) => s.seatNumber === seatNumber);
        seat.isReserved = true;
        seat.reservedBy = name;
      }
    })


      .addCase(fetchTables.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTables.fulfilled, (state, action) => {
        state.loading = false;
        state.tables = action.payload;
      })
      .addCase(fetchTables.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateSeat.pending, (state) => {
        state.loading = true;
    })
    .addCase(updateSeat.fulfilled, (state, action) => {
      console.log(state.tables)
        const { tableNumber, seatNumber, newSeatNumber, newName, newTableName } = action.payload;
        const table = state.tables.find((t) => t.tableNumber === tableNumber);
        const seat = table.seats.find((s) => s.seatNumber === seatNumber);
        seat.seatNumber = newSeatNumber;
        seat.reservedBy = newName;
        seat.tableName = newTableName;
        state.loading = false;
    })
    .addCase(updateSeat.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to update seat';
    });
    
      

      
     
  }
  

  })

  export default tableSlice.reducer

