import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {

    const checkUserExist = this.usersRepository.findById(user_id);
    
    if(!checkUserExist){
      throw new Error("User is not exists!");
    }

    if(checkUserExist.admin === false) {
      throw new Error("Permission denied");
    }

    const users = this.usersRepository.list();

    return users;
  }
}

export { ListAllUsersUseCase };
