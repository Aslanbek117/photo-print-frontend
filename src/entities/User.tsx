export interface User {
    // user: {
        email: string;
        token: string;
        username: string;
        lastname: string;
        role: string;
        id: number;
    // }
}


export interface Credentials {
    email: string;
    password: string;
    error: string;
}

export interface RegisterRequestBody {
   user: {
        username: string;
        lastname: string;
        password: string;
        email: string;
        course: string;
   }
}


export interface LoginRequestBody {
    user: {
        username: string;
        password: string;
    }
}

export interface UserObject {
    id: number;
    username: string;
    lastname: string;
    created_at: Date;
    email: string;
    role: string;
    bio: string;
    image: string;
    password: string;
    token: string;
}
