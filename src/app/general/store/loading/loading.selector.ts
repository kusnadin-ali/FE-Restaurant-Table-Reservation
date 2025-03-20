import { createSelector } from "@ngrx/store";
import { LoadingState } from "./loading.state";

export const selectLoadingFeature = (state: LoadingState) => state.isLoading;
export const selectLoadingData = createSelector(
  selectLoadingFeature,
  (isLoading) => isLoading
)
