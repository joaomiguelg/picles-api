import { IUseCase } from "src/domain/iusecase.interface";
import UpdatePetPhotoByIdUseCaseInput from "./dtos/update.photo.by.id.usecase.input";
import UpdatePetPhotoByIdUseCaseOutput from "./dtos/update.photo.by.id.usecase.output";
import { Inject, Injectable } from "@nestjs/common";
import IPetRepository from "../interfaces/pet.repository.interface";
import PetTokens from "../pet.tokens";
import PetNotFoundError from "src/domain/errors/pet.not.found.error";
import { Pet } from "../schemas/pet.schema";

@Injectable()
export default class UpdatePetPhotoByIdUseCase implements IUseCase<UpdatePetPhotoByIdUseCaseInput, UpdatePetPhotoByIdUseCaseOutput>{

    constructor(
        @Inject(PetTokens.petRepository)
        private readonly PetRepository: IPetRepository
    ) { }

    async run(input: UpdatePetPhotoByIdUseCaseInput): Promise<UpdatePetPhotoByIdUseCaseOutput> {
        const pet = await this.findPetById(input.id)

        if(!pet) {
            throw new PetNotFoundError();
        }

        await this.PetRepository.updateById({
            _id: input.id,
            photo: input.photoPath
        })
    }

    private async findPetById(id: string): Promise<Pet> {

        try {
            return await this.PetRepository.getById(id)
        } catch (error) {
            return null
        }

    }

    

}