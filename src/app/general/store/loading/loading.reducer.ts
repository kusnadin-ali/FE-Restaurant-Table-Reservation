import { createReducer, on  } from "@ngrx/store";
import { initialLoadingState } from "./loading.state";
import { setLoading } from "./loading.action";

export const loadingReducer = createReducer(
  initialLoadingState,
  on(setLoading, (state, { isLoading}) => ({
    ...state,
    isLoading
  })),
);
