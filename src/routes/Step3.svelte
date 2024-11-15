<script lang="ts">
  import { push } from 'svelte-spa-router';
  import { checkoutStore } from '../lib/store';

  let error = '';

  const handleSubmit = () => {
    if (!$checkoutStore.medicalConditions || !$checkoutStore.medications || 
        !$checkoutStore.allergies || !$checkoutStore.signature || 
        !$checkoutStore.insuranceCoordinationAgreement) {
      error = 'Please fill out all required fields and accept the terms.';
      return;
    }
    push('/step4');
  };
</script>

<div class="container mx-auto p-4 max-w-lg">
  <h1 class="text-2xl font-bold mb-6 text-center">Medical History</h1>
  
  <form on:submit|preventDefault={handleSubmit} class="space-y-4 bg-white p-6 rounded-lg shadow-md">
    <div class="form-control">
      <label class="label" for="medicalConditions">
        <span class="label-text">Current Medical Conditions</span>
      </label>
      <textarea
        id="medicalConditions"
        class="textarea textarea-bordered w-full"
        placeholder="List any medical conditions or type 'none'"
        bind:value={$checkoutStore.medicalConditions}
        required
      ></textarea>
    </div>

    <div class="form-control">
      <label class="label" for="medications">
        <span class="label-text">Current Medications</span>
      </label>
      <textarea
        id="medications"
        class="textarea textarea-bordered w-full"
        placeholder="List any medications or type 'none'"
        bind:value={$checkoutStore.medications}
        required
      ></textarea>
    </div>

    <div class="form-control">
      <label class="label" for="allergies">
        <span class="label-text">Allergies</span>
      </label>
      <textarea
        id="allergies"
        class="textarea textarea-bordered w-full"
        placeholder="List any allergies or type 'none'"
        bind:value={$checkoutStore.allergies}
        required
      ></textarea>
    </div>

    <div class="form-control">
      <label class="label cursor-pointer">
        <span class="label-text">Have you ever had a reaction to nitrile products?</span>
        <input
          type="checkbox"
          class="checkbox"
          bind:checked={$checkoutStore.nitrileReaction}
        />
      </label>
    </div>

    <div class="form-control">
      <label class="label cursor-pointer">
        <span class="label-text">I understand that FC2 should not be used with other contraceptive devices</span>
        <input
          type="checkbox"
          class="checkbox"
          bind:checked={$checkoutStore.fc2Disclaimer}
          required
        />
      </label>
    </div>

    <div class="form-control">
      <label class="label" for="providerQuestions">
        <span class="label-text">Questions for Healthcare Provider (Optional)</span>
      </label>
      <textarea
        id="providerQuestions"
        class="textarea textarea-bordered w-full"
        bind:value={$checkoutStore.providerQuestions}
      ></textarea>
    </div>

    <div class="form-control">
      <label class="label" for="signature">
        <span class="label-text">Electronic Signature</span>
      </label>
      <input
        type="text"
        id="signature"
        class="input input-bordered w-full"
        placeholder="Type your full name as signature"
        bind:value={$checkoutStore.signature}
        required
      />
    </div>

    <div class="form-control">
      <label class="label cursor-pointer">
        <span class="label-text">I authorize insurance coordination and home delivery</span>
        <input
          type="checkbox"
          class="checkbox"
          bind:checked={$checkoutStore.insuranceCoordinationAgreement}
          required
        />
      </label>
    </div>

    {#if error}
      <p class="text-error text-sm">{error}</p>
    {/if}

    <button type="submit" class="btn btn-primary w-full">Continue</button>
  </form>
</div>