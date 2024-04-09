import { Body, Controller, Inject, Post } from '@nestjs/common';
import CreatePetControllerInput from './usecases/dtos/create.pet.controller.input';
import CreatePetUseCaseInput from './usecases/dtos/create.pet.usecase.input';
import { IUseCase } from 'src/domain/iusecase..interface';
import PetTokens from './pet.tokens';

@Controller('pet')
export class PetController {

    @Inject(PetTokens.createPetUseCase)
    private readonly createPetUseCase: IUseCase<CreatePetUseCaseInput,CreatePetUseCaseInput>

    @Post()
    async createPet(@Body() input: CreatePetControllerInput) {
        const useCaseInput = new CreatePetUseCaseInput({...input})
         return await this.createPetUseCase.run(useCaseInput)

    }

}
