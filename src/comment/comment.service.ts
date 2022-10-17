import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comment } from './entities/comment.entity';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment)
    private readonly commentRepository: Repository<Comment>,
  ) {}

  create(createCommentDto: CreateCommentDto) {
    return this.commentRepository.create(createCommentDto);
  }

  async findAll(): Promise<Comment[]> {
    return await this.commentRepository.find();
  }

  async findOne(id: string): Promise<Comment> {
    return await this.commentRepository.findOneBy({ id: id });
  }

  async update(
    id: number,
    updateCommentDto: UpdateCommentDto,
  ): Promise<Comment> {
    return await this.commentRepository.save(updateCommentDto);
  }

  remove(id: string) {
    return this.commentRepository
      .createQueryBuilder()
      .update()
      .set({
        isDeleted: true,
      })
      .where('id = :id', { id: id })
      .execute();
  }
}
