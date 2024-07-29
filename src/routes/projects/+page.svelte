<script>
    //components
    import ContactLinks from "../../lib/components/ContactLinks.svelte";
    import Footer from "../../lib/components/Footer.svelte";
    import Nav from "../../lib/components/Nav.svelte";

    //data prop from +page.js
    export let data;
    const { major, minor } = data;
</script>

<Nav />
<ContactLinks />

<main>
    <section class="projects">
        <h1>Projects</h1>
    </section>

    <section class="majorProjects">
        <h2>Major</h2>
        {#each Object.keys(major) as project}
            <div class="details">
                <h2>{major[project].meta.title}</h2>

                <div class="content">{@html major[project].html}</div>

                <div class="techStack">
                    <h3>Tech Stack</h3>
                    <ul>
                        {#each major[project].meta.techUsed as tech}
                            <li>{tech}</li>
                        {/each}
                    </ul>
                </div>

                <h3>Related Articles</h3>
                <div class="relatedArticles">
                    {#each major[project].meta.relatedArticles as article}
                        <a href="/">{article}</a>
                    {/each}
                </div>
            </div>
        {/each}
    </section>

    <section class="minorProjects">
        <h2>Minor</h2>
        {#each Object.keys(minor) as project}
            <div class="details">
                <h2>{minor[project].meta.title}</h2>

                <div class="content">{@html minor[project].html}</div>

                <div class="techStack">
                    <h3>Tech Stack</h3>
                    <ul>
                        {#each minor[project].meta.techUsed as tech}
                            <li>{tech}</li>
                        {/each}
                    </ul>
                </div>

                {#if minor[project].meta.relatedArticles}
                    <h3>Related Articles</h3>
                    <div class="relatedArticles">
                        {#each minor[project].meta.relatedArticles as article}
                            <a href="/">{article}</a>
                        {/each}
                    </div>
                {/if}
            </div>
        {/each}
    </section>

    <section class="feedback">
        <h2>Feedback Form</h2>
    </section>
</main>

<Footer />

<style>
    main {
        padding: 1rem;
        margin: 0 auto;
        background-color: tan;
    }

    section {
        min-height: 30vh;
        margin-bottom: 2rem;
        padding: 1rem;
        border-radius: 8px;
        background-color: white;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    h2 {
        font-size: 1.5rem;
        margin-top: 0;
        color: green;
    }

    .projects {
        min-height: auto;
        text-align: center;
        background-color: orange;
    }

    .projects h1 {
        font-size: 2rem;
        margin: 0;
        padding: 2rem 0;
        color: white;
    }

    .details {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 1rem 0;
        padding: 1rem;
        background-color: lightblue;
        border-radius: 8px;
    }

    .content {
        width: 60%;
        margin: 1rem 0;
        padding: 1rem;
        background-color: white;
        border-radius: 8px;
        text-align: center;
    }

    .relatedArticles {
        display: flex;
        width: 80%;
        justify-content: space-between;
    }
</style>
