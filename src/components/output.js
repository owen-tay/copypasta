import { React, useRef } from "react";

const Output = ({ textArray }) => {
  const wordCategories = [
    { words: ["love", "heart", "lover"], emoji: "\u2764" },
    { words: ["hate", "bad", "evil"], emoji: "\uD83D\uDC7F" },
    { words: ["happy", "joy", "cheerful", "glad"], emoji: "\uD83D\uDE01" },
    { words: ["sad", "depressed", "unhappy", "gloomy"], emoji: "\uD83D\uDE14" },
    { words: ["angry", "rage", "furious", "mad"], emoji: "\uD83D\uDE21" },
    {
      words: ["surprised", "astonished", "amazed", "shocked"],
      emoji: "\uD83D\uDE32",
    },
    {
      words: ["laugh", "funny", "joke", "humor", "lmao", "XD", "lol", "rofl"],
      emoji: "\uD83D\uDE02",
    },
    {
      words: ["confused", "puzzled", "unclear", "muddled"],
      emoji: "\uD83D\uDE15",
    },
    {
      words: ["scared", "fear", "terror", "frightened"],
      emoji: "\uD83D\uDE31",
    },
    {
      words: ["disgust", "revulsion", "repulsion", "aversion"],
      emoji: "\uD83E\uDD2E",
    },
    {
      words: ["thinking", "thoughtful", "pondering", "considering"],
      emoji: "\uD83E\uDD14",
    },
    {
      words: [
        "excitement",
        "enthusiasm",
        "thrill",
        "elation",
        "euphoria",
        "exhilaration",
        "jubilation",
        "animation",
        "vivacity",
        "glee",
      ],
      emoji: "\uD83D\uDE03",
    },
    {
      words: [
        "relieved",
        "soothe",
        "alleviate",
        "ease",
        "comfort",
        "calm",
        "reassure",
        "pacify",
        "unburden",
        "allay",
      ],
      emoji: "\uD83D\uDE4C",
    },
    {
      words: [
        "hope",
        "optimism",
        "expectation",
        "aspiration",
        "confidence",
        "faith",
        "anticipation",
        "dream",
        "ambition",
        "vision",
      ],
      emoji: "\u270C️",
    },
    {
      words: [
        "courage",
        "bravery",
        "fearlessness",
        "valor",
        "daring",
        "boldness",
        "heroism",
        "gallantry",
        "audacity",
        "intrepidity",
      ],
      emoji: "\uD83D\uDEE1",
    },
    {
      words: [
        "peace",
        "harmony",
        "serenity",
        "tranquility",
        "unity",
        "balance",
        "calmness",
        "composure",
        "equanimity",
        "stillness",
      ],
      emoji: "\u270C️",
    },
    {
      words: [
        "pride",
        "confidence",
        "self-esteem",
        "dignity",
        "self-worth",
        "achievement",
        "glory",
        "honour",
        "triumph",
        "vanity",
      ],
      emoji: "\uD83D\uDE0E",
    },
    {
      words: [
        "patience",
        "tolerance",
        "endurance",
        "perseverance",
        "forbearance",
        "steadfastness",
        "resilience",
        "composure",
        "long-suffering",
        "fortitude",
      ],
      emoji: "\u23F3",
    },
    {
      words: [
        "curiosity",
        "inquisitiveness",
        "exploration",
        "wonder",
        "intrigue",
        "quest",
        "investigation",
        "discovery",
        "excursion",
        "pursuit",
      ],
      emoji: "\uD83D\uDD0E",
    },
    {
      words: [
        "gratitude",
        "thankfulness",
        "appreciation",
        "recognition",
        "acknowledgment",
        "gratefulness",
        "thanksgiving",
        "obligation",
        "indebtedness",
        "grace",
      ],
      emoji: "\uD83D\uDE4F",
    },
    {
      words: [
        "ambivalence",
        "indecision",
        "hesitation",
        "uncertainty",
        "doubt",
        "equivocation",
        "vacillation",
        "conflict",
        "wavering",
        "inconsistency",
      ],
      emoji: "\uD83E\uDD14",
    },
    {
      words: [
        "disappointment",
        "frustration",
        "letdown",
        "regret",
        "dismay",
        "discouragement",
        "despondency",
        "displeasure",
        "discontent",
        "disillusionment",
      ],
      emoji: "\uD83D\uDE1E",
    },
    {
      words: [
        "disgust",
        "filth",
        "feces",
        "stink",
        "odor",
        "repugnant",
        "revolting",
        "nauseating",
        "offensive",
        "foul",
        "shit",
        "crap",
        "poop",
        "poopy",
        "stinky",
      ],
      emoji: "\uD83D\uDCA9",
    },

    {
      words: [
        "embarrassment",
        "shyness",
        "bashfulness",
        "modesty",
        "flattery",
        "innocence",
        "coyness",
        "nervousness",
        "flushed",
        "timidity",
        "Blush",
        "Hot",
        "Down bad",
        "Horny",
        "turned on",
        "blushing",
        "flustered",
      ],
      emoji: "\uD83D\uDEA6",
    },

    {
      words: [
        "cat",
        "kitten",
        "feline",
        "purr",
        "meow",
        "whiskers",
        "paw",
        "pussy",
      ],
      emoji: "\uD83D\uDC31",
    },
    {
      words: ["dog", "puppy", "canine", "woof", "bark", "tail", "paws"],
      emoji: "\uD83D\uDC36",
    },
    {
      words: ["horse", "stallion", "mare", "gallop", "hooves", "mane", "neigh"],
      emoji: "\uD83D\uDC34",
    },
    {
      words: ["cow", "cattle", "moo", "milk", "udder", "farm", "graze"],
      emoji: "\uD83D\uDC2E",
    },
    {
      words: ["pig", "swine", "oink", "snout", "mud", "farm", "squeal"],
      emoji: "\uD83D\uDC37",
    },
    {
      words: [
        "monkey",
        "ape",
        "chimpanzee",
        "banana",
        "swing",
        "playful",
        "curious",
      ],
      emoji: "\uD83D\uDC12",
    },
    {
      words: ["elephant", "tusk", "trunk", "herd", "mammoth", "wild", "gray"],
      emoji: "\uD83D\uDC18",
    },
    {
      words: ["bird", "feather", "fly", "tweet", "wings", "beak", "nest"],
      emoji: "\uD83D\uDC26",
    },
    {
      words: ["fish", "swim", "aquatic", "fins", "gills", "ocean", "sea"],
      emoji: "\uD83D\uDC1F",
    },
    {
      words: [
        "spider",
        "arachnid",
        "web",
        "crawl",
        "eight legs",
        "creepy",
        "fear",
      ],
      emoji: "\uD83D\uDD77",
    },
    {
      words: ["rabbit", "bunny", "hare", "hop", "carrot", "burrow", "cute"],
      emoji: "\uD83D\uDC30",
    },
    {
      words: [
        "bear",
        "grizzly",
        "roar",
        "wilderness",
        "hibernate",
        "paw",
        "fierce",
      ],
      emoji: "\uD83D\uDC3B",
    },
    {
      words: ["lion", "king", "roar", "mane", "predator", "safari", "majestic"],
      emoji: "\uD83E\uDD81",
    },
    {
      words: [
        "tiger",
        "stripes",
        "roar",
        "wildcat",
        "jungle",
        "feline",
        "ferocious",
      ],
      emoji: "\uD83D\uDC2F",
    },
    {
      words: ["fox", "cunning", "sly", "tail", "forest", "hunt", "clever"],
      emoji: "\uD83E\uDD8A",
    },
    {
      words: [
        "dolphin",
        "marine",
        "ocean",
        "swim",
        "playful",
        "intelligent",
        "fins",
      ],
      emoji: "\uD83D\uDC2C",
    },
    {
      words: [
        "octopus",
        "tentacles",
        "ocean",
        "suction",
        "intelligent",
        "camouflage",
        "marine",
      ],
      emoji: "\uD83D\uDC19",
    },
    {
      words: ["bee", "honey", "pollen", "buzz", "hive", "sting", "pollination"],
      emoji: "\uD83D\uDC1D",
    },
    {
      words: ["koala", "eucalyptus", "climb", "tree", "sleepy", "australia"],
      emoji: "\uD83D\uDC28",
    },
    {
      words: [
        "giraffe",
        "tall",
        "neck",
        "safari",
        "spots",
        "graceful",
        "wildlife",
      ],
      emoji: "\uD83E\uDD92",
    },
    {
      words: ["gorilla", "ape", "strong", "intimidating", "jungle", "powerful"],
      emoji: "\uD83E\uDD8D",
    },
    {
      words: [
        "zebra",
        "stripes",
        "wildlife",
        "safari",
        "herbivore",
        "distinctive",
      ],
      emoji: "\uD83E\uDD93",
    },
    {
      words: ["shark", "ocean", "predator", "fins", "teeth", "swim", "fierce"],
      emoji: "\uD83D\uDC88",
    },
    {
      words: [
        "butterfly",
        "wings",
        "flutter",
        "colorful",
        "pollinator",
        "metamorphosis",
        "delicate",
      ],
      emoji: "\uD83E\uDD8B",
    },
    {
      words: ["snail", "slow", "shell", "slime", "crawl", "garden", "mollusk"],
      emoji: "\uD83D\uDC0C",
    },
    {
      words: ["pizza", "slice", "cheese", "pepperoni"],
      emoji: "\uD83C\uDF55",
    },
    {
      words: ["hamburger", "burger", "beef", "grill"],
      emoji: "\uD83C\uDF54",
    },
    {
      words: ["taco", "mexican", "shell", "spicy"],
      emoji: "\uD83C\uDF2E",
    },
    {
      words: ["sushi", "japanese", "fish", "roll", "wasabi", "soy sauce"],
      emoji: "\uD83C\uDF63",
    },
    {
      words: ["burrito", "mexican", "wrap", "beans", "rice"],
      emoji: "\uD83C\uDF2F",
    },
    {
      words: ["hot dog", "sausage", "bun", "mustard"],
      emoji: "\uD83C\uDF2D",
    },
    {
      words: ["ice cream", "scoop", "cone", "vanilla", "chocolate"],
      emoji: "\uD83C\uDF66",
    },
    {
      words: ["doughnut", "donut", "sweet", "glazed"],
      emoji: "\uD83C\uDF69",
    },
    {
      words: ["coffee", "beverage", "caffeine", "mug"],
      emoji: "\u2615",
    },
    {
      words: ["tea", "beverage", "herbal", "cup"],
      emoji: "\uD83C\uDF75",
    },
    {
      words: ["beer", "alcohol"],
      emoji: "\uD83C\uDF7A",
    },
    {
      words: ["cocktail", "alcohol", "glass", "refreshing"],
      emoji: "\uD83C\uDF78",
    },
    {
      words: ["wine", "grapes", "glass", "cheers"],
      emoji: "\uD83C\uDF77",
    },
    {
      words: ["fork and knife", "cutlery", "meal", "dining"],
      emoji: "\uD83C\uDF74",
    },
    {
      words: ["bottle", "beverage", "liquid", "container"],
      emoji: "\uD83C\uDF7D",
    },
    {
      words: ["apple", "fruit"],
      emoji: "\uD83C\uDF4E",
    },
    {
      words: ["banana", "fruit"],
      emoji: "\uD83C\uDF4C",
    },
    {
      words: ["grapes", "fruit"],
      emoji: "\uD83C\uDF47",
    },
    {
      words: ["strawberry", "fruit"],
      emoji: "\uD83C\uDF53",
    },
    {
      words: ["soccer", "football", "ball"],
      emoji: "\u26BD",
    },
    {
      words: ["basketball", "ball"],
      emoji: "\uD83C\uDFC0",
    },
    {
      words: ["baseball", "ball"],
      emoji: "\u26BE",
    },
    {
      words: ["golf", "golfer", "ball", "hole"],
      emoji: "\u26F3",
    },
    {
      words: ["tennis", "racket", "ball"],
      emoji: "\uD83C\uDFBE",
    },
    {
      words: ["swimming", "swimmer", "pool"],
      emoji: "\uD83C\uDFCA",
    },
    {
      words: ["surfing", "surfer", "wave"],
      emoji: "\uD83C\uDFC4",
    },
    {
      words: ["skiing", "skier", "snow"],
      emoji: "\u26F7",
    },
    {
      words: ["snowboarding", "snowboarder", "snow"],
      emoji: "\uD83C\uDFC2",
    },
    {
      words: ["skateboarding", "skateboard"],
      emoji: "\uD83D\uDEE5",
    },
    {
      words: ["biking", "bicyclist", "bicycle"],
      emoji: "\uD83D\uDEB4",
    },
    {
      words: ["running", "runner"],
      emoji: "\uD83C\uDFC3",
    },
    {
      words: ["dancing", "dancer"],
      emoji: "\uD83D\uDC83",
    },
    {
      words: ["weightlifting", "barbell"],
      emoji: "\uD83C\uDFCB",
    },
    {
      words: ["yoga", "meditation", "pose"],
      emoji: "\uD83E\uDD8C",
    },
    {
      words: ["boxing", "boxer", "gloves"],
      emoji: "\uD83E\uDD4A",
    },
    {
      words: ["climbing", "climber"],
      emoji: "\uD83C\uDFD7",
    },
    {
      words: ["hiking", "hiker", "mountain"],
      emoji: "\uD83C\uDFD4",
    },
    {
      words: ["fishing", "angler"],
      emoji: "\uD83C\uDFA3",
    },
    {
      words: ["gaming", "controller"],
      emoji: "\uD83C\uDFAE",
    },
    {
      words: ["surfing", "surfer", "wave"],
      emoji: "\uD83C\uDFC4",
    },
    {
      words: ["skiing", "skier", "snow"],
      emoji: "\u26F7",
    },
    {
      words: ["snowboarding", "snowboarder", "snow"],
      emoji: "\uD83C\uDFC2",
    },
    {
      words: ["skateboarding", "skateboard"],
      emoji: "\uD83D\uDEE5",
    },
    {
      words: ["biking", "bicyclist", "bicycle"],
      emoji: "\uD83D\uDEB4",
    },
    {
      words: ["running", "runner"],
      emoji: "\uD83C\uDFC3",
    },
    {
      words: ["dancing", "dancer"],
      emoji: "\uD83D\uDC83",
    },
    {
      words: ["weightlifting", "barbell"],
      emoji: "\uD83C\uDFCB",
    },
    {
      words: ["yoga", "meditation", "pose"],
      emoji: "\uD83E\uDD8C",
    },
    {
      words: ["boxing", "boxer", "gloves"],
      emoji: "\uD83E\uDD4A",
    },
    {
      words: ["climbing", "climber"],
      emoji: "\uD83C\uDFD7",
    },
    {
      words: ["hiking", "hiker", "mountain"],
      emoji: "\uD83C\uDFD4",
    },
    {
      words: ["fishing", "angler"],
      emoji: "\uD83C\uDFA3",
    },
    {
      words: ["gaming", "controller"],
      emoji: "\uD83C\uDFAE",
    },
    {
      words: ["bowling", "bowler", "ball", "pins"],
      emoji: "\uD83C\uDFB3",
    },
    {
      words: ["billiards", "pool", "cue", "balls"],
      emoji: "\uD83C\uDFB1",
    },
    {
      words: ["golfing", "golfer", "ball", "hole"],
      emoji: "\u26F3",
    },
    {
      words: ["horseback riding", "horse", "rider", "gallop"],
      emoji: "\uD83D\uDC0E",
    },
    {
      words: ["karate", "martial arts", "kick", "punch"],
      emoji: "\uD83E\uDD4B",
    },
    {
      words: ["bow and arrow", "archery", "target", "aim"],
      emoji: "\uD83C\uDFF9",
    },
    {
      words: ["computer", "laptop", "technology", "work"],
      emoji: "\uD83D\uDCBB",
    },
    {
      words: ["keyboard", "typing", "computer", "input"],
      emoji: "\u2328",
    },
    {
      words: ["printer", "printing", "paper", "document"],
      emoji: "\uD83D\uDDA8",
    },
    {
      words: ["telephone", "phone", "communication", "call"],
      emoji: "\uD83D\uDCDE",
    },
    {
      words: ["camera", "photography", "photo", "picture"],
      emoji: "\uD83D\uDCF7",
    },
    {
      words: ["television", "TV", "entertainment", "watch"],
      emoji: "\uD83D\uDCFA",
    },
    {
      words: ["radio", "music", "broadcast", "listen"],
      emoji: "\uD83D\uDCFB",
    },
    {
      words: ["headphones", "music", "audio", "listen"],
      emoji: "\uD83C\uDFA7",
    },
    {
      words: ["book", "reading", "literature", "study"],
      emoji: "\uD83D\uDCD6",
    },
    {
      words: ["newspaper", "news", "media", "information"],
      emoji: "\uD83D\uDCF0",
    },
    {
      words: ["watch", "time", "accessory", "wrist"],
      emoji: "\u231A",
    },
    {
      words: ["alarm clock", "wake up", "time", "morning"],
      emoji: "\u23F0",
    },
    {
      words: ["hourglass", "time", "countdown", "waiting"],
      emoji: "\u23F3",
    },
    {
      words: ["light bulb", "idea", "innovation", "bright"],
      emoji: "\uD83D\uDCA1",
    },
    {
      words: ["lock", "security", "privacy", "key"],
      emoji: "\uD83D\uDD12",
    },
    {
      words: ["key", "lock", "access", "security"],
      emoji: "\uD83D\uDD11",
    },
    {
      words: ["hammer", "tool", "construction", "fix"],
      emoji: "\uD83D\uDD28",
    },
    {
      words: ["wrench", "tool", "fix", "repair"],
      emoji: "\uD83D\uDD27",
    },
    {
      words: ["scissors", "cut", "paper", "snip"],
      emoji: "\u2702",
    },
    {
      words: ["umbrella", "rain", "protection", "weather"],
      emoji: "\u2614",
    },
    {
      words: ["bag", "travel", "carry", "luggage"],
      emoji: "\uD83D\uDC5C",
    },
    {
      words: ["briefcase", "work", "business", "professional"],
      emoji: "\uD83D\uDCBC",
    },
    {
      words: ["money", "cash", "dollar", "currency", "bills", "dosh", "wonga"],
      emoji: "\uD83D\uDCB5",
    },
    {
      words: ["credit card", "payment", "shopping", "money"],
      emoji: "\uD83D\uDCB3",
    },
    {
      words: ["package", "delivery", "gift", "box"],
      emoji: "\uD83D\uDCE6",
    },
    {
      words: ["envelope", "mail", "letter", "communication"],
      emoji: "\u2709",
    },
    {
      words: ["mailbox", "mail", "letter", "post"],
      emoji: "\uD83D\uDCEB",
    },
    {
      words: ["pencil", "writing", "stationery", "school"],
      emoji: "\u270F",
    },
    {
      words: ["pen", "writing", "stationery", "ink"],
      emoji: "\uD83D\uDD8A",
    },
    {
      words: ["paintbrush", "art", "painting", "create"],
      emoji: "\uD83D\uDD8C",
    },
    {
      words: ["wave", "greeting", "hello", "goodbye", "Hey", "Hi"],
      emoji: "\uD83D\uDC4B",
    },
    {
      words: ["pray", "prayer", "devotion", "faith"],
      emoji: "\uD83D\uDE4F",
    },
    {
      words: ["tick", "check", "mark", "completed"],
      emoji: "\u2705",
    },
    {
      words: ["stocks", "investment", "trading", "finance"],
      emoji: "\uD83D\uDCB9",
    },
    {
      words: ["cross", "cancel", "wrong", "delete"],
      emoji: "\u274C",
    },
    {
      words: ["money", "cash", "currency", "wealth"],
      emoji: "\uD83D\uDCB5",
    },
    {
      words: ["chart", "graph", "statistics", "data"],
      emoji: "\uD83D\uDCCA",
    },
    {
      words: ["calendar", "date", "schedule", "event"],
      emoji: "\uD83D\uDCC5",
    },
    {
      words: ["clock", "time", "hour", "minute"],
      emoji: "\u23F0",
    },
    {
      words: ["unicorn", "mythical", "fantasy", "magic"],
      emoji: "\uD83E\uDD84",
    },
    {
      words: ["stop", "halt", "cease", "end"],
      emoji: "\u23F9",
    },
    {
      words: ["go", "move", "proceed", "continue"],
      emoji: "\u25B6",
    },
    {
      words: [
        "yes",
        "agree",
        "affirmative",
        "consent",
        "confirm",
        "approve",
        "certain",
        "positive",
        "okay",
      ],
      emoji: "\uD83D\uDC4D",
    },
    {
      words: ["no", "disagree", "negative", "refuse", "deny", "reject", "not"],
      emoji: "\uD83D\uDC4E",
    },
    {
      words: ["skull", "dead", "bones", "death"],
      emoji: "\uD83D\uDC80",
    },
    {
      words: ["nerd", "geek", "glasses", "smart", "intelligent"],
      emoji: "\uD83E\uDD13",
    },
    {
      words: ["OK", "nice meme"],
      emoji: "\uD83D\uDC4C",
    },
    {
      words: ["ghost", "spooky", "haunted", "supernatural", "Spook"],
      emoji: "\uD83D\uDC7B",
    },
    {
      words: ["crying", "tears", "sad", "emotional", "omg"],
      emoji: "\uD83D\uDE22",
    },
    {
      words: ["alien", "extraterrestrial", "space", "UFO", "space"],
      emoji: "\uD83D\uDC7D",
    },

    {
      words: ["clown", "circus", "goofy"],
      emoji: "\uD83E\uDD21",
    },
    {
      words: ["snake"],
      emoji: "\uD83D\uDC0D",
    },
    {
        words: [
          "exertion",
          "effort",
          "struggle",
          "hard work",
          "diligence",
          "perseverance",
          "endurance",
          "fatigue",
          "dedication",
          "commitment",
          "wet",
          "Thirst",
          "drip",
          "dripping",
          "water",
        ],
        emoji: "\uD83D\uDCA6",
      },
    {
      words: ["lips", "kiss", "mouth", "lipstick"],
      emoji: "\uD83D\uDC44",
    },
    //rude words and meme words section, please ignore lmao



  ];

  const processText = (word) => {
    const lowerCaseWord = word.toLowerCase();

    let processedWord = word;

    wordCategories.forEach((category) => {
      category.words.forEach((categoryWord) => {
        if (lowerCaseWord.includes(categoryWord)) {
          processedWord = processedWord.replace(
            new RegExp(`\\b(${categoryWord})\\b`, "gi"),
            (match) => {
              const emojiCount = Math.floor(Math.random() * 2) + 1;
              const emojis = Array(emojiCount).fill(category.emoji).join("");
              return `${emojis}${match}${emojis}`;
            }
          );
        }
      });
    });

    return processedWord;
  };

  const processedText = textArray.map(processText).join(" ");

  const textareaRef = useRef(null);

  const copyToClipboard = () => {
    if (textareaRef.current) {
      textareaRef.current.select();
      textareaRef.current.setSelectionRange(0, 99999); // For mobile devices
      document.execCommand("copy");
      window.getSelection().removeAllRanges(); // Clear the selection
    }
  };

  return (
    <div className="flex flex-col items-center">
      <label
        htmlFor="ProcessedText"
        className="block text-lg font-semibold text-black dark:text-white mb-2"
      >
        Processed Text:
      </label>
      <textarea
        id="ProcessedText"
        name="ProcessedText"
        className="h-96 w-72 md:w-96 resize-none border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-slate-600 dark:text-white rounded-lg p-4 leading-normal"
        readOnly
        value={processedText}
        ref={textareaRef}
      ></textarea>
      <button
        className="mt-3 w-52 bg-gradient-to-r from-pink-500 to-pink-700 text-white font-bold py-2 px-4 rounded-lg transition-transform transform hover:scale-105"
        onClick={copyToClipboard}
      >
        Copy to Clipboard
      </button>
    </div>
  );
};

export default Output;
