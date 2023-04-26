<script>
	import Chart from "$lib/components/Chart.svelte";

</script>
<div class="container h-full mx-auto justify-center items-center flex flex-col">
	<div class="space-y-5 my-10">
		<h1 class="m-5">Selectionnez votre plante</h1>
		<select class="select" size="4" value="1">
			<option value="1">Plante 1</option>
			<option value="2">Plante 2</option>
			<option value="3">Plante 3</option>
		</select>
	</div>
	<div>
		<a href="/new" class="btn variant-ghost-primary">Ajoutez une nouvelle plante </a>
	</div>
	<div class="w-96 h-96 mt-10">

		<Chart />
	</div>
</div>

<!-- <div class="container h-full mx-auto justify-center items-center flex flex-col">
 <Chart />
</div> -->
