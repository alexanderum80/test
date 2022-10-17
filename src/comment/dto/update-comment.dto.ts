import { Movie } from './../../movie/entities/movie.entity';
import { PartialType } from '@nestjs/mapped-types';
import { CreateCommentDto } from './create-comment.dto';

export class UpdateCommentDto extends PartialType(CreateCommentDto) {
  comment?: string;
  username: string;
  description: string | null;
  movie: Movie;
}
