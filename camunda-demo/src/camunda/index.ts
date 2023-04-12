import { Module } from "@nestjs/common";
import { camundaTaskClientProvider } from "./providers/camundaTaskClientProvider";
import { TaskHandlerSubscriberService } from "./services/TaskHandlerSubscriberService";

@Module({
    providers: [camundaTaskClientProvider, TaskHandlerSubscriberService]
})
export class CamundaModule{}