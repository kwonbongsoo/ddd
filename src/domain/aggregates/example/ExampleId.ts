export class ExampleId {
    private readonly id: string;

    constructor(id: string) {
        if (!id) {
            throw new Error("An ExampleId cannot be empty.");
        }
        this.id = id;
    }

    public getId(): string {
        return this.id;
    }

    public equals(other: ExampleId): boolean {
        return this.id === other.getId();
    }

    public toString(): string {
        return this.id;
    }
}