import {
  UPDATE_WORDS,
  ADD_WORDS,
  SHOW_WORD_DETAILS,
  SHOW_WORD_LIST,
} from "../actions/actionTypes";

const intialState = {
  words: [],
  singleWord: "",
  showDetails: false,
};
export default function wordUpdate(state = intialState, action) {
  switch (action.type) {
    case UPDATE_WORDS:
      return {
        ...state,
        words: action.word,
      };

    case ADD_WORDS:
      return {
        ...state,
        words: [...state.words, action.word],
      };
    case SHOW_WORD_DETAILS:
      return {
        ...state,
        singleWord: action.singleWord,
        showDetails: true,
      };

    case SHOW_WORD_LIST:
      return {
        ...state,
        showDetails: false,
      };
    default:
      return state;
  }
}
