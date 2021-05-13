
import m, {str, obj} from './module-to-include.mjs'

async function f() {
    console.log("m, str, obj", m, str, obj)
}

await f()
