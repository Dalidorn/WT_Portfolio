<nav>
    <div class="logo">
        <!-- Place for logo -->
        NF
    </div>

    <ul class="navLinks">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/projects">Projects</a></li>
    </ul>
</nav>

<style>
    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
        background-color: gray;
        border-bottom: 1px solid black;
    }

    .navLinks {
        display: flex;
        justify-content: flex-end;
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .navLinks li {
        margin-left: 1.5rem;
    }

    .navLinks a {
        text-decoration: none;
        color: white;
        font-weight: bold;
    }

    .navLinks a:hover {
        text-decoration: underline;
        color: green;
    }
</style>
