<script>
	import BarChart from "$lib/components/BarChart.svelte";
	import Button from "$lib/components/Button.svelte";
	import LineChart from "$lib/components/LineChart.svelte";

	import {dataChart, dataBarChart } from "$lib/stores";
	export let data;

	// Data for the chart bar
	$dataBarChart.labels = data.nomDesPlantes
	$dataBarChart.datasets[0].data = data.lastValues
	

	// Data for the chart line 
	$dataChart.datasets[0].data = data.mesuresParPlante[1] 
	let selectedPlante = data.plantes[0].name
	let mesureDeLaPlanteSelectionee 
	function handleChange(event) {
  		const planteId = event.target.value;
		console.log(planteId);
  		mesureDeLaPlanteSelectionee = data.mesuresParPlante[planteId];
		$dataChart.datasets[0].data = mesureDeLaPlanteSelectionee;
		selectedPlante = data.plantesAssoc[planteId]
		$dataChart.datasets[1].data = [data.plantes[planteId].seuil,data.plantes[planteId].seuil,data.plantes[planteId].seuil,data.plantes[planteId].seuil,data.plantes[planteId].seuil,data.plantes[planteId].seuil,data.plantes[planteId].seuil ]
	}
</script>

<div class="container h-full mx-auto justify-center items-center flex flex-col">
	<div class="w-full md:w-4/6 ">
		<h2 class="m-5 py-12 text-xl text-center">Surveillez l'hydratation de vos plantes</h2>
		<BarChart />
	</div>
	<div class="space-y-5 my-10 w-4/6 md:w-3/6">
		<h2 class="m-5 text-xl text-center">Selectionnez votre plante</h2>
		<select class="select" size="4" value="1" on:change={handleChange} >
			{#each data.plantes as plante}
				<option value={plante.id}>{plante.name}</option>
			{/each}
		</select>
	</div>
	<div>
		<Button buttonContent={{ text: "Ajouter une plante", href: "/new" }} />
	</div>

	<div class="w-full md:w-4/6 ">
		{#if selectedPlante}
			 <h2 class="m-5 py-12 text-xl text-center">Hydromértrie de: {selectedPlante}</h2>
		{/if}
	
		<LineChart />
	</div>
	
</div>


