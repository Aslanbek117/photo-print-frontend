
export interface PhotoPprint {
    id: number; 
    title: string; 
    img: string;
    path: string;
    category: string;
    complex_2: string;
    complex_2_low: string;
    complex_3_low: string;
    complex_3: string;
    transform: string;
    original: string;
    price: number;
}

export interface Category {
    name: string; 
    count: number;
}


export interface SearchDTO {
    message: string;
    result: PhotoPprint[];
    status: boolean;
}

export interface UserPost {
    email: string;
    password: string;
}

export interface CommentsDTO {
    text: string;
    created_at: string;
    email: string;
    name: string;
    state: number;
}

export interface User {
    id: number;
    email: string;
    created_at: string;
}