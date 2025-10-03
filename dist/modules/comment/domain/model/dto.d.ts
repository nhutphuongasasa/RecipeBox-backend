import { z } from "zod";
export declare const CreateCommentDto: z.ZodObject<{
    recipeId: z.ZodString;
    userId: z.ZodString;
    content: z.ZodString;
}, z.core.$strip>;
export type CreateCommentDto = z.infer<typeof CreateCommentDto>;
export declare const UpdateCommentDto: z.ZodObject<{
    recipeId: z.ZodString;
    userId: z.ZodString;
    content: z.ZodString;
}, z.core.$strip>;
export type UpdateCommentDto = z.infer<typeof UpdateCommentDto>;
export declare const ResponseCommentDto: z.ZodObject<{
    id: z.ZodString;
    recipeId: z.ZodString;
    userId: z.ZodString;
    content: z.ZodString;
}, z.core.$strip>;
export type ResponseCommentDto = z.infer<typeof ResponseCommentDto>;
//# sourceMappingURL=dto.d.ts.map