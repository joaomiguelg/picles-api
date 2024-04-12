import PetResponse from "src/pet/dtos/pet.response";

export default class GetPetsUseCaseOutput {
    currentPage: number;
    totalPage: number;
    items: PetResponse[];

    constructor(data: Partial<GetPetsUseCaseOutput>) {
        Object.assign(this, data);
    }
}