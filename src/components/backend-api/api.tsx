import { httpClient } from "../../http/http";


export const Search = async (token: string, text: string): Promise<any> =>  {
    try {
        const response = await   (await httpClient(token)).get("autocomplete?text="+ text)
        return response.data;
    } catch (err) {
        return {} as any;
    }
}

