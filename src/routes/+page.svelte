<script>
	import BarChart from "$lib/components/BarChart.svelte";
	import Button from "$lib/components/Button.svelte";
	import LineChart from "$lib/components/LineChart.svelte";
	

</script>
<div class="container h-full mx-auto justify-center items-center flex flex-col">
	<div class="w-full md:w-4/6 ">
		<h2 class="m-5 py-12 text-xl text-center">Surveillez l'hydratation de vos plantes</h2>
		<BarChart />
	</div>
	<div class="space-y-5 my-10 w-3/6">
		<h2 class="m-5 text-xl text-center">Selectionnez votre plante</h2>
		<select class="select" size="4" value="1">
			<option value="1">Plante 1</option>
			<option value="2">Plante 2</option>
			<option value="3">Plante 3</option>
			<option value="4">Plante 4</option>
			<option value="5">Plante 5</option>
		</select>
	</div>
	<div>
		<Button buttonContent={{ text: "Ajouter une plante", href: "/new" }} />
	</div>

	<div class="w-full md:w-4/6 ">
		<h2 class="m-5 py-12 text-xl text-center">Hydromértrie Plante 1</h2>

		<LineChart />
	</div>
	
</div>

<!-- <div class="container h-full mx-auto justify-center items-center flex flex-col">
 <Chart />
</div> -->
