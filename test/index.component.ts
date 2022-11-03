import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { ItemsActions } from './items.actions';
import { selectItems } from './items.selectors';

@Component({
    selector: 'index',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IndexComponent implements OnInit {

    public items$ = this._store$.select(selectItems).pipe(
        map(items =>
            items.items
                ?.map((item, index) => `Item ${ index }: ${ item }`)
            ?? [],
        ),
    )

    constructor(
        private _store$: Store,
    ) { }

    public ngOnInit(): void {
        this._store$.dispatch(ItemsActions.SetItems([1, 2, 3]));
    }
}
