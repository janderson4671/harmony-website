<script>
    export let id;
    export let title;

    export const prerender = true;

    import { selectedHarmonyID } from "../stores/stores.js"
    import { goto } from "$app/navigation";

    const gotoDetails = function() {   
        $selectedHarmonyID = id;

        // goto the details page
        goto("/details")
    }

</script>

<div class="entry_box" on:click={gotoDetails}>
    <h3>{title}</h3>
</div>

<style>
    .entry_box {
        width: 70%;
        height: 20%;
        margin: 10px;
        padding: 10px;
        background-color: #799BF4;
        border-radius: 9px;
        text-align: center;
        align-self: center;

        font-family: Fira Sans;
		font-style: normal;
		font-weight: normal;
		font-size: 18px;
		line-height: 22px;

		color: #FFFFFF;
    }
</style>