import { httpClient } from "../../http/http";


export const Search = async (token: string, text: string): Promise<any> =>  {
    try {
        const response = await   (await httpClient(token)).get("http://localhost:9092/autocomplete?text="+ text)
        return response.data;
    } catch (err) {
        return {} as any;
    }
}


export const GetAllDirs = async (token: string, dir: string): Promise<any> =>  {
    try {
        const response = await (await httpClient(token)).get("http://localhost:3005/directories/bydir?dir=" + dir)
        return response.data;
    } catch (err) {
        return {} as any;
    }
}