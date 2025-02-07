import type { Actor } from '@serenity-js/core'
import { actorCalled } from '@serenity-js/core'

export class ActorBase {
  protected actor: Actor

  constructor(name: string) {
    this.actor = actorCalled(name)
  }

  getActor() {
    return this.actor
  }
}
