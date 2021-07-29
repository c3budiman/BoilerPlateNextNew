import axios from 'axios';

export async function FetcherGet(url, { params, headers } = {}) {
    try {
        const response = await axios.get(url, { params, headers });
        if (response.status === 200) {
            return {
                code: 0,
                info: "Berhasil Fetch",
                data: response.data,
            }
        } else {
            return {
                code: -1,
                info: "gagal, fetcher error",
                data: response.data,
            }
        }
    } catch (error) {
        console.error(error);
        return {
            code: -1,
            info: "gagal, fetcher error",
        }
    }
}

export async function FetcherPost(url, data) {
    try {
        const response = await axios.post(url, data, {
            withCredentials: true,
        });

        if (response.status === 200) {
            return {
                code: 0,
                info: "Berhasil Fetch Post",
                data: response.data,
            }
        } else {
            return {
                code: -1,
                info: "gagal, fetcher error",
                data: response.data,
            }
        }
    } catch (error) {
        console.error(error);
        return {
            code: -1,
            info: "gagal, fetcher error",
        }
    }
}