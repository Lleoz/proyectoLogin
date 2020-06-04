export enum TypeGenero {
    Hombre = 1,
    Mujer = 2
}
/*
    •    Nombre completo
    •    Email
    •    Fecha de nacimiento
    •    Número de teléfono mínimo 10 dígitos
    •    Hombre o mujer
*/
export interface User {
    id: number;
    nombreCompleto: string;
    email: string;
    fechaDeNacimiento: Date;
    telefono: string; // Mínimo 10 dígitos
    genero: TypeGenero;
}
