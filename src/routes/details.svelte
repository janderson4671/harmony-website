<script>
    export const prerender = true;

    import { goto } from "$app/navigation";
    import { onMount } from "svelte";
    import { selectedHarmonyID, harmonyData } from "../stores/stores.js";

    var details = null;
    var data = $harmonyData;

    const getDetails = async function() {
        details = data[parseInt($selectedHarmonyID)];
    }

    onMount(async () => {
        getDetails();
    });

    const gotoMain = function() {
        goto("/")
    }
</script>

{#if details != null}
<div id="harmony_content">
    <h1>{details.eventTitle}</h1>
    <div id="tag_span">
        {#each details.tags as tag}
            {#if tag === "Matthew"}
                <span id="span_matt">Matthew</span>
            {:else if tag === "Mark"}
                <span id="span_mark">Mark</span>
            {:else if tag === "Luke"}
                <span id="span_luke">Luke</span>
            {:else}
                <span id="span_john">John</span>
            {/if}
        {/each}
    </div>
    <div>
        {#if details.location !== ""}
            <h2>Location</h2>
            <h2 id="location">{details.location}</h2>
        {/if}
    </div>
    <div id="scripture_links">
        <h2>Links to the New Testament</h2>
        {#each details.scriptureLinks as {title, link}}
            <a href={link} target="_blank">{title}</a>
        {/each}
    </div>
</div>
{/if}
<style>

    * {
        background-color: rgb(227, 242, 255);
    }

    a {
        padding: 7px;
    }

    #harmony_content {
        display: flex;
        flex-direction: column;
        text-align: center;
        align-items: center;
    }

    #tag_span {
        display: flex;
        flex-direction: row;
    }

    #span_matt {
        background-color: rgb(238, 182, 182);
        padding: 5px;
        margin: 5px;
        font-size: large;
    }

    #span_mark {
        background-color: bisque;
        padding: 5px; 
        margin: 5px;
        font-size: large;
    }

    #span_luke {
        background-color: rgb(228, 111, 202);
        padding: 5px;
        margin: 5px;
        font-size: large;
    }

    #span_john {
        background-color: rgb(133, 159, 231);
        padding: 5px;
        margin: 5px;
        font-size: large;
    }

    #location {
        background-color: rgb(183, 183, 255);
        padding: 5px;
        margin: 5px;
    }

    #scripture_links {
        display: flex;
        flex-direction: column;
        margin: 20px;
    }

</style>
