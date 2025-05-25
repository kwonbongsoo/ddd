export class ExampleController {
    constructor(private exampleService: ApplicationService) {}

    async getExample(req, res) {
        try {
            const exampleId = req.params.id;
            const example = await this.exampleService.getExampleById(exampleId);
            res.status(200).json(example);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async createExample(req, res) {
        try {
            const exampleData = req.body;
            const newExample = await this.exampleService.createExample(exampleData);
            res.status(201).json(newExample);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async updateExample(req, res) {
        try {
            const exampleId = req.params.id;
            const exampleData = req.body;
            const updatedExample = await this.exampleService.updateExample(exampleId, exampleData);
            res.status(200).json(updatedExample);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async deleteExample(req, res) {
        try {
            const exampleId = req.params.id;
            await this.exampleService.deleteExample(exampleId);
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}