import { IUseCase } from "src/domain/iusecase.interface";
import UpdatePetByIdUseCaseInput from "./dtos/update.pet.by.id.usecase.input";
import UpdatePetByIdUseCaseOutPut from "./dtos/update.pet.by.id.usecase.output";
import { Inject, Injectable } from "@nestjs/common";
import IPetRepository from "../interfaces/pet.repository.interface";
import PetTokens from "../pet.tokens";
import { Pet } from "../schemas/pet.schema";
import PetNotFoundError from "src/domain/errors/pet.not.found.error";
import AppTokens from "src/app.tokens";
import IFileService from "src/interfaces/file.service.interface";

@Injectable()
export default class UpdatePetByIdUseCase implements IUseCase<UpdatePetByIdUseCaseInput, UpdatePetByIdUseCaseOutPut>{
    

    constructor(
        @Inject(PetTokens.petRepository)
        private readonly petRepository: IPetRepository,

        @Inject(AppTokens.fileService)
        private readonly fileService: IFileService
    ) {}

    async run(input: UpdatePetByIdUseCaseInput): Promise<UpdatePetByIdUseCaseOutPut> {
        let pet = await this.getPetById(input.id)

        if(!pet) {

            throw new PetNotFoundError()

        }

        await this.petRepository.updateById({
            ...input,
            _id: input.id
        });

        const petPhoto = !!pet.photo ? (await this.fileService.readFile(pet.photo)).toString('base64') : null


        return new UpdatePetByIdUseCaseOutPut({
            id: pet._id,
            name: pet.name,
            type: pet.type,
            size: pet.type,
            gender: pet.gender,
            bio: pet.bio,
            photo: petPhoto,
            createdAt: pet.createdAt,
            updatedAt: pet.updatedAt
        })
    }

    private async getPetById(id: string): Promise<Pet> {

        try {
            return await this.petRepository.getById(id)
        } catch (error) {
            return null
        }

    }

}