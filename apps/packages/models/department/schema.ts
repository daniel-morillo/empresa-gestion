import { Schema } from "mongoose";
import { IDepartment } from "./dto";

export const departmentSchema = new Schema<IDepartment>({
    name: {type: String, required: true},
    description: {type: String, required: true},
},{timestamps: true});
