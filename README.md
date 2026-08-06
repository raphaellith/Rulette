# Rulette

An Apps Script extension that transforms any empty Google Slides presentation into a multi-player board game based on the [_Game Changer_ episode "Rulette"](https://watch.dropout.tv/videos/rulette).

This game can be played over video calls and is suitable for 3+ players.
- All players must have functional Google accounts.
- One player will be responsible for hosting the game.
- All players, except the host, are not expected to be familiar with how this game works.


## Using this repository with Google Slides

> [!NOTE]
> This section does _not_ aim to explain the rules of this board game (at least not fully). For a complete demonstration of how this game works and what it is capable of, see the original _Game Changer_ episode.

> [!WARNING]
> This section contains spoilers for:
> - the _Game Changer_ episode "Rulette"; and
> - this board game.

### Pre-game preparation

Before the game begins, the host should:

1. Create a brand new Google Slides presentation.
2. In the toolbar, select `Extensions > Apps Script`. This opens up a code editor where a code template for a new Apps Script project is shown. Scripts created in this editor will be automatically bound to the Google Slides presentation. (See the documentation for container-bound scripts [here](https://developers.google.com/apps-script/guides/bound).)
3. Delete the `.gs` file containing the code template.
4. Add the Apps Script code in this repository to the newly created project. There are two ways to do this:
    - For each `.gs` file in this repository, create a corresponding `.gs` file in the code editor. Copy and paste the contents over.
    - Clone this repository and run the Bash script `combine_into_one_file.sh`, which automatically combines the contents of all `.gs` files in this repository into one. This script takes one positional argument: the path to the output file (e.g. `./combine_into_one_file.sh dist/output_file.gs`). After the script is executed, copy and paste the contents of this output file to a new file in the Apps Script code editor.
5. Save changes.
6. Close and reopen the Google Slides presentation. A `Rulette` menu should be added to the toolbar.
7. Select `Rulette > Add empty slide`. This adds a new empty slide to the presentation. Customise this slide to display each player's score and active rules.


### During the game

- To initialise the rule board, select `Rulette > Add rules slide`. This creates a new slide containing 30 stacks of cards. Each stack contains, in order from top to bottom:
    - a `RULE` cover card;
    - a card describing a rule;
    - either a `PROMPT` or a `MODIFIER` cover card; and
    - a card describing either a prompt or a modifier.
- To add a `Hosts the game` rule to the active slide, select `Rulette > Add host rule`.
- This version of the game does not come with a giant wheel. Instead, players may opt for dice or random number generators.
- To flip a rule, select that rule and click `Rulette > Flip selected rule`.
- To transfer hosting responsibilities to another player, simply send a share link for the presentation to the new host. Ensure that the new host is authorised to edit the file. The new host is also required to explicitly trust the app's developer before using any of the Apps Script extension's functionalities.


### Sample slides

<p align="center">
  <img src="assets/RuleBoard.png" alt="Generated rule board with 30 stacks of cards." width="600"><br>
  Generated rule board with 30 stacks of cards.
</p>

&nbsp;

<p align="center">
  <img src="assets/Scoreboard.png" alt="Sample scoreboard slide." width="600"><br>
  Sample scoreboard slide.
</p>