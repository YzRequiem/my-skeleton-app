<script>
	import BarChart from "$lib/components/BarChart.svelte";
	import Button from "$lib/components/Button.svelte";
	import LineChart from "$lib/components/chartline/LineChart.svelte";

	import {dataChart } from "$lib/stores";
	export let data;

	
	$dataChart.datasets[0].data = data.mesuresParPlante[1] 
	
	// on attend un tableau de valeur 
	// data.mesuresParPlante = {
		// 	'1': [ 66, 55, 44, 33, 22 ],
		// 	'2': [ 33, 46, 55, 78, 20 ],
		// 	'3': [ 33, 20, 46, 55, 78 ] 
		// };
		
	let selectedPlante =data.plantes[0].name
	let mesureDeLaPlanteSelectionee 
	function handleChange(event) {
  		const planteId = event.target.value;
  		mesureDeLaPlanteSelectionee = data.mesuresParPlante[planteId];
		$dataChart.datasets[0].data = mesureDeLaPlanteSelectionee;
		selectedPlante = data.plantes[planteId].name
		console.log(selectedPlante);
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
			 <h2 class="m-5 py-12 text-xl text-center">Hydromértrie {selectedPlante}</h2>
		{/if}
	
		<LineChart />
	</div>
	
</div>

<!-- <div class="container h-full mx-auto justify-center items-center flex flex-col">
 <Chart />
</div> -->
