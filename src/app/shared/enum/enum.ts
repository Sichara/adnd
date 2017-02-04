export class Enum<T> {
    public constructor(public readonly value: T) {}
    
    public toString(): string {
        return this.value.toString();
    }
}
