<!-- <script>
	import Button from '$lib/components/Button.svelte';
	import { superForm } from "sveltekit-superforms/client"
	import SuperDebug from "sveltekit-superforms/client/SuperDebug.svelte"
	export let data;

	const { form, errors, enhance, constraints } = superForm(data.form)

</script>

<SuperDebug data={$form} />
<section class="md:px-36 p-12">
	<div class="py-10">
		<h2>Ajoutez une nouvelle plante</h2>
	</div>
	<form method="POST" use:enhance >
		<div class="pb-10 w-full xl:w-3/6">
			<label class="label">
				<span>Nom de la plante</span>
				<input class="input p-2" type="text" name="name" bind:value={$form.name} placeholder="Entrez le nom de votre plante" />
			</label>
			{#if $errors.name}
			<div class="text-red-500 text-sm mb-4">{$errors.name[0]}</div>
			{/if}
		</div>
		<div class="pb-10 w-full xl:w-3/6">
			<label class="label">
				<span>Seuil d'huimidité minimal</span>
				<input class="input p-2" type="number"name="seuil" bind:value={$form.seuil} placeholder="Entrez le seuil d'huimidité minimale" />
			</label>
			{#if $errors.seuil}
			<div class="text-red-500 text-sm mb-4">{$errors.seuil[0]}</div>
			{/if}

		</div>
		<div>
			<label class="label">
				<span>Matricule sonde </span>
				<textarea class="textarea" name="matricule" bind:value={$form.matricule} rows="4" placeholder="Entrez votre matricule sonde" />
			</label>
			{#if $errors.matricule}
			<div class="text-red-500 text-sm mb-4">{$errors.matricule[0]}</div>
			{/if}
		</div>
		<div class="py-10">
			
			<button type="submit" > Ajouter une plante </button>
		</div>
	</form>
</section> -->
