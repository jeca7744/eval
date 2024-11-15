<script lang="ts">
  import { push } from 'svelte-spa-router';
  import { checkoutStore } from '../lib/store';
  import { fade, fly, scale } from 'svelte/transition';

  let error = '';
  let processing = false;

  const handleSubmit = async () => {
    try {
      processing = true;
      error = '';

      await new Promise(resolve => setTimeout(resolve, 1000));

      const consultationData = {
        ...$checkoutStore,
        paymentStatus: 'completed',
        paymentId: `DEMO-${Date.now()}`
      };
      
      localStorage.setItem('lastConsultation', JSON.stringify(consultationData));
      push('/confirmation');
    } catch (err) {
      console.error('Checkout error:', err);
      error = 'An error occurred during checkout. Please try again.';
    } finally {
      processing = false;
    }
  };
</script>

<div class="container mx-auto p-4 max-w-lg" in:fly={{ y: 50, duration: 500 }}>
  <h1 class="text-2xl font-bold mb-6 text-center" in:fade>Checkout</h1>
  
  <div class="bg-white p-6 rounded-lg shadow-md space-y-6 hover-scale">
    <div class="space-y-4">
      <div class="p-4 bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg" in:scale={{ duration: 300, delay: 200 }}>
        <h2 class="text-lg font-semibold mb-2">Order Summary</h2>
        <div class="flex justify-between items-center text-lg">
          <span>Medical Consultation</span>
          <span class="font-semibold">$10.00</span>
        </div>
      </div>

      <div class="border-t pt-4" in:fly={{ y: 20, duration: 300, delay: 300 }}>
        <h2 class="text-lg font-semibold mb-2">Shipping Address</h2>
        <p class="text-gray-600 whitespace-pre-line">{$checkoutStore.shippingAddress}</p>
      </div>
    </div>

    {#if error}
      <div class="bg-red-50 text-red-600 p-3 rounded-lg" in:fade>
        {error}
      </div>
    {/if}

    <button
      class="btn btn-primary w-full text-lg transform transition-all duration-200 hover:scale-[1.02] hover:shadow-lg active:scale-95 disabled:transform-none"
      on:click={handleSubmit}
      disabled={processing}
    >
      {#if processing}
        <span class="loading loading-spinner"></span>
        Processing Order...
      {:else}
        Complete Order - $10.00
      {/if}
    </button>

    <p class="text-sm text-gray-500 text-center" in:fade={{ delay: 400 }}>
      By clicking above, you agree to our Terms of Service and Privacy Policy
    </p>
  </div>
</div>