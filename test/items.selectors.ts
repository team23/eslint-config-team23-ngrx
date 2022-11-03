import { createFeatureSelector } from '@ngrx/store';
import { ItemsState } from './items.reducer';

export const selectItems = createFeatureSelector<ItemsState>('items');
