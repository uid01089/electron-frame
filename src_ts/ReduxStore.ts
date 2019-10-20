import { AbstractReduxStore } from './js_web_comp_lib/AbstractReduxStore';


interface State {
    action: string,

}

const initiateState: State = {
    action: null,

}

class ReduxStore extends AbstractReduxStore<State> {

    static instance: ReduxStore;


    constructor() {

        super();

        if (!ReduxStore.instance) {
            this.initReduxStore(initiateState);
            ReduxStore.instance = this;
        }

        return ReduxStore.instance;
    }



}

const reduxStoreInstance = new ReduxStore();

export { reduxStoreInstance, ReduxStore, State };


