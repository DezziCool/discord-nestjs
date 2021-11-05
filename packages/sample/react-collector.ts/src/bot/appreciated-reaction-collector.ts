import { ReactionCollector, On, Once, Filter } from '@discord-nestjs/core';
import { MessageReaction, User } from 'discord.js';

@ReactionCollector({ time: 15000 })
export class AppreciatedReactionCollector {
  @Filter()
  filter(reaction: MessageReaction, user: User): boolean {
    return (
      reaction.emoji.name === '👍' && user.id === reaction.message.author.id
    );
  }

  @On('collect')
  onCollect(): void {
    console.log('collect');
  }

  @Once('end')
  onEnd(): void {
    console.log('end');
  }
}
