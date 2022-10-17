import { ReactionType } from './reaction.mode';
import { Movie } from './../../movie/entities/movie.entity';
import { Reaction } from './../entities/reaction.entity';
import { PartialType } from '@nestjs/mapped-types';

export class CreateReactionDto extends PartialType(Reaction) {
  isDeleted: boolean;
  type: ReactionType;
  movie: Movie;
}
