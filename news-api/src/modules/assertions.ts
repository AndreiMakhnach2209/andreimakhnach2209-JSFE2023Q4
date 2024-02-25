export function assertVariable<T>(variable: T | undefined | null, errMsg?: string): T | never {
    if (variable) return variable;
    throw new Error(errMsg);
}
