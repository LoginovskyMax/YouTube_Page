import { createReducer, on } from '@ngrx/store';
import { addCustomCard , loadVideos, setSortCriteria , setFilteredVideos} from './actions';
import { ICustomCard } from './customCards.model';
import { SearchItem } from '../youtube/models/search-item.model';

export interface IState {
  counter:number
  customCards:ICustomCard[]
  loadCards:SearchItem[]
  sortCriteria: string
}

export const initialState:IState = {
  counter: 0,
  customCards:[],
  loadCards:[],
  sortCriteria:''
};

export const counterReducer = createReducer(
  initialState,
  on(addCustomCard, (state, {card}) => ({...state, customCards:[...state.customCards,card]})),
  on(loadVideos, (state, {response}) => ({...state, loadCards:response})),
  on(setSortCriteria, (state, {text}) => ({...state, sortCriteria:text})),
  on(setFilteredVideos, (state, {filteredArr}) => ({...state, loadCards:filteredArr}))
);