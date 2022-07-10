<script>
	import '../global.css';
</script>

<main>
	<slot />
</main>

<style>
	main > :global(* + *) {
		margin-top: var(--flow-space, 1em);
	}
</style>
