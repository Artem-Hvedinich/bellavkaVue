import {API} from "../../api/api";

export const mutations = {
    setCards({state}, payload) {
        state.cards = payload
    },
};

export const getters = {
    cardsGet: ({cards}) => ({
        cards
    })
};

export const actions = {
    async setCardsAC({commit}, payload) {
        await commit("setCards", payload)
    }
}
