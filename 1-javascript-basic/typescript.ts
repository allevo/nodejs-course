let s: string = 'string'

interface User {
  name: string;
  id: number;
}
let u: User = { name: 'aa', id: 55 }


let u2: User | null = null
u2 = { name: 'aa', id: 55 }

function getCodeOfFirstChar(a: string): number {
  return a.charCodeAt(0)
}

interface LoggedUser extends User {
  sessionIds: [string]
}
let lu: LoggedUser = { name: 'aa', id: 55, sessionIds: ['the-session-id'] }


interface MaybeLoggedUser extends User {
  sessionIds?: [string]
}
let mlu: MaybeLoggedUser = { name: 'aa', id: 55 }

function logMaybeLoggedUser(mlu: MaybeLoggedUser) {
  console.log(mlu)
}
logMaybeLoggedUser({ name: 'foo', id: 55 })

class Point {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}
let p = new Point(2, 2.0)

type OnlyBoolsAndHorses = {
  [key: string]: boolean | Point;
};
