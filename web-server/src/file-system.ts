import { readFileSync } from 'fs'

export const readExample = (): string => {
  const path = `${__dirname}/data/example.txt`
  const data = readFileSync(path)
  return data.toString();
}
