'use server';

/**
 * @fileOverview AI-powered descriptions for the foundation's core values.
 *
 * - generateCoreValueDescription - Generates a concise and impactful description for a given core value.
 * - CoreValueDescriptionInput - The input type for the generateCoreValueDescription function.
 * - CoreValueDescriptionOutput - The return type for the generateCoreValueDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CoreValueDescriptionInputSchema = z.object({
  coreValue: z
    .string()
    .describe('The core value to generate a description for (e.g., Integrity, Innovation, Impact, Collaboration).'),
});
export type CoreValueDescriptionInput = z.infer<typeof CoreValueDescriptionInputSchema>;

const CoreValueDescriptionOutputSchema = z.object({
  description: z
    .string()
    .describe('A concise and impactful description of the core value.'),
});
export type CoreValueDescriptionOutput = z.infer<typeof CoreValueDescriptionOutputSchema>;

export async function generateCoreValueDescription(
  input: CoreValueDescriptionInput
): Promise<CoreValueDescriptionOutput> {
  return coreValueDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'coreValueDescriptionPrompt',
  input: {schema: CoreValueDescriptionInputSchema},
  output: {schema: CoreValueDescriptionOutputSchema},
  prompt: `You are an expert in crafting concise and impactful descriptions for core values.

  Based on the core value provided, generate a description that resonates with the audience and effectively communicates the foundation's commitment to it.

  Core Value: {{{coreValue}}}
  Description:`, // Ensure this Description refers to the output schema
});

const coreValueDescriptionFlow = ai.defineFlow(
  {
    name: 'coreValueDescriptionFlow',
    inputSchema: CoreValueDescriptionInputSchema,
    outputSchema: CoreValueDescriptionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
