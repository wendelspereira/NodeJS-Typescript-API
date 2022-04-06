import { inject, injectable } from "tsyringe";
import { AppError } from "@shared/errors/AppError";
import { IUserRepository } from "@modules/accounts/infra/typeorm/repository/IUserRepository";
import { deleteFile } from "@util/file";

interface IRequest {
    user_id: string;
    avatar_file: string;
}

// interface IUserAvatar
@injectable()
class UploadUserAvatarUseCase {
    constructor(
        @inject("UserRepository")
        private userRepository: IUserRepository
    ) {}

    async execute({ user_id, avatar_file }: IRequest): Promise<void> {
        const user = await this.userRepository.findById(user_id);
        if (!user) throw new AppError("User not found", 404);

        if (user.avatar) {
            await deleteFile(`./tmp/avatar/${user.avatar}`);
        }

        user.avatar = avatar_file;
        await this.userRepository.create(user);
    }
}

export { UploadUserAvatarUseCase };
