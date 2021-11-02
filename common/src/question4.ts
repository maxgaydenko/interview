interface IResult {
 resultValue: number
}

function someFunction(value: number) {
 return new Promise<IResult>((resolve) =>
   setTimeout(() => resolve({ resultValue: value + 1 }), 500)
 )
}

