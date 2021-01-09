import { httpClient } from "../http/http";

import { User,  RegisterRequestBody, LoginRequestBody, UserObject } from '../entities/User';


//Products List
export const GetProductsList = async (token: string): Promise<any> =>  {
    try {
        const response = await  (await (await httpClient(token))).get("product/list")
        return response.data;
    } catch (err) {
        return {} as any;
    }
}



export const CreateProduct = async(token: string, body: any): Promise<any> => {
    console.log("HERE");
    try {

        console.log("sending", JSON.stringify(body))
        const response = await (await (await httpClient(token))).post("product/create", body)
        return response.data;
    } catch (err) {
        console.log(err)
        return {} as any;
    }
}

//Objects

export const GetObjectList = async (token: string): Promise<any> =>  {
    try {
        const response = await  (await (await httpClient(token))).get("object/list")
        return response.data;
    } catch (err) {
        return {} as any;
    }
}



export const CreateObject = async(token: string, body: any): Promise<any> => {
    console.log("HERE");
    try {

        console.log("sending", JSON.stringify(body))
        const response = await (await (await httpClient(token))).post("object/create", body)
        return response.data;
    } catch (err) {
        console.log(err)
        return {} as any;
    }
}

//Storage list 
export const GetStorageList = async (token: string): Promise<any> =>  {
    try {
        const response =  await (await httpClient(token)).get("storage/list")
        return response.data;
    } catch (err) {
        return {} as any;
    }
}



export const CreateStorageItem = async(token: string, body: any): Promise<any> => {
    try {

        // let body: CreateProductModel = {
        //     product: createProductDTO
        // }

        // console.log(JSON.stringify(body));
        // let body = {
        //     "product": {
        //         "title": createProductDTO.title,
        //         "isAqua": createProductDTO.isAqua,
        //         "isEat": createProductDTO.isEat,
        //         "unit": createProductDTO.unit
        //     }
        // };
        
        console.log("sending", JSON.stringify(body))
        const response = await  (await httpClient(token)).post("storage/create", body)
        return response.data;
    } catch (err) {
        console.log(err)
        return {} as any;
    }
}



export const CreateIncomeArray = async(token: string, body: any): Promise<any> => {
    console.log("HERE");
    try {

        console.log("sending", JSON.stringify(body))
        const response = await (await httpClient(token)).post("income/create/array", body)
        return response.data;
    } catch (err) {
        console.log(err)
        return {} as any;
    }
}


export const CreateConsumptionArray = async(token: string, body: any): Promise<any> => {
    console.log("HERE");
    try {

        console.log("sending", JSON.stringify(body))
        const response = await (await httpClient(token)).post("consumption/create/array", body)
        return response.data;
    } catch (err) {
        console.log(err)
        return {} as any;
    }
}





export const getAll = async (token: string, users?: User[]) =>  {
    try {
        const response = await (await httpClient(token)).get("/api/user/users/all");
        const data = response.data;
        return data;
    } catch (err) {
        throw err;
    }
}


export const createOne = async (token: string, registerRequestBody?: RegisterRequestBody): Promise<UserObject> => {
    try {
        const response = await (await httpClient(token)).post("/user/create", registerRequestBody);
        return response.data.user;
    } catch (err) { 
        return null as any;
    }
}

export const login = async (loginRequestBody: LoginRequestBody): Promise<UserObject> => {
    try {
        const response = await (await httpClient("null")).post("/user/login", loginRequestBody);
        console.log("login response data", response.data.user);
        return response.data.user;
    } catch (err) {
        console.log("error", err);
        return null as any;
    }
}


 export function getUserStorage(): UserObject {
    let currentUser: UserObject;
    if (localStorage.hasOwnProperty("user")) {
        let object  = JSON.parse(localStorage.getItem("user") || {} as any);
        currentUser = object;
        console.log("current user", currentUser)
        return currentUser;
    } else {
        return null as any;
    }
}


export const loginByEmail = async (token: string, email: string): Promise<UserObject>  =>{
    try {
        const response = await (await httpClient(token)).get("/user/"+ email);
        localStorage.setItem("user", JSON.stringify(response.data));
        return response.data;
    } catch (err) {
        return null as any;
    }
}


export const getUserState= async (token: string, email: string): Promise<UserObject> => {
   const user = await  loginByEmail(token, email);
   return await getUserStorage();
}


export const uploadPhoto = async (token: string, formData: any) => {
    try {
        
        const response = await (await httpClient(token)).post("/user/photo/upload", formData)
        return response.data;
    } catch (err) {
        return null as any;
    }
}

export const setAvatar = async (token: string, formData: any, userId: string) => {
    try {
        const response = await uploadPhoto(token, formData);

        if (response != null) {
            const payload = {
                "photo": {
                    "userId": userId,
                    "imageUrl": response.url
                }
            }
            const s = await (await httpClient(token)).post("user/photo/set", payload );
            return s.data
        }
    } catch (err) {
        return null as any;
    }
}