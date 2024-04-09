import { IsEmail, IsNotEmpty, IsNumberString, IsString, Length, MaxLength } from "class-validator"

export default class CreatePetControllerInput {
    @IsString()
    @IsNotEmpty()
    name: string

    @IsString()
    @Length(10,11)
    @IsNotEmpty()
    type: string

    @IsString()
    @IsNotEmpty()
    size: string

    @IsString()
    @IsNotEmpty()
    gender: string

    @IsString()
    @IsNotEmpty()
    @MaxLength(1024)
    bio: string
}