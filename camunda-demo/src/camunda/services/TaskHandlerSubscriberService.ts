import { Injectable, Inject } from "@nestjs/common";
import { Client } from "camunda-external-task-client-js";
import { CAMUNDA_TASK_CLIENT } from "../constants";
import { BaseTaskHandler } from "../handlers/BaseTaskHandler";

@Injectable()
export class TaskHandlerSubscriberService {
    constructor(
        @Inject(CAMUNDA_TASK_CLIENT) private readonly client: Client
    ){}

    public async subscribe(topic: string, handler: BaseTaskHandler) {
        this.client.subscribe(topic, handler.handleTask.bind(handler));
    }
}