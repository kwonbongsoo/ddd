export abstract class ValueObject {
    // Value objects are defined by their attributes and should be immutable.
    // This class can be extended to create specific value objects.
    
    // Override equals method to compare value objects based on their attributes.
    abstract equals(other: ValueObject): boolean;

    // Override toString method to provide a string representation of the value object.
    abstract toString(): string;
}