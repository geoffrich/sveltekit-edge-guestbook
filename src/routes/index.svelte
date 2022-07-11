<script lang="ts">
	import { enhance } from '$lib/enhance';
	import type { Visit } from '$lib/types';
	import { slide } from 'svelte/transition';
	export let visited: Visit[];
	export let current_city: string;
	export let signed = false;
</script>

<h1>SvelteKit Edge Guest Book</h1>
{#if visited.length > 0}
	<p>This page has been visited by guests from the following cities:</p>
	<ul>
		{#each visited as visit (visit.city)}
			<li in:slide>{visit.city} ({visit.count})</li>
		{/each}
	</ul>
{:else}
	<p>No one has signed the guest book yet.</p>
{/if}

{#if signed}
	<p>Thanks for signing the guest book!</p>
{:else}
	<p>
		We see you're from {current_city}. Would you like to sign the guest book?
	</p>
	<form
		action="/"
		method="post"
		use:enhance={{
			result: () => {
				signed = true;
			}
		}}
	>
		<button>I was here</button>
	</form>
{/if}
