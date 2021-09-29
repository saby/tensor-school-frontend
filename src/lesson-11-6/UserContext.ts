import {createContext} from "react";

interface ISchool {
    name: string;
    address: string;
    startDate: Date;
    finishDate: Date;
}

interface IUniversity extends ISchool {
    specialization: string;
}

export interface IUserData {
    firstName: string;
    lastName: string;
    patronym: string;
    gender: 'мужской' | 'женский';
    birthdate: Date;

    phone: string;
    email: string;
    location: string;

    work: string;
    hobby: string;
    music: string;
    films: string;
    books: string;
    games: string;
    about: string;

    school: Partial<ISchool>;
    university: Partial<IUniversity>;
}

interface IUserUpdate {
    updateUser: (data: Partial<IUserData>) => void;
}

export interface IUserContext extends Partial<IUserData>, IUserUpdate {}

export const UserContext = createContext<IUserContext>({updateUser() {}});
