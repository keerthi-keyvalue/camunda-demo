import { Provider } from "@nestjs/common";
import { TaskHandlerSubscriberService } from "../services/TaskHandlerSubscriberService";
import { BaseTaskHandler } from "../handlers/BaseTaskHandler";

/**
 * This is a sample provider that subscribes a task handler to a topic.
 * For custom task handlers, you can extend the BaseTaskHandler class to implement the handleTask method.
 * Create a new provider for each task handler and inject the Task handler and change the topic name.
 */
export const sampleTaskHandlerProvider: Provider = {
    provide: "TASK_HANDLER",
    inject: [TaskHandlerSubscriberService, BaseTaskHandler],
    useFactory: (taskHandlerSubscriberService: TaskHandlerSubscriberService, handler: BaseTaskHandler) => {
        return taskHandlerSubscriberService.subscribe("topic-name", handler);
    }
};