import UpdatePetByIdUseCaseOutPut from "./update.pet.by.id.usecase.output"

export default class UpdatePetPhotoByIdUseCaseOutput extends UpdatePetByIdUseCaseOutPut {
    
    constructor(data: Partial<UpdatePetPhotoByIdUseCaseOutput>){
        super(data)
        Object.assign(this, data)
    }
}