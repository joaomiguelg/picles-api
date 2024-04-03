import { IUseCase } from "src/domain/iusecase..interface";
import GetShelterDetailsUseCaseOutput from "./dtos/get.shelter.details.usecase.outputs";

export default class GetShelterDetailsUseCase implements IUseCase<null, GetShelterDetailsUseCaseOutput> {
    run(input: null): Promise<GetShelterDetailsUseCaseOutput> {
        return Promise.resolve(new GetShelterDetailsUseCaseOutput({

            shelterName: 'Abrigo',
            shelterEmail: 'abb@gmail.com',
            shelterPhone: '199899658552',
            shelterWhatsApp: '1958545255',
            createdAt: new Date(),
            updatedAt: new Date()


        }))
    }

}