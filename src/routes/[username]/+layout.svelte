<script lang="ts">
	import '../../app.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children, data } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<nav class="flex flex-flow w-screen items-center justify-center list-none h-16 bg-slate-300 mb-6">
	<ul class="flex flex-flow justify-between items-center w-60">
		<a href="/{data.username}/events"><li>Events</li></a>
		<a href="/{data.username}/home"><li>Home</li></a>
		<a href="/{data.username}/friends"><li>Friends</li></a>	
	</ul>
</nav>

{@render children()}
