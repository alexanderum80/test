import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { Comment } from '../../comment/entities/comment.entity';
import { Rating } from '../../rating/entities/rating.entity';
import { Reaction } from '../../reaction/entities/reaction.entity';

@Entity('movie', { schema: 'public' })
export class Movie {
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

  @Column('character varying', { name: 'name' })
  name: string;

  @Column('text', { name: 'image' })
  image: string;

  @Column('text', { name: 'url' })
  url: string;

  @Column('character varying', { name: 'language' })
  language: string;

  @Column('text', { name: 'summary' })
  summary: string;

  @OneToMany(() => Comment, (comment) => comment.movie)
  comments: Comment[];

  @OneToOne(() => Rating, (rating) => rating.movie)
  @JoinColumn([{ name: 'ratingId', referencedColumnName: 'id' }])
  rating: Rating;

  @OneToMany(() => Reaction, (reaction) => reaction.movie)
  reactions: Reaction[];
}
