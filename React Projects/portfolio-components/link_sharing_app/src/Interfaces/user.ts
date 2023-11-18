import { ILink } from "./link";

export interface IUserData {
    name?: string;
    surname?: string;
    email: string;
    password: string;
    photo?: string;
    links: ILink[];
}