<script>
    export let mode = "feedback"; // 'feedback' or 'contact'

    let projects = [
        "Ed-Tech Assignment Platform",
        "AI-Powered Tech Job Board",
        "Testing Suite",
        "User Micro-service",
        "UI/UX Case Studies",
        "Overall Feedback"
    ];
    let formData = {
        context: "",
        name: "",
        email: "",
        message: "",
        subject: "",
        isAnonymous: false,
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Placeholder for form submission logic
        console.log(formData);
        alert("Form submitted!");
    };

    const handleLogin = () => {
        // Placeholder for microservice login
        console.log("Logging in...");
    };
</script>

<section class="container">
    <form on:submit={handleSubmit}>
        <!-- User Info Collection -->
        <div class="group">
            <label for="name">Name:</label>
            <input
                type="text"
                id="name"
                bind:value={formData.name}
                required
                disabled={formData.isAnonymous ? true : false}
            />
        </div>
        <div class="group">
            <label for="email">Email:</label>
            <input
                type="email"
                id="email"
                bind:value={formData.email}
                required
                disabled={formData.isAnonymous ? true : false}
            />
        </div>

        <div class="separator">- or -</div>

        <div class="group">
            <button
                type="button"
                on:click={handleLogin}
                disabled={formData.isAnonymous ? true : false}
                >Log in with an account</button
            >
        </div>

        <!-- toggle for anon feedback -->
        {#if mode === "feedback"}
            <div class="separator">- or -</div>

            <div class="group">
                <input
                    type="checkbox"
                    id="isAnonymous"
                    bind:checked={formData.isAnonymous}
                />
                <label for="isAnonymous">Submit anonymously</label>
            </div>
        {/if}

        <!-- Feedback Form -->
        {#if mode === "feedback"}
            <p>Project:</p>
            <div class="projectSelect">
                {#each projects as project}
                    <div class="selector">
                        <input
                            type="radio"
                            id={project}
                            name="context"
                            value={project}
                            bind:group={formData.context}
                        />
                        <label for={project}>{project}</label>
                    </div>
                {/each}
            </div>
            <div class="group">
                <label for="message">Message:</label>
                <textarea
                    id="message"
                    bind:value={formData.message}
                    rows="5"
                    required
                ></textarea>
            </div>
        {/if}


        <!-- Contact Form -->
        {#if mode === "contact"}
            <div class="group">
                <label for="subject">Subject:</label>
                <input
                    type="text"
                    id="subject"
                    bind:value={formData.subject}
                    required
                />
            </div>
            <div class="group">
                <label for="message">Message:</label>
                <textarea
                    id="message"
                    bind:value={formData.message}
                    rows="5"
                    required
                ></textarea>
            </div>
        {/if}

        <button type="submit">Submit</button>
    </form>
</section>

<style>
    .container {
        width: 50%;
        margin: 0 auto;
        padding: 1rem;
        background-color: #fff;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .group {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 1rem;
        width: 100%;
    }

    .projectSelect {
        display: flex;
        align-items: flex-start;
        justify-content: space-around;
        margin-bottom: 1rem;
        width: 100%;
    }

    .selector {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 0 1rem;
        width: 90px;
    }

    label {
        display: block;
        margin-bottom: 0.5rem;
        color: #333;
        text-align: center;
    }

    input[type="text"],
    input[type="email"],
    textarea {
        width: 90%;
        padding: 0.5rem 0;
        border: 1px solid #ccc;
        border-radius: 4px;
        font-size: 1rem;
        resize: none;
    }

    input[type="radio"],
    input[type="checkbox"] {
        width: 20px;
        height: 20px;
        margin-bottom: 0.5rem;
    }

    .separator {
        text-align: center;
        margin-bottom: 1rem;
        color: gray;
    }

    button {
        display: block;
        width: 90%;
        padding: 0.75rem;
        background-color: orange;
        color: white;
        border: none;
        border-radius: 4px;
        font-size: 1rem;
        cursor: pointer;
    }

    button:hover {
        background-color: darkorange;
    }

    button:disabled {
        background-color: gray;
        cursor: not-allowed;
    }

    input:disabled {
        background-color: lightgray;
        cursor: not-allowed;
    }
</style>
