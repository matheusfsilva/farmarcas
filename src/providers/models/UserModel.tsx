/* eslint-disable max-classes-per-file */
export class UserModel {
    name: string = '';

    rede: string[] = [];

    loja: string[] = [];

    profile: string = '';

    email: string = '';

    cpf: string = '';

    status: boolean = true;

    id: number = 0
}

export class UserModelValidation {
    name: boolean = false;

    rede: boolean = false;

    loja: boolean = false;

    profile: boolean = false;

    email: boolean = false;

    cpf: boolean = false;

    status: boolean = false;
}