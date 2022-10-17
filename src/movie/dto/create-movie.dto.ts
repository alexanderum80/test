import { Movie } from './../entities/movie.entity';
import { PartialType } from '@nestjs/mapped-types';
import { Reaction } from './../../reaction/entities/reaction.entity';
import { Rating } from './../../rating/entities/rating.entity';

export class CreateMovieDto extends PartialType(Movie) {
  isDeleted: boolean;
  name: string;
  image: string;
  url: string;
  language: string;
  summary: string;
  rating: Rating;
  reactions: Reaction[];
}
