import { Role } from "../model/role.enum";

export class UserDto {
  public id: number;
  public email: string;
  public role: Role;
}
