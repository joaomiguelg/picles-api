import { Module } from '@nestjs/common';
import { PetController } from './pet.controller';
import CreatePetUseCase from './usecases/create.pet.usecase';
import PetTokens from './pet.tokens';

@Module({
  controllers: [PetController],
  providers: [

    {
      provide: PetTokens.createPetUseCase,
      useClass: CreatePetUseCase
    }

  ]
})
export class PetModule {}
