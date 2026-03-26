'use server';
/**
 * @fileOverview An AI-powered service navigator for "Keluarga Besar Wirahadidjaja" community services.
 *
 * - navigateService - A function that guides users to find relevant community services information.
 * - AiServiceNavigatorInput - The input type for the navigateService function.
 * - AiServiceNavigatorOutput - The return type for the navigateService function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiServiceNavigatorInputSchema = z.object({
  query: z.string().describe('Natural language query about community services or "Kartu Wirahadidjaja".'),
});
export type AiServiceNavigatorInput = z.infer<typeof AiServiceNavigatorInputSchema>;

const AiServiceNavigatorOutputSchema = z.object({
  informationSummary: z.string().describe('A comprehensive summary of the information relevant to the user\'s query, including details about the requested service or "Kartu Wirahadidjaja".'),
  relevantResources: z.array(z.object({
    title: z.string().describe('Title of the resource.'),
    url: z.string().url().describe('URL to the relevant resource (e.g., website, document).'),
  })).describe('A list of relevant online resources or documents.'),
  contactInformation: z.array(z.string()).describe('A list of contact persons, departments, or email addresses relevant to the query.'),
});
export type AiServiceNavigatorOutput = z.infer<typeof AiServiceNavigatorOutputSchema>;

export async function navigateService(input: AiServiceNavigatorInput): Promise<AiServiceNavigatorOutput> {
  return aiServiceNavigatorFlow(input);
}

const aiServiceNavigatorPrompt = ai.definePrompt({
  name: 'aiServiceNavigatorPrompt',
  input: {schema: AiServiceNavigatorInputSchema},
  output: {schema: AiServiceNavigatorOutputSchema},
  prompt: `Anda adalah navigator layanan bertenaga AI untuk "Keluarga Besar Wirahadidjaja".
Tugas Anda adalah memandu anggota komunitas dalam menemukan informasi, sumber daya, dan kontak yang relevan tentang berbagai layanan komunitas atau 'Kartu Wirahadidjaja' berdasarkan pertanyaan dalam bahasa alami mereka.

Layanan komunitas meliputi:
- Bantuan hukum
- Dukungan kesehatan
- Program pendidikan
- Inisiatif pemberdayaan ekonomi
- Layanan wakaf infaq shadaqah
- Layanan sosial budaya lingkungan
- Manfaat 'Kartu Wirahadidjaja'

Berikan ringkasan informasi yang komprehensif, daftar sumber daya yang relevan (dengan judul dan URL), dan informasi kontak yang sesuai.
Jika Anda tidak dapat menemukan informasi yang relevan, jelaskan bahwa Anda tidak dapat menemukan informasi yang relevan untuk saat ini.

Pertanyaan pengguna: {{{query}}}`,
});

const aiServiceNavigatorFlow = ai.defineFlow(
  {
    name: 'aiServiceNavigatorFlow',
    inputSchema: AiServiceNavigatorInputSchema,
    outputSchema: AiServiceNavigatorOutputSchema,
  },
  async (input) => {
    const {output} = await aiServiceNavigatorPrompt(input);
    return output!;
  }
);
