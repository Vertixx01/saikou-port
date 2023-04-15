export const TTQ = `query ($mediaId: Int) {
  Media(id: $mediaId, type: ANIME) {
      id
      title {
          romaji
          english
          native
      }
  }
  MediaTrend(mediaId: $mediaId) {
    media {
      coverImage {
        extraLarge
        large
        medium
        color
      }
    }
  }
}`;

export const UserSearchQ = `query ($name: String) {
    User(name: $name) {
      name
      avatar {
        large
        medium
      }
      statistics {
            anime {
                count
                meanScore
                standardDeviation
                minutesWatched
                episodesWatched
                chaptersRead
                volumesRead
                formats {
                    count
                    meanScore
                    minutesWatched
                    chaptersRead
                    mediaIds
                    format
                }
                statuses {
                    count
                    meanScore
                    minutesWatched
                    chaptersRead
                    mediaIds
                    status
                }
            }
        }
    }
}`
