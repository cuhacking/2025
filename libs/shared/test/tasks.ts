import { Ensure, equals } from '@serenity-js/assertions'
import { Task } from '@serenity-js/core'
import { Navigate, Page } from '@serenity-js/web'

export function startLoggedOut() {
  return Task.where(`#actor starts logged out`, Navigate.to('/'), Ensure.that(
    Page.current().title().describedAs('website title'),
    equals('cuHacking Portal'),
  ))
}

export function logOut() {
  return Task.where(`#actor logs out`)
}

export function click() {
  return Task.where(`#actor clicks an element`)
}

export function fill() {
  return Task.where(`#actor fills an element`)
}

export function select() {
  return Task.where(`#actor selects an element`)
}
