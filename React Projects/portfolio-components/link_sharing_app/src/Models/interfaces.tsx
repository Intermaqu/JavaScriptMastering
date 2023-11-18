export interface ILink{
  link: string;
  icon: string;
  id: string;
}

export interface IUserData {
    name?: string;
    surname?: string;
    email: string;
    password: string;
    photo?: string;
    links: ILink[];
}

export interface ILoginData{
    email: string;
    password: string;
} 

export interface IRegisterData {
    email: string;
    password: string;
    password2: string;
  }

export interface IOption{
    name: string;
    icon: string;
    id: string;
}
