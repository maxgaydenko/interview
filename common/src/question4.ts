interface IResult {
 resultValue: number
}

function someFunction(value: number): Promise<IResult> {
 return new Promise<IResult>((resolve) =>
   setTimeout(() => resolve({ resultValue: value + 1 }), 500)
 )
}

