import { Reaction } from './entities/reaction.entity';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ReactionService } from './reaction.service';
import { CreateReactionDto } from './dto/create-reaction.dto';
import { UpdateReactionDto } from './dto/update-reaction.dto';

@Controller('reaction')
export class ReactionController {
  constructor(private readonly reactionService: ReactionService) {}

  @Post()
  create(@Body() createReactionDto: CreateReactionDto) {
    return this.reactionService.create(createReactionDto);
  }

  @Get()
  findAll(): Promise<Reaction[]> {
    return this.reactionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Reaction> {
    return this.reactionService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateReactionDto: UpdateReactionDto,
  ): Promise<Reaction> {
    return this.reactionService.update(updateReactionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reactionService.remove(+id);
  }
}
