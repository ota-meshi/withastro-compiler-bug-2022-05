
import {parse} from "@astrojs/compiler"
void main()

/** main */
async function main() {
    const contents = `
---
const foo = '\\''
---
{foo}`
    const result = await parse(contents)
    console.log(result)
}
