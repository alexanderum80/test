import { Column, Entity, OneToOne } from 'typeorm';
import { Movie } from '../../movie/entities/movie.entity';

@Entity('rating', { schema: 'public' })
export class Rating {
  @Column('uuid', {
    primary: true,
    name: 'id',
    default: () => 'uuid_generate_v4()',
  })
  id: string;

  @Column('boolean', { name: 'isDeleted', default: () => 'false' })
  isDeleted: boolean;

  @Column('timestamp without time zone', {
    name: 'createdAt',
    default: () => 'now()',
  })
  createdAt: Date;

  @Column('timestamp without time zone', {
    name: 'updatedAt',
    default: () => 'now()',
  })
  updatedAt: Date;

  @Column('numeric', {
    name: 'average',
    precision: 5,
    scale: 2,
    default: () => "'0'",
  })
  average: string;

  @OneToOne(() => Movie, (movie) => movie.rating)
  movie: Movie;
}
