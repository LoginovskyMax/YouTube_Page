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
    viewCount: string;
    likeCount: string;
    dislikeCount: string;
    favoriteCount: string;
    commentCount: string;
}
interface Localized {
    title: string;
    description: string;
}
interface Snipet {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: Thumbnail;
    channelTitle: string;
    tags: string[];
    categoryId: string;
    liveBroadcastContent: string;
    localized: Localized;
    defaultAudioLanguage: string;
}

export interface FirstSearchItem{
    kind: string;
    etag: string;
    id: {videoId: string};
    snippet: Snipet;
}

export interface SearchItem {
    kind: string;
    etag: string;
    id: string;
    snippet: Snipet;
    statistics: Statistics;
}
