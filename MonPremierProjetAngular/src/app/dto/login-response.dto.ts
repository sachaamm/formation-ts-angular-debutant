export interface LoginResponseDto {
  accepted: boolean;
  token: string;
  expirationDate: Date;
}
