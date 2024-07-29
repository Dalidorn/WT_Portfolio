<script>
    // Components
    import ContactLinks from "$lib/components/ContactLinks.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import Nav from "$lib/components/Nav.svelte";

    // Data prop from +page.js
    export let data;
    const { meta, html } = data;
</script>

<Nav />
<ContactLinks />

<main>
    <section class="about">
        <h1>About</h1>
    </section>

    <section class="test">
        <h2>{meta.title}</h2>

        <div class="content">{@html html}</div>
    </section>

    <section class="articles">
        <h2>Articles</h2>
        <!-- Articles content here -->
    </section>

    <section class="background">
        <h2>Background</h2>
        <!-- Personal story content here -->
    </section>

    <section class="other">
        <h2>Other Stuff</h2>
        <!-- Other content here -->
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
        height: 30vh;
        margin-bottom: 2rem;
        padding: 1rem;
        border-radius: 8px;
        background-color: white;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    section h2 {
        font-size: 1.25rem;
        margin-bottom: 1rem;
        color: green;
    }

    .about {
        background-color: green;
        text-align: center;
        height: auto;
    }

    .about h1 {
        font-size: 2rem;
        margin: 0;
        padding: 2rem 0;
        color: white;
    }

    .test h2 {
        font-size: 1.5rem;
        color: orange;
    }

    .content {
        font-size: 1rem;
        line-height: 1.6;
        margin-bottom: 2rem;
    }
</style>
