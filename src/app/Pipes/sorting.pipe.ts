import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from '../search/search-item.model';

@Pipe({
  name: 'sort',
})
export class SortingPipe implements PipeTransform {
  transform(value: SearchItem[], arg: string): SearchItem[] {
    let sortedArr: SearchItem[] = [];
    if (arg === '') return value;
    if (arg === 'likeDown')sortedArr = value.sort((a, b) => parseFloat(a.statistics.likeCount) - parseFloat(b.statistics.likeCount));
    if (arg === 'like')sortedArr = value.sort((a, b) => parseFloat(b.statistics.likeCount) - parseFloat(a.statistics.likeCount));
    if (arg === 'viewsDown')sortedArr = value.sort((a, b) => parseFloat(a.statistics.viewCount) - parseFloat(b.statistics.viewCount));
    if (arg === 'views')sortedArr = value.sort((a, b) => parseFloat(b.statistics.viewCount) - parseFloat(a.statistics.viewCount));
    if (arg === 'dateDown')sortedArr = value.sort((a, b) => Date.parse(a.snippet.publishedAt) - Date.parse(b.snippet.publishedAt));
    if (arg === 'date')sortedArr = value.sort((a, b) => Date.parse(b.snippet.publishedAt) - Date.parse(a.snippet.publishedAt));
    return sortedArr;
  }
}
