export interface ExampleRepository {
    findById(id: ExampleId): Promise<Example | null>;
    save(example: Example): Promise<void>;
    findAll(): Promise<Example[]>;
}