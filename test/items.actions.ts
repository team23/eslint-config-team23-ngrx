import { createAction } from '@ngrx/store';

export namespace ItemsActions {

    export namespace ActionTypes {
        export const ClearItemsType = '[Items] CLEAR_ITEMS';
        export const SetItemsType = '[Items] SET_ITEMS';
    }

    export const ClearItems = createAction(
        ActionTypes.ClearItemsType
    );

    export const SetItems = createAction(
        ActionTypes.SetItemsType,
        (payload: Array<number>) => ({ items: payload }),
    );
}

