export interface UserProfile {
    login: string,
    firstName: string,
    lastName: string,
    roles: string[],
    stateMassage: string
}
export interface UserRegister {
    login: string,
    firstName: string,
    lastName: string,
    password: string
}
export enum UpdateUserAction {
    editUser = 'editUser', changePassword = 'changePassword', default = ''
}
