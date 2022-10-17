import { Reaction } from './entities/reaction.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ReactionService } from './reaction.service';
import { ReactionController } from './reaction.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Reaction])],
  controllers: [ReactionController],
  providers: [ReactionService],
})
export class ReactionModule {}
