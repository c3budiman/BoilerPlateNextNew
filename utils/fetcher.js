import axios from 'axios';

export async function FetcherGet(url, { params, headers } = {}) {
    try {
        const response = await axios.get(url, { params, headers });
        
        return {
            code: 0,
            status: response.status,
            info: "Berhasil Fetch",
            data: response.data,
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

        return {
            code: 0,
            status: response.status,
            info: "Berhasil Fetch",
            data: response.data,
        }
    } catch (error) {
        console.error(error);
        return {
            code: -1,
            info: "gagal, fetcher error",
        }
    }
}