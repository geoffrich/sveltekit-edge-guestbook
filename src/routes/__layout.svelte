<script>
	import '../global.css';
</script>

<main>
	<slot />
</main>

<style>
	main {
		max-width: 100ch;
		margin: 0 auto;
		padding: 1rem;
	}

	main > :global(* + *) {
		margin-top: var(--flow-space, 1em);
	}
</style>
