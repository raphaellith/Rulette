const rules = [
  {
    "front": "In Cantonese",
    "back": "Alternating between English and Cantonese"
  },
  {
    "front": "No filler words",
    "back": "Excessive filler words"
  },
  {
    "front": "Celebrates point gains",
    "back": "Laments point losses"
  },
  {
    "front": "Maintaining eye contact with camera",
    "back": "Avoiding eye contact with camera"
  },
  {
    "front": "Never touching face",
    "back": "Always touching face"
  },
  {
    "front": "Starting with “Ladies and gentlemen”",
    "back": "Starting with “What’s up everybody”"
  },
  {
    "front": "Points to self when named",
    "back": "Calls out self-pointing players by name"
  },
  {
    "front": "Mispronouncing numbers",
    "back": "Over-enunciating numbers"
  },
  {
    "front": "Whisperingly",
    "back": "Shoutingly"
  },
  {
    "front": "People-pleasingly",
    "back": "Ragebaitingly"
  },
  {
    "front": "In complete sentences",
    "back": "Incomplete sentences"
  },
  {
    "front": "Full names only",
    "back": "Prefixing names with “The one and only”"
  },
  {
    "front": "Always cursing",
    "back": "Always flirting"
  },
  {
    "front": "With an extended tongue",
    "back": "Manoeuvring tongue to remove food stuck between teeth"
  },
  {
    "front": "Ending with eyebrow flash",
    "back": "Ending with wink"
  },
  {
    "front": "Rhythmically",
    "back": "With dramatic pauses"
  },
  {
    "front": "Repeating the last word you say",
    "back": "Repeating the first word you say"
  },
  {
    "front": "Applauds after rule reveal",
    "back": "Does drum roll before rule reveal"
  },
  {
    "front": "Holding an invisible phone against one ear",
    "back": "Holding a visible phone against one ear"
  },
  {
    "front": "Starting with a gasp",
    "back": "Ending with a sigh"
  },
  {
    "front": "Zoning out during rule explanation",
    "back": "Locked in during rule explanation"
  },
  {
    "front": "Nonchalantly",
    "back": "Terrifiedly"
  },
  {
    "front": "In third person",
    "back": "In second person"
  },
  {
    "front": "Shaky head",
    "back": "Shaky camera"
  },
  {
    "front": "Doing a one-person pinky promise",
    "back": "Doing a one-person thumb war"
  },
  {
    "front": "Without showing teeth",
    "back": "Always showing teeth"
  },
  {
    "front": "Drunkenly",
    "back": "Hungover"
  },
  {
    "front": "Coughing midway through sentences",
    "back": "Yawning midway through sentences"
  },
  {
    "front": "Starting by introducing self",
    "back": "Ending by thanking listeners"
  },
  {
    "front": "Speaking in slow motion",
    "back": "Speaking as quickly as possible"
  }
]

const hostRule = {
  "front": "Hosts the game",
  "back": "Hosts the game"
}

const modifiers = {
  "Flip": 5,
  "Flip all": 1,
  "Swap": 5,
  "Gift": 4,
}

const prompts = [
  "Explain the food pyramid",
  "Recount a children’s story",
  "Share what you’ve learnt in university",
  "Name seven sea animals",
  "Do a desk tour",
  "Compliment everyone",
  "Explain how a microwave works",
  "Name twelve cities",
  "Describe what you would like for Christmas",
  "Analyse your screen time this week",
  "Redistribute you and your fellow players' rules",
  "Recommend a book",
  "Describe puberty",
  "Name nine famous women",
  "Show us a photo from your phone"
];

function checkNumOfRulesModifiersAndPrompts() {
  const numOfRules = rules.length;
  const numOfModifiers = Object.values(modifiers).reduce((sum, current) => sum + current, 0);
  const numOfPrompts = prompts.length;

  console.log(`Rules: ${numOfRules}`);
  console.log(`Modifiers: ${numOfModifiers}`);
  console.log(`Prompts: ${numOfPrompts}`);
}
