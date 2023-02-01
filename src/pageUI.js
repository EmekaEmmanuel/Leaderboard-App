const displayHtml = () => `
    <header class="app_header">
    <h1>Leaderboard</h1>
</header>

<div class="main">
    <section class="score_section">
        <header>
            <h2>Recent scores</h2>
            <button class="refreshBtn btn_style">Refresh</button>
        </header>

        <article class="score_section_article"></article>

    </section>

    <section class="form_section">
        <header>
            <h2>Add your score</h2>
        </header>

        <form  class="form">
            <fieldset class="border_none form_data">
                <input class="nameInput border_none" type="text" placeholder="Your name" id="" value="" name="name">
                <input class="scoreInput border_none" type="text" placeholder="Your score" id="" value="" name="score">
            </fieldset>

            <fieldset class="border_none form_action">
                <button class="submitBtn btn_style">Submit</button>
            </fieldset>
        </form>
    </section>
</div>
    `;
export default displayHtml;