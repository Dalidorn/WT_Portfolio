<script>
    import Nav from "../lib/components/Nav.svelte";
    import Footer from "../lib/components/Footer.svelte";
    import ContactLinks from "../lib/components/ContactLinks.svelte";
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
