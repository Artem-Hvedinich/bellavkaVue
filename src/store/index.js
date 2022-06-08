import {createStore} from "vuex";
import * as moduleCards from "./modules/cards"

const initialState = {
    cards: {},
    comments: {}
}
export default createStore({
    state: initialState,
    mutations: {...moduleCards.mutations},
    actions: {...moduleCards.actions},
    getters: {...moduleCards.getters},
    modules: {},
})