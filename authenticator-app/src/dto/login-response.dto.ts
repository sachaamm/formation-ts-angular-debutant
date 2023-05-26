export interface LoginResponseDto {
    accepted: boolean;
    token: string;
    expiresIn: number;
}