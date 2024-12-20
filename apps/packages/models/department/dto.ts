import z from "zod";
import { baseModelDefinition } from "../definitions";

export const departmentDefinition = baseModelDefinition.extend({
    name: z.string().nonempty("Department Name must not be empty"),
    description: z.string().nonempty("Department Description must not be empty"),
});

export type IDepartment = z.infer<typeof departmentDefinition>;

export const getDepartmentQueryDefinition = departmentDefinition.partial();
export type TgetDepartmentQueryDefinition = z.infer<typeof getDepartmentQueryDefinition>;

export const getDepartmentParamsDefinition = departmentDefinition.pick({
    _id: true,
});
export type TgetDepartmentParamsDefinition = z.infer<typeof getDepartmentParamsDefinition>;

export const createDepartmentInputDefinition = departmentDefinition.omit({
    _id: true,
});
export type TcreateDepartmentInputDefinition = z.infer<typeof createDepartmentInputDefinition>;

export const updateDepartmentQueryDefinition = departmentDefinition.pick({
    _id: true,
})
export type TupdateDepartmentQueryDefinition = z.infer<typeof updateDepartmentQueryDefinition>;

export const updateDepartmentInputDefinition = departmentDefinition.partial();
export type TupdateDepartmentInputDefinition = z.infer<typeof updateDepartmentInputDefinition>;