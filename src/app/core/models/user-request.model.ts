import { GenreType } from './genre-type';

export interface UserRequest {
    name: string;
    lastName: string;
    secondLastName: string;
    email: string;
    birthDate: string;
    phoneNumber: string;
    genre: GenreType;
}
