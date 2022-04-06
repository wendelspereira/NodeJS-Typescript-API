import { Request, Response } from "express";
import { container } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { UploadUserAvatarUseCase } from "./uploadUserAvatarUseCase";

class UploadUserAvatarController {
    async handle(request: Request, response: Response): Promise<Response> {
        const uploadUserAvatarUseCase = container.resolve(
            UploadUserAvatarUseCase
        );
        const { id } = request.user;
        if (!request.file) throw new AppError("No file selected", 400);
        const avatar_file = request.file.filename;
        await uploadUserAvatarUseCase.execute({ user_id: id, avatar_file });
        return response.status(204).send();
    }
}

export { UploadUserAvatarController };
