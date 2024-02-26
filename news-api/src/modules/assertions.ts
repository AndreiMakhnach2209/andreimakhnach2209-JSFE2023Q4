export function assertVariable<T>(variable: T, errMsg?: string): NonNullable<T> | never {
    if (variable) return variable;
    throw new Error(errMsg);
}
