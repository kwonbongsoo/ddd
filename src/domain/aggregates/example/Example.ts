export class Example {
    private id: ExampleId;
    private name: string;

    constructor(id: ExampleId, name: string) {
        this.id = id;
        this.name = name;
    }

    public getId(): ExampleId {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public changeName(newName: string): void {
        // Business logic for changing the name
        this.name = newName;
    }

    // Additional business logic methods can be added here
}