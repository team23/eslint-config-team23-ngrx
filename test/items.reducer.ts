import { createFeature, createReducer, on } from '@ngrx/store';
import { ItemsActions } from './items.actions';

export interface ItemsState {
    items: Array<number> | null;
}

const initialErrorState: ItemsState = {
    items: [1, 2, 3],
};

export const errorFeature = createFeature({
    name: 'error',
    reducer: createReducer(
        initialErrorState,
        on(ItemsActions.SetItems, (state, payload): ItemsState => ({
            ...state,
            items: payload.items,
        })),
        on(ItemsActions.ClearItems, (state): ItemsState => ({
            ...state,
            items: null,
        })),
    ),
});
