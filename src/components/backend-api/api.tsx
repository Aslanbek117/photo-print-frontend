import { httpClient } from "../../http/http";


export const Search = async (token: string, text: string): Promise<any> =>  {
    try {
        const response = await   (await httpClient(token)).get("http://halyk-wiki.cfp.corp.p-s.kz/elasticsearch-halyk/autocomplete?text="+ text)
        return response.data;
    } catch (err) {
        return {} as any;
    }
}


// export const GetAllDirs = async (token: string, dir: string): Promise<any> =>  {
//     try {
//         const response = await (await httpClient(token)).get("http://localhost:3005/directories/bydir?dir=" + dir)
//         return response.data;
//     } catch (err) {
//         return {} as any;
//     }
// }


// export const GetAllDirs1 = async (token: string, dir: string): Promise<any> =>  {
//     try {
//         const response = await (await httpClient(token)).get("http://localhost:3005/directories/list")
//         return response.data;
//     } catch (err) {
//         return {} as any;
//     }
// }

export const GetAllDirs = async (token: string, dir: string): Promise<any> =>  {
    try {
        const response = await (await httpClient(token)).get("http://halyk-wiki.cfp.corp.p-s.kz/halyk-wiki-search-service/api/v1/entity/list-eager")
        return response.data;
    } catch (err) {
        return {} as any;
    }
}



export const GetAllDirs1 = async (token: string, dir: string): Promise<any> =>  {
    try {
        const response = await (await httpClient(token)).get("http://halyk-wiki.cfp.corp.p-s.kz/halyk-wiki-search-service/api/v1/entity/list-eager")
        return response.data;
    } catch (err) {
        return {} as any;
    }
}

export const GetArticlesBySubcategory = async (token: string, category_title: string): Promise<any> =>  {
    try {
        
        const response = await (await httpClient(token)).get("http://halyk-wiki.cfp.corp.p-s.kz/halyk-wiki-search-service/api/v1/subCategory/articlesByTitle?subCategoryTitle=" + category_title)
        return response.data;
    } catch (err) {
        return {} as any;
    }
}

export const GetArticleInfo = async (token: string, article_id: number): Promise<any> =>  {
    try {
        
        const response = await (await httpClient(token)).get("http://halyk-wiki.cfp.corp.p-s.kz/halyk-wiki-search-service/api/v1/article?articleHistoryID=" + article_id)
        return response.data;
    } catch (err) {
        return {} as any;
    }
}