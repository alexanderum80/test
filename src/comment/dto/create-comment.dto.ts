import { PartialType } from '@nestjs/mapped-types';
import { Movie } from './../../movie/entities/movie.entity';
import { Comment } from '../entities/comment.entity';

export class CreateCommentDto extends PartialType(Comment) {
  comment?: string;
  username: string;
  description: string | null;
  movie: Movie;
}
