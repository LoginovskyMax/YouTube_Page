import { FirstSearchItem, SearchItem } from './search-item.model';

interface PageInfo {
    totalResults: number;
    resultsPerPage: number;
}
export interface SearchResponse {
    kind: string;
    etag: string;
    pageInfo: PageInfo;
    items: SearchItem[];
}

export interface FirstSearchResponse{
    kind: string;
    etag: string;
    pageInfo: PageInfo;
    items: FirstSearchItem[];
}
