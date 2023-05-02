<script>
	import Button from '$lib/components/Button.svelte';
</script>

<section class="md:px-36 p-12">
	<div class="py-10">
		<h2>Ajoutez une nouvelle plante</h2>
	</div>
	<form action="">
		<div class="pb-10 w-full xl:w-3/6">
			<label class="label">
				<span>Nom de la plante</span>
				<input class="input p-2" type="text" placeholder="Entrez le nom de votre plante" />
			</label>
		</div>
		<div class="pb-10 w-full xl:w-3/6">
			<label class="label">
				<span>Seuil d'huimidité minimal</span>
				<input class="input p-2" type="text" placeholder="Entrez le seuil d'huimidité minimale" />
			</label>
		</div>
		<div>
			<label class="label">
				<span>Matricule sonde </span>
				<textarea class="textarea" rows="4" placeholder="Entrez votre matricule sonde" />
			</label>
		</div>
		<div class="py-10">
			<Button buttonContent={{ text: 'Ajouter une plante', href: '/' }} />
		</div>
	</form>
</section>
