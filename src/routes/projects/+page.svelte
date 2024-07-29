<script>
    import ContactLinks from "../../lib/components/ContactLinks.svelte";
    import Footer from "../../lib/components/Footer.svelte";
    import Nav from "../../lib/components/Nav.svelte";
</script>

<Nav />
<ContactLinks />

<main>
    <section class="projects">
        <h1>Projects</h1>
    </section>

    <section class="caseStudies">
        <h2>Case Studies</h2>
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
        height: 30vh;
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

    p {
        font-size: 1rem;
        line-height: 1.6;
    }

    .projects {
        height: auto;
        text-align: center;
        background-color: orange;
    }

    .projects h1 {
        font-size: 2rem;
        margin: 0;
        padding: 2rem 0;
        color: white;
    }
</style>
