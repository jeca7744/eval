<script lang="ts">
  import { push } from 'svelte-spa-router';
  import { checkoutStore } from '../lib/store';

  let error = '';

  const handleSubmit = () => {
    if (!$checkoutStore.gender || !$checkoutStore.dob || !$checkoutStore.height || 
        !$checkoutStore.weight || !$checkoutStore.shippingAddress || 
        !$checkoutStore.insuranceGroup || !$checkoutStore.insurancePCN || 
        !$checkoutStore.insuranceBIN || !$checkoutStore.insuranceMemberID) {
      error = 'Please fill out all required fields.';
      return;
    }
    push('/step3');
  };
</script>

<div class="container mx-auto p-4 max-w-lg">
  <h1 class="text-2xl font-bold mb-6 text-center">Medical Information</h1>
  
  <form on:submit|preventDefault={handleSubmit} class="space-y-4 bg-white p-6 rounded-lg shadow-md">
    <div class="form-control">
      <label class="label" for="gender">
        <span class="label-text">Gender Assigned at Birth</span>
      </label>
      <select
        id="gender"
        class="select select-bordered w-full"
        bind:value={$checkoutStore.gender}
        required
      >
        <option value="">Select gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
    </div>

    <div class="form-control">
      <label class="label" for="dob">
        <span class="label-text">Date of Birth</span>
      </label>
      <input
        type="date"
        id="dob"
        class="input input-bordered w-full"
        bind:value={$checkoutStore.dob}
        required
      />
    </div>

    <div class="form-control">
      <label class="label" for="height">
        <span class="label-text">Height (in inches)</span>
      </label>
      <input
        type="number"
        id="height"
        class="input input-bordered w-full"
        bind:value={$checkoutStore.height}
        required
      />
    </div>

    <div class="form-control">
      <label class="label" for="weight">
        <span class="label-text">Weight (in pounds)</span>
      </label>
      <input
        type="number"
        id="weight"
        class="input input-bordered w-full"
        bind:value={$checkoutStore.weight}
        required
      />
    </div>

    <div class="form-control">
      <label class="label" for="shippingAddress">
        <span class="label-text">Shipping Address</span>
      </label>
      <textarea
        id="shippingAddress"
        class="textarea textarea-bordered w-full"
        bind:value={$checkoutStore.shippingAddress}
        required
      ></textarea>
    </div>

    <div class="divider">Insurance Information</div>

    <div class="form-control">
      <label class="label" for="insuranceGroup">
        <span class="label-text">Insurance Group</span>
      </label>
      <input
        type="text"
        id="insuranceGroup"
        class="input input-bordered w-full"
        bind:value={$checkoutStore.insuranceGroup}
        required
      />
    </div>

    <div class="form-control">
      <label class="label" for="insurancePCN">
        <span class="label-text">PCN</span>
      </label>
      <input
        type="text"
        id="insurancePCN"
        class="input input-bordered w-full"
        bind:value={$checkoutStore.insurancePCN}
        required
      />
    </div>

    <div class="form-control">
      <label class="label" for="insuranceBIN">
        <span class="label-text">BIN</span>
      </label>
      <input
        type="text"
        id="insuranceBIN"
        class="input input-bordered w-full"
        bind:value={$checkoutStore.insuranceBIN}
        required
      />
    </div>

    <div class="form-control">
      <label class="label" for="insuranceMemberID">
        <span class="label-text">Member ID</span>
      </label>
      <input
        type="text"
        id="insuranceMemberID"
        class="input input-bordered w-full"
        bind:value={$checkoutStore.insuranceMemberID}
        required
      />
    </div>

    {#if error}
      <p class="text-error text-sm">{error}</p>
    {/if}

    <button type="submit" class="btn btn-primary w-full">Continue</button>
  </form>
</div>