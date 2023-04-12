import { Injectable } from "@nestjs/common";
import { HandleTaskData } from "../models/HandleTaskData";

@Injectable()
export class BaseTaskHandler {

    handleTask(taskData: HandleTaskData): void {
        console.log("Task data: ", taskData);
    }
}