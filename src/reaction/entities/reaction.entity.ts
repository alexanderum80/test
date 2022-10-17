import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Movie } from '../../movie/entities/movie.entity';

@Entity('reaction', { schema: 'public' })
export class Reaction {
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
  })
  createdAt: Date;

  @Column('timestamp without time zone', {
    name: 'updatedAt',
    default: () => 'now()',
  })
  updatedAt: Date;

  @Column('enum', {
    name: 'type',
    enum: ['like', 'love', 'care', 'haha', 'wow', 'sad', 'angry'],
    default: () => "'like'",
  })
  type: 'like' | 'love' | 'care' | 'haha' | 'wow' | 'sad' | 'angry';

  @ManyToOne(() => Movie, (movie) => movie.reactions, { onDelete: 'CASCADE' })
  @JoinColumn([{ name: 'movieId', referencedColumnName: 'id' }])
  movie: Movie;
}
