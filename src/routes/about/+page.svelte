<script context="module">

</script>

<script>
    // Components
    import ContactLinks from "$lib/components/ContactLinks.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import Nav from "$lib/components/Nav.svelte";

    // Data prop from +page.js
    export let data;
    const { metadata, html } = data;
</script>

<Nav />
<ContactLinks />

<main>
    <h1>About Stuff</h1>

    <h2>{metadata.title}</h2>

    <div>{@html html }</div>

    <h2>Articles</h2>

    <h2>Personal Story</h2>

    <h2>Other Stuff</h2>

</main>

<Footer />
