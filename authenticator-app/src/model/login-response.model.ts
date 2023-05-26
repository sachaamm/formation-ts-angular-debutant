export interface LoginResponse {
    accepted: boolean;
    token: string;
    expirationDate: Date;
}