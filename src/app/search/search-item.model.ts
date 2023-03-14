interface ThumbnailItem {
    url: string;
    width: number;
    height: number;
}
interface Thumbnail {
    default: ThumbnailItem;
    medium: ThumbnailItem;
    high: ThumbnailItem;
    standard: ThumbnailItem;
    maxres: ThumbnailItem;
}
interface Statistics {
    viewCount: number;
    likeCount: number;
    dislikeCount: number;
    favoriteCount: number;
    commentCount: number;
}
interface Localized {
    title: string;
    description: string;
}
interface Snipet {
    publishedAt: Date;
    channelId: string;
    title: string;
    description: string;
    thumbnails: Thumbnail;
    channelTitle: string;
    tags: string[];
    categoryId: number;
    liveBroadcastContent: string;
    localized: Localized;
    defaultAudioLanguage: string;
}

export interface SearchItem {
    kind: string;
    etag: string;
    id: string;
    snippet: Snipet;
    statistics: Statistics;
}
