import { Injectable } from "@nestjs/common";

@Injectable()
export class UserService {
  registerUser(): object {
    return { success: 'ok' }
  }
}
