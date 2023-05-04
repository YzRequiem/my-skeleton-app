<script lang="ts">
    export let buttonContent = {};

    import { drawerStore } from '@skeletonlabs/skeleton';

    function drawerClose(): void {
        drawerStore.close();
    };
    
</script>

<div>
    <a class="btn variant-ghost-primary" href={buttonContent.href} on:click={drawerClose}>{buttonContent.text} </a>
</div>