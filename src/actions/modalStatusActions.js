import * as types from '../constants/actionTypes';

export function messageModalOpen() {
    return {type: types.MESSAGE_MODAL_OPEN};
}

export function messageModalClose(){
    return {type: types.MESSAGE_MODAL_CLOSE};
}