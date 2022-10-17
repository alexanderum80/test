import { Reaction } from './entities/reaction.entity';
import { Injectable } from '@nestjs/common';
import { CreateReactionDto } from './dto/create-reaction.dto';
import { UpdateReactionDto } from './dto/update-reaction.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ReactionService {
  constructor(
    @InjectRepository(Reaction)
    private readonly reactionRepository: Repository<Reaction>,
  ) {}

  create(createReactionDto: CreateReactionDto) {
    return this.reactionRepository.create(createReactionDto);
  }

  async findAll(): Promise<Reaction[]> {
    return await this.reactionRepository.find();
  }

  async findOne(id: string): Promise<Reaction> {
    return await this.reactionRepository.findOneBy({ id: id });
  }

  async update(updateReactionDto: UpdateReactionDto): Promise<Reaction> {
    return await this.reactionRepository.save(updateReactionDto);
  }

  remove(id: number) {
    return this.reactionRepository
      .createQueryBuilder()
      .update()
      .set({
        isDeleted: true,
      })
      .where('id = :id', { id: id })
      .execute();
  }
}
