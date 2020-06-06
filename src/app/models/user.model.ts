export enum TypeGenero {
    Masculino = 1,
    Femenino = 2
}
/*
    •    Nombre completo
    •    Email
    •    Fecha de nacimiento
    •    Número de teléfono mínimo 10 dígitos
    •    Hombre o mujer
*/
export interface User {
    id: string;
    fullName: string;
    email: string;
    birthday: Date;
    phoneNumber: string; // Mínimo 10 dígitos
    genre: TypeGenero;
}

