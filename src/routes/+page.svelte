<script>
    import Nav from "$lib/components/Nav.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import ContactLinks from "$lib/components/ContactLinks.svelte";
</script>

<Nav />
<ContactLinks />

<main>
    <!-- Landing Section -->
    <section id="landing">
        <h1>NF Development</h1>
    </section>

    <!-- Overall Summary -->
    <section id="summary">
        <h2>Overview</h2>
        <p>Here's some text about what this portfolio is about</p>
    </section>

    <!-- Projects Overview -->
    <section id="projects">
        <h2>Projects</h2>
        <p>Here's where each of the project summaries will go</p>
        <a href="/projects">See more</a>
    </section>

    <!-- About Overview -->
    <section id="about">
        <h2>About</h2>
        <p>Here's where some info about me will go</p>
        <a href="/about">Learn more</a>
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

    #landing {
        height: auto;
        text-align: center;
        background-color: lightblue;
    }

    #landing h1 {
        font-size: 2rem;
        margin: 0;
        padding: 2rem 0;
        color: white;
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

    a {
        display: inline-block;
        margin-top: 1rem;
        color: #007bff;
        text-decoration: none;
        font-weight: bold;
    }

    a:hover {
        text-decoration: underline;
    }
</style>
