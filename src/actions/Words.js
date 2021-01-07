import {
  UPDATE_WORDS,
  ADD_WORDS,
  SHOW_WORD_DETAILS,
  SHOW_WORD_LIST,
} from "./actionTypes";
import { APIUrls } from "../helpers/url";
import { getFormBody } from "../helpers/utils";

export function getWords() {
  return (dispatch) => {
    //hitting fetch api
    const url = APIUrls.fetchWords();
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("data", data);
        console.log("data.data", data.data);
        dispatch(updateWords(data.data));
      });
  };
}

export function updateWords(word) {
  return {
    type: UPDATE_WORDS,
    word,
  };
}

export function addWord(word) {
  return (dispatch) => {
    //hitting create api
    const url = APIUrls.create();
    fetch(url, {
      //defining the type of api
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: getFormBody({
        word,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatch(addWordToStore(data.data));
      });
  };
}

function addWordToStore(word) {
  return {
    type: ADD_WORDS,
    word,
  };
}

export function showWordDetails(singleWord) {
  return {
    type: SHOW_WORD_DETAILS,
    singleWord,
  };
}

export function showWordList() {
  return {
    type: SHOW_WORD_LIST,
  };
}
