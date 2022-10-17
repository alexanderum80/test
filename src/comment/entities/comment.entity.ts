import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Movie } from '../../movie/entities/movie.entity';

@Entity('comment', { schema: 'public' })
export class Comment {
  @Column('uuid', {
    primary: true,
    name: 'id',
    default: () => 'uuid_generate_v4()',
  })
  id?: string;

  @Column('boolean', { name: 'isDeleted', default: () => 'false' })
  isDeleted?: boolean;

  @Column('text', { name: 'comment' })
  comment: string;

  @Column('character varying', { name: 'username' })
  username: string;

  @Column('text', { name: 'description', nullable: true })
  description: string | null;

  @ManyToOne(() => Movie, (movie) => movie.comments, { onDelete: 'CASCADE' })
  @JoinColumn([{ name: 'movieId', referencedColumnName: 'id' }])
  movie: Movie;
}
