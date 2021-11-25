import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const checkUserExist = this.usersRepository.findById(user_id);

    if(!checkUserExist) {
      throw new Error("User is not exists!");
    }

    const user = this.usersRepository.turnAdmin(checkUserExist);

    return user;
  }
}

export { TurnUserAdminUseCase };
