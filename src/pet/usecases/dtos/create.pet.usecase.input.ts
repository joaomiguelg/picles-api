export default class CreatePetUseCaseInput{

    name: string;
    type: string;
    size:string;
    gender: string;
    bio: string;
    photo: string;
    createdAt: Date;
    updatedAt: Date;

    constructor(data: Partial<CreatePetUseCaseInput>) {

        Object.assign(this, data);

    }

}