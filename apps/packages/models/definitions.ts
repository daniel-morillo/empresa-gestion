import z from "zod";
import {Types, isValidObjectId} from "mongoose"

export const objectIdDefinition = z
    .instanceof(Types.ObjectId)
    .or(z.string().refine(isValidObjectId));

export const baseModelDefinition = z.object({
    _id: objectIdDefinition,
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
});

export const genderDefinition = z.enum(["MALE", "FEMALE", "OTHER"], {
    message: "Debe seleccionar una opción",
  });
  export type TGenderEnum = z.infer<typeof genderDefinition>;



