import { createAction, props } from '@ngrx/store';
import { ICustomCard } from './customCards.model';
import { SearchItem } from '../youtube/models/search-item.model';

export const addCustomCard = createAction('[Search Results Component] addCustomCard', props<{card: ICustomCard}>());
export const loadVideos = createAction('[Youtube Component] loadVideos', props<{response: SearchItem[]}>());
export const startloadVideos = createAction('[Youtube Component] startloadVideos', props<{text: string}>());
export const setSortCriteria = createAction('[Youtube Component] setSortCriteria', props<{text: string}>());
export const setFilteredVideos = createAction('[Youtube Component] setFilteredVideos', props<{filteredArr: SearchItem[]}>());
