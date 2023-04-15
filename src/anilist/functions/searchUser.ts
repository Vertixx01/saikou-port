import axios from 'axios';
import { UserSearchQ } from '../queries';
import { ISUser, IUAnimeList } from '../QInterfaces';

const searchUser = async (name: string) => {
    let result: ISUser = {
        id: 0,
        name: '',
        avatar: { large: '', medium: '' },
        bannerImage: '',
        statistics: {
            anime: {} as IUAnimeList
        }
    };
    var data = JSON.stringify({
        query: UserSearchQ,
        variables: {"name":"Vertixx"}
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
        result = response.data.data.User;
    })
    return result;
};

export default searchUser;
