<template>
	<header>
		<nav
			class="flex flex-wrap items-center justify-center gap-5 pb-1 border-b sm:justify-between border-slate-400"
		>
			<h1 class="text-3xl font-bold text-green-700">
				Cinematica
			</h1>
			<ul class="flex items-center justify-between gap-10 mx-auto text-xl">
				<li class="duration-300 hover:text-sky-600 active:text-sky-700">
					<NuxtLink to="/">Popular</NuxtLink>
				</li>
				<li class="duration-300 hover:text-sky-600 active:text-sky-700">
					<NuxtLink to="/top-rated">Best</NuxtLink>
				</li>
				<li class="duration-300 hover:text-sky-600 active:text-sky-700">
					<NuxtLink to="/upcoming">Upcoming</NuxtLink>
				</li>
			</ul>
		</nav>
	</header>
</template>

<style scoped>
	.router-link-exact-active {
		color: #0ea5e9;
		transition: all 0.3s ease-in-out;
	}
</style>
