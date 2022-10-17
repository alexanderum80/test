import { ReactionType } from './reaction.mode';
import { Movie } from './../../movie/entities/movie.entity';
import { PartialType } from '@nestjs/mapped-types';
import { CreateReactionDto } from './create-reaction.dto';

export class UpdateReactionDto extends PartialType(CreateReactionDto) {
  isDeleted: boolean;
  type: ReactionType;
  movie: Movie;
}
