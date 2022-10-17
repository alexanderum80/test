import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentModule } from './comment/comment.module';
import { MovieModule } from './movie/movie.module';
import { ReactionModule } from './reaction/reaction.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'test-rds.ctbawdqzszza.eu-west-3.rds.amazonaws.com',
      username: 'postgres',
      password: 'oeSVUvdRz0wm05qPjx90',
      database: 'movies',
      entities: ['**/**/*.entity.js'],
      synchronize: false,
    }),
    CommentModule,
    MovieModule,
    ReactionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
