function convertNullableValues(myObject) {
    let nullables = Object.entries(myObject).filter(x => x.some(el => el === null || el === undefined))
    nullables = nullables.map(x => x[0]).map(x => myObject[x] === null ? myObject[x] = 0 : myObject[x] = "");
    return myObject
}
