import { z } from "zod";
export declare const CreateCategoryDto: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodNullable<z.ZodOptional<z.ZodString>>;
}, z.core.$strip>;
export type CreateCategoryDto = z.infer<typeof CreateCategoryDto>;
export declare const UpdateCategoryDto: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    description: z.ZodNullable<z.ZodOptional<z.ZodString>>;
}, z.core.$strip>;
export type UpdateCategoryDto = z.infer<typeof UpdateCategoryDto>;
export declare const ResponseCategoryDto: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    description: z.ZodNullable<z.ZodOptional<z.ZodString>>;
}, z.core.$strip>;
export type ResponseCategoryDto = z.infer<typeof ResponseCategoryDto>;
//# sourceMappingURL=dto.d.ts.map