<script lang="ts">
  import Nav from '../components/Nav.svelte';
  import '../app.postcss';
</script>

<Nav />
<div class="w-screen">
  <slot />
</div>
