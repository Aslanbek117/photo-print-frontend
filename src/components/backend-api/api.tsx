import { httpClient } from "../../http/http";


export const Search = async (token: string, text: string): Promise<any> =>  {
    try {
        const response = await   (await httpClient(token)).get("http://10.3.19.73/elasticsearch-halyk/autocomplete?text="+ text)
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
        const response = await (await httpClient(token)).get("http://10.3.19.73/halyk-wiki-search-service/api/v1/entity/list-eager")
        return response.data;
    } catch (err) {
        return {} as any;
    }
}



export const GetAllDirs1 = async (token: string, dir: string): Promise<any> =>  {
    try {
        const response = await (await httpClient(token)).get("http://10.3.19.73/halyk-wiki-search-service/api/v1/entity/list-eager")
        return response.data;
    } catch (err) {
        return {} as any;
    }
}

export const GetArticlesBySubcategory = async (token: string, category_title: string): Promise<any> =>  {
    try {
        
        const response = await (await httpClient(token)).get("http://10.3.19.73/halyk-wiki-search-service/api/v1/subCategory/articlesByTitle?subCategoryTitle=" + category_title)
        return response.data;
    } catch (err) {
        return {} as any;
    }
}

export const GetArticlesByCategory = async (token: string, category_title: string): Promise<any> =>  {
    try {
        const response = await (await httpClient(token)).get("http://10.3.19.73/halyk-wiki-search-service/api/v1/category/articlesByTitle?categoryTitle=" + category_title)
        return response.data;
    } catch (err) {
        return {} as any;
    }
}

export const GetArticlesByEntity = async (token: string, entity_title: string): Promise<any> => {
    try {
        const response = await (await httpClient(token)).get("http://10.3.19.73/halyk-wiki-search-service/api/v1/entity/articlesByTitle?entityTitle=" + entity_title)
        return response.data;
    }  catch (err) {
        return {} as any;
    }
}

export const GetArticleInfo = async (token: string, article_id: number): Promise<any> =>  {
    try {
        
        const response = await (await httpClient(token)).get("http://10.3.19.73/halyk-wiki-search-service/api/v1/article?articleHistoryID=" + article_id)
        return response.data;
    } catch (err) {
        return {} as any;
    }
}



export const GetEntityArticleCount = async (token: string): Promise<any> => {
    try {
        const response = await (await httpClient(token)).get("http://10.3.19.73/halyk-wiki-search-service/api/v1/entity/list/category")
        return response.data;
    } catch (err) {
        return {} as any;
    }
}


export const GetPhotoPrints= async (token: string, page: string, perPage: string, category: string): Promise<any> => {
    try {
        const response = await (await httpClient(token)).get("http://localhost:9092/pub/v1/merchants?page=" + page + "&per_page=" +perPage +"&category=" + category)
        return response.data;
    } catch (err) {
        return {} as any;
    }
}


export const GetCategories = async (token: string): Promise<any> => {
    try {
        const response = await (await httpClient(token)).get("http://localhost:9092/pub/v1/categories")
        return response.data;
    } catch (err) {
        return {} as any;
    }
}

export const GetItem = async (token: string, id: number): Promise<any> => {
    try {
        const response = await (await httpClient(token)).get("http://localhost:9092/pub/v1/item?id=" + id)
        return response.data;
    } catch (err) {
        return {} as any;
    }
}




export const SearchItems = async (token: string, text: string): Promise<any> => {
    try {
        const response = await (await httpClient(token)).get("http://localhost:9092/pub/v1/search?search=" + text)
        return response.data;
    } catch (err) {
        return {} as any;
    }
}