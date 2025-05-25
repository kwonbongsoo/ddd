export class ExampleRepositoryImpl implements ExampleRepository {
    private examples: Map<string, Example> = new Map();

    async save(example: Example): Promise<void> {
        this.examples.set(example.id.value, example);
    }

    async findById(id: ExampleId): Promise<Example | null> {
        return this.examples.get(id.value) || null;
    }

    async findAll(): Promise<Example[]> {
        return Array.from(this.examples.values());
    }

    async delete(id: ExampleId): Promise<void> {
        this.examples.delete(id.value);
    }
}