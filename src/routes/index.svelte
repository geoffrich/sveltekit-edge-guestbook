<script lang="ts">
	import { slide } from 'svelte/transition';
	export let visited: string[]; // TODO: number of people from city?
	export let current_city: string;

	let signed = false;

	function sign() {
		visited.push(current_city);
		visited = visited;
		signed = true;
	}
</script>

<h1>SvelteKit Edge Guest Book</h1>
{#if visited.length > 0}
	<p>This page has been visited by guests from the following cities:</p>
	<ul>
		{#each visited as visit (visit)}
			<li in:slide>{visit}</li>
		{/each}
	</ul>
{:else}
	<p>No one has signed the guest book yet.</p>
{/if}

{#if signed}
	<p>Thanks for signing the guest book!</p>
{:else}
	<p>
		We see you're from {current_city}. would you like to sign the guest book?
	</p>
	<button on:click={sign}>I was here</button>
{/if}
