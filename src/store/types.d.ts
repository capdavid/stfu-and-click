import { StateType, ActionType } from 'typesafe-actions';

declare module 'typesafe-actions' {
    export type Store = StateType<typeof import('./index').default>;

    export type RootState = StateType<typeof import('./reducers/root-reducer').default>;

    export type RootAction = ActionType<typeof import('./actions/root-action').default>;

    interface Types {
        RootAction: RootAction;
    }
}
