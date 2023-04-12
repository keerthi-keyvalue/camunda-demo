import { Client, logger } from "camunda-external-task-client-js";
const config = { baseUrl: "http://localhost:8080/engine-rest", use: logger };
import { Provider } from "@nestjs/common";
import { CAMUNDA_TASK_CLIENT } from "../constants";

export const camundaTaskClientProvider: Provider = {
    provide: CAMUNDA_TASK_CLIENT,
    useFactory: () => {
        return new Client(config);
    }
};