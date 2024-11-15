<script lang="ts">
  import { push } from 'svelte-spa-router';
  import { checkoutStore } from '../lib/store';
  import { fade, fly, scale } from 'svelte/transition';

  const handleFinish = () => {
    checkoutStore.set({
      step: 1,
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      password: '',
      gender: '',
      dob: '',
      height: '',
      weight: '',
      shippingAddress: '',
      insuranceGroup: '',
      insurancePCN: '',
      insuranceBIN: '',
      insuranceMemberID: '',
      medicalConditions: '',
      medications: '',
      allergies: '',
      nitrileReaction: false,
      fc2Disclaimer: false,
      providerQuestions: '',
      idFile: null,
      selfieFile: null,
      signature: '',
      billingAddress: '',
      insuranceCoordinationAgreement: false
    });
    push('/');
  };
</script>

<div class="container mx-auto p-4 max-w-lg text-center" in:fly={{ y: 50, duration: 500 }}>
  <div class="bg-white p-6 rounded-lg shadow-md space-y-6 hover-scale">
    <div in:scale={{ duration: 400 }}>
      <div class="w-16 h-16 bg-green-100 rounded-full mx-auto flex items-center justify-center mb-4">
        <svg class="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h1 class="text-2xl font-bold">Thank You!</h1>
    </div>
    
    <p class="text-gray-600" in:fade={{ delay: 200 }}>
      Your consultation request has been submitted successfully. We'll review your information
      and contact you soon.
    </p>
    
    <button 
      class="btn btn-primary transform transition-all duration-200 hover:scale-[1.02] hover:shadow-lg active:scale-95"
      on:click={handleFinish}
      in:fade={{ delay: 400 }}
    >
      Return to Home
    </button>
  </div>
</div>