import { z } from "zod";
export declare const CommentSchema: z.ZodObject<{
    id: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    recipeId: z.ZodString;
    userId: z.ZodString;
    content: z.ZodString;
}, z.core.$strip>;
export type CommentEntity = z.infer<typeof CommentSchema>;
//# sourceMappingURL=comment.d.ts.map