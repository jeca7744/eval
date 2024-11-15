import Step1 from './routes/Step1.svelte';
import Step2 from './routes/Step2.svelte';
import Step3 from './routes/Step3.svelte';
import Step4 from './routes/Step4.svelte';
import Confirmation from './routes/Confirmation.svelte';

export const routes = {
  '/': Step1,
  '/step2': Step2,
  '/step3': Step3,
  '/step4': Step4,
  '/confirmation': Confirmation
};