<script>
    // Placeholder values
    let linkedIn = "https://www.linkedin.com/in/profile";
    let email = "mailto:ABC123@gmail.com";
    let github = "https://github.com/username";
</script>

<!-- Bootstrap Icons CDN -->
<link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
/>

<div class="contactIcons">
    <a href={linkedIn} aria-label="LinkedIn">
        <i class="bi bi-linkedin"></i>
    </a>
    <a href={email} aria-label="Email">
        <i class="bi bi-envelope-at"></i>
    </a>
    <a href={github} aria-label="GitHub">
        <i class="bi bi-github"></i>
    </a>
</div>

<style>
    .contactIcons {
        position: fixed;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1.5rem;
        background-color: white;
    }

    .contactIcons a {
        color: black;
        font-size: 1.5rem;
        text-decoration: none;
        margin: 0.5rem 0;
    }

    .contactIcons a:hover {
        color: orange;
    }
</style>
