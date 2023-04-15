import axios from 'axios';
import { TTQ } from '../queries';
import { ITT } from '../QInterfaces';

const getTT = async (id: number) => {
    let result: ITT = {
        titles: {
            romaji: '',
            english: '',
            native: ''
        },
        coverImages: {
            extraLarge: '',
            large: '',
            medium: '',
            color: ''
        }
    };
    var data = JSON.stringify({
        query: TTQ,
        variables: { "mediaId": String(id) }
    });
    var config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://graphql.anilist.co',
        headers: {
            'Content-Type': 'application/json',
        },
        data: data
    };

    await axios(config).then(function (response) {
        result = {
            titles: {
                romaji: response.data.data.Media.title.romaji,
                english: response.data.data.Media.title.english,
                native: response.data.data.Media.title.native
            },
            coverImages: {
                extraLarge: response.data.data.MediaTrend.media.coverImage.extraLarge,
                large: response.data.data.MediaTrend.media.coverImage.large,
                medium: response.data.data.MediaTrend.media.coverImage.medium,
                color: response.data.data.MediaTrend.media.coverImage.color
            }
        };
    });
    return result;
};

export default getTT;
