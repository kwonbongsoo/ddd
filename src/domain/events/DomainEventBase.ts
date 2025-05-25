export abstract class DomainEventBase {
    private readonly _eventId: string;
    private readonly _occurredOn: Date;

    constructor() {
        this._eventId = this.generateEventId();
        this._occurredOn = new Date();
    }

    private generateEventId(): string {
        return 'event-' + Math.random().toString(36).substr(2, 9);
    }

    public get eventId(): string {
        return this._eventId;
    }

    public get occurredOn(): Date {
        return this._occurredOn;
    }
}