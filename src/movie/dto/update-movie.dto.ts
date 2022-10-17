import { Reaction } from './../../reaction/entities/reaction.entity';
import { Rating } from './../../rating/entities/rating.entity';
import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieDto } from './create-movie.dto';

export class UpdateMovieDto extends PartialType(CreateMovieDto) {
  isDeleted: boolean;
  name: string;
  image: string;
  url: string;
  language: string;
  summary: string;
  rating: Rating;
  reactions: Reaction[];
}
