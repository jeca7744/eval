<script lang="ts">
  import Router from 'svelte-spa-router';
  import { routes } from './routes';
  import { fade } from 'svelte/transition';
  import './app.css';
</script>

<main class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
  <div in:fade={{ duration: 300 }}>
    <Router {routes} />
  </div>
</main>

<style>
  :global(.page-transition) {
    transition: all 0.3s ease-in-out;
  }
  
  :global(.hover-scale) {
    transition: transform 0.2s ease;
  }
  
  :global(.hover-scale:hover) {
    transform: scale(1.02);
  }
</style>