import { Movie } from './entities/movie.entity';
import { Injectable } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(Movie)
    private readonly movieRepository: Repository<Movie>,
  ) {}

  create(createMovieDto: CreateMovieDto) {
    return this.movieRepository.create(createMovieDto);
  }

  async findAll(): Promise<Movie[]> {
    return await this.movieRepository.find({
      relations: {
        rating: true,
      },
    });
  }

  async findOne(id: string): Promise<Movie> {
    return await this.movieRepository.findOne({
      where: { id: id },
      relations: {
        rating: true,
      },
    });
  }

  update(updateMovieDto: UpdateMovieDto): Promise<Movie> {
    return this.movieRepository.save(updateMovieDto);
  }

  remove(id: string) {
    return this.movieRepository
      .createQueryBuilder()
      .update()
      .set({
        isDeleted: true,
      })
      .where('id = :id', { id: id })
      .execute();
  }
}
