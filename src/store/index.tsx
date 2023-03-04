import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import counterReducer,{  sliceKey as counterSliceKey,} from '../features/counter/slice';


const rootReducer = {
 [counterSliceKey]:counterReducer
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false })
});

interface StoreProviderProps {
  children: React.ReactNode;
}



const StoreProvider: React.FC<StoreProviderProps> = ({children}) => {
  return <Provider store={store}>{children}</Provider>;
};

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;


export default StoreProvider;