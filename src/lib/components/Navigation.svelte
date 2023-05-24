<script lang="ts">
    import { AppRail, AppRailTile, drawerStore } from '@skeletonlabs/skeleton';
    import { page } from '$app/stores';
        import { derived } from 'svelte/store';

const selected = derived(page, $page => $page.url.pathname);
   function drawerClose(): void {
        drawerStore.close();
    };
</script>

<nav class="list-nav p-4 " >
    <button class=" md:hidden btn btn-sm mr-4 mb-10" on:click={drawerClose}>
        <span class="md:hidden">
            <svg viewBox="0 0 100 80" class="fill-token w-4 h-4">
                <rect  width="100" height="20" />
                <rect y="30" width="100" height="20" />
                <rect y="60" width="100" height="20" />
            </svg>
        </span>
    </button>
<ul>
    <li class="text-xl "><a href="/" on:click={drawerClose}>Accueil</a></li>
    <li class="text-xl "><a href="/new" on:click={drawerClose}>New</a></li>
    <li class="text-xl "><a href="/alerts" on:click={drawerClose}>Alerts</a></li>
</ul>

</nav>