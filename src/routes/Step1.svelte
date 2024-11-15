<script lang="ts">
  import { push } from 'svelte-spa-router';
  import { checkoutStore } from '../lib/store';
  import { fade, fly } from 'svelte/transition';

  let error = '';

  const handleSubmit = () => {
    if (!$checkoutStore.firstName || !$checkoutStore.lastName || !$checkoutStore.email || !$checkoutStore.phone || !$checkoutStore.password) {
      error = 'Please fill out all required fields.';
      return;
    }
    push('/step2');
  };
</script>

<div class="container mx-auto p-4 max-w-lg" in:fly={{ y: 50, duration: 500 }}>
  <h1 class="text-2xl font-bold mb-6 text-center" in:fade>Create Your Account</h1>
  
  <form on:submit|preventDefault={handleSubmit} class="space-y-4 bg-white p-6 rounded-lg shadow-md hover-scale">
    <div class="form-control" in:fly={{ y: 20, duration: 300, delay: 200 }}>
      <label class="label" for="firstName">
        <span class="label-text">First Name</span>
      </label>
      <input
        type="text"
        id="firstName"
        class="input input-bordered w-full transition-all duration-200 focus:ring-2 focus:ring-primary"
        bind:value={$checkoutStore.firstName}
        required
      />
    </div>

    <div class="form-control" in:fly={{ y: 20, duration: 300, delay: 300 }}>
      <label class="label" for="lastName">
        <span class="label-text">Last Name</span>
      </label>
      <input
        type="text"
        id="lastName"
        class="input input-bordered w-full transition-all duration-200 focus:ring-2 focus:ring-primary"
        bind:value={$checkoutStore.lastName}
        required
      />
    </div>

    <div class="form-control" in:fly={{ y: 20, duration: 300, delay: 400 }}>
      <label class="label" for="email">
        <span class="label-text">Email</span>
      </label>
      <input
        type="email"
        id="email"
        class="input input-bordered w-full transition-all duration-200 focus:ring-2 focus:ring-primary"
        bind:value={$checkoutStore.email}
        required
      />
    </div>

    <div class="form-control" in:fly={{ y: 20, duration: 300, delay: 500 }}>
      <label class="label" for="phone">
        <span class="label-text">Phone Number</span>
      </label>
      <input
        type="tel"
        id="phone"
        class="input input-bordered w-full transition-all duration-200 focus:ring-2 focus:ring-primary"
        bind:value={$checkoutStore.phone}
        required
      />
    </div>

    <div class="form-control" in:fly={{ y: 20, duration: 300, delay: 600 }}>
      <label class="label" for="password">
        <span class="label-text">Password</span>
      </label>
      <input
        type="password"
        id="password"
        class="input input-bordered w-full transition-all duration-200 focus:ring-2 focus:ring-primary"
        bind:value={$checkoutStore.password}
        required
      />
    </div>

    {#if error}
      <p class="text-error text-sm" in:fade={{ duration: 200 }}>{error}</p>
    {/if}

    <button 
      type="submit" 
      class="btn btn-primary w-full transform transition-all duration-200 hover:scale-[1.02] hover:shadow-lg active:scale-95"
    >
      Continue
    </button>
  </form>
</div>