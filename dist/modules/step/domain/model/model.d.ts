import { z } from "zod";
export declare const StepSchema: z.ZodObject<{
    id: z.ZodString;
    recipeId: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    stepTitle: z.ZodString;
    content: z.ZodString;
}, z.core.$strip>;
export type Step = z.infer<typeof StepSchema>;
//# sourceMappingURL=model.d.ts.map