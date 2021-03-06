const baseSettlement = [ 
  {
    id: "s1",
    location: "settlement",
    title: "",
    text: "As you go about your shopping, a shady individual approaches you and whispers in your ear. 'Hello, friend. You look like someone who is seeking more... interesting fare than what's on sale here.",
    options: [
      {
        optionText: "Ignore him and continue your shopping",
        result: "This guy rubs you the wrong way",
        aftermath: "Shop [Settlement]",
        trash: false,
        add: false
      },{
        optionText: "Slink away with him",
        result: "Nothing ventured, nothing gained! The grinning man ushers you to a well-hidden booth.",
        aftermath: "Become <em>Vilified</em><br>Draw and add 2 cards to the shop<br>Shop [Settlement]; buy <em>Weapons</em> and <em>Drugs</em> for 2 less.",
        trash: false,
        add: false
      },{
        optionText: "Yell for the guards",
        result: "The guards rush over and grab the seedy individual. 'You've made a powerful enemy,' the man hisses at you before he's dragged away.",
        aftermath: "Become <em>Idolized</em> &bull; Shop [Settlement]",
        trash: true,
        add: [9]
      }
    ]
  },{
    id: "s2",
    location: "settlement",
    title: "",
    text: "'What the -- she's got a bomb!' A shrieking laugh rises above the tumult. As the market clears, you see a crazed woman holding a beeping mass of metal",
    options: [
      {
        optionText: "Grab something and run",
        result: "You sprint away from the settlement as the bomb explodes!",
        aftermath: "Become <em>Vilified</em> &bull; Choose 1 item from the shop",
        trash: true,
        add: [7]
      },{
        optionText: "Rush in and talk her out of it &bull; [E] [C] 4",
        result: [
          {
            result: "<strong>Succeed:</strong> As you speak to her, she begins to realize the true repercussions of what she is doing. Sobbing, she deactivates the bomb. Slowly the grateful traders return.",
            aftermath: "Become <em>Idolized</em> &bull; 3 Caps &bull; Shop [Settlement]",
            trash: true,
            add: [8]
          },{
            result: "<strong>Fail:</strong> Your words fall on a hardened heart. She glares at you silently as the bomb counts down to zero. You are engulfed in flame!",
            aftermath: "Suffer 3 damage and 2 [Radiation]",
            trash: true,
            add: [7]
          }
        ]
      }
    ]
  },{
    id: "s3",
    location: "settlement",
    title: "",
    text: "There is a small gathering around the various traders and mercenaries here. You shoulder your way through the other wastelanders to get a look at the goods.",
    options: [
      {
        optionText: "Go shopping as normal",
        result: "The traders and mercenaries are more than happy to do business with you.",
        aftermath: "Shop [Settlement]",
        trash: false,
        add: false
      },{
        optionText: "Try to steal an item from a display &bull; [A] [L] 4",
        result: [
          {
            result: "<strong>Succeed:</strong> While the trader has her head turned, you deftly sneak something away.",
            aftermath: "Choose 1 item from the shop",
            trash: false,
            add: false
          },{
            result: "<strong>Fail:</strong> 'Thief!' someone yells as you try to grab an item. The guards hustle you out of the settlement.",
            aftermath: "Suffer 3 damage &bull; Move 1 space",
            trash: false,
            add: false
          }
        ]
      },{
        optionText: "Look for better deals than these",
        result: "Nothing that's on offer looks very appealing.",
        aftermath: "Choose and discard cards from the shop equal to [Settlement] and draw replacements; then shop once.",
        trash: false,
        add: false
      },{
        optionText: "",
        result: "",
        aftermath: "",
        trash: false,
        add: false
      }
    ]
  },{
    id: "s4",
    location: "settlement",
    title: "",
    text: "A shouting match is just beginning when you arrive in the town square. 'He openly admitted to being a synth!' A young man shrinks away from a crowd as it grows hostile.",
    options: [
      {
        optionText: "FORCED if you are a <em>Synth</em>",
        result: "'Look,' someone shouts, 'another one! We're under attack!' In a flash, the town devolves into chaos, and you run for it.",
        aftermath: "Suffer 3 damage &bull; Move 1 space",
        trash: false,
        add: false
      },{
        optionText: "Don't get involved, and go to the market",
        result: "You shop, then exit by a different route.",
        aftermath: "Shop [Settlement]",
        trash: false,
        add: false
      },{
        optionText: "Convince the crowd that there's nothing to fear &bull; [C] [I] 4",
        result: [
          {
            result: "<strong>Succeed:</strong> Convinced for the time being, the crowd disperses with scowls at you.",
            aftermath: "Become <em>Vilified</em> &bull; Shop [Settlement]",
            trash: true,
            add: [11]
          },{
            result: "<strong>Fail:</strong> Nothing you say stops the crowd from dragging away the poor man.",
            aftermath: "",
            trash: true,
            add: [10]
          }
        ]
      }
    ]
  },{
    id: "s5",
    location: "settlement",
    title: "",
    text: "You pass several people in the settlement when you hear an angry voice: 'You stupid mutt!' You look over in time to see a woman kicking her dog.",
    options: [
      {
        optionText: "FORCED if you are <em>Idolized</em>",
        result: "Whimpering, the dog flees from the abusive master. Seeing you, he seems to trust you and hides behind your heels. You say nothing as the woman runs by in search of the dog.",
        aftermath: "Gain the 'Dogmeat' unque asset",
        trash: true,
        add: false
      },{
        optionText: "Make this asshole stop &bull; [S] [C] 4",
        result: [
          {
            result: "<strong>Succeed:</strong> You intimidate the woman, and the dog runs into the crowd as she shrinks away from you.",
            aftermath: "Become <em>Idolized</em>",
            trash: true,
            add: [13]
          },{
            result: "<strong>Fail:</strong> The woman turn her ire on you. You see the dog slip away as you get an earful.",
            aftermath: "",
            trash: true,
            add: [13]
          }
        ]
      },{
        optionText: "Let it go, and go shopping",
        result: "You can hear the woman still cursing at the poor animal as you walk the other way.",
        aftermath: "Shop [Settlement]",
        trash: false,
        add: false
      }
    ]
  },{
    id: "s6",
    location: "settlement",
    title: "",
    text: "Out of nowhere, a grey tabby cat races across your path. 'Ashes!' a voice shouts. 'Ashes, come back!' The cat trots forward for a few more feet, then turns around and stares at you.",
    options: [
      {
        optionText: "Ignore them both",
        result: "'Like I care what you do,' you say to the cat. The cat looks bored and begins to clean itself.",
        aftermath: "Shop [Settlement]",
        trash: false,
        add: false
      },{
        optionText: "Try to catch the cat &bull; [A] [L] 4",
        result: [
          {
            result: "<strong>Succeed:</strong> You manage to sneak up on the cat and pounce, snatching it up in your arms. A breathless woman runs up to you. 'Thank you! I've been looking everywhere! Please, take this as a rewards.'",
            aftermath: "Choose 1 item from the shop",
            trash: false,
            add: false
          },{
            result: "<strong>Fail:</strong> You lurch toward the cat, and it charges at you! It swipes at your hands and face, then darts off into the shadows. Your reward for your attempt at a good deed is a batch of bleeding scratches and a healthy dose of humiliation.",
            aftermath: "Suffer 1 damage",
            trash: false,
            add: false
          }
        ]
      }
    ]
  },{
    id: "s7",
    location: "settlement",
    title: "",
    text: "Two kids are playing a card game called Synth: Netrumor. 'That's my favorite gamge,' you tell them. 'I havent't played in years!' One of the kids squints up at you and says, 'Oh yeah? How about we play a game for Caps?'",
    options: [
      {
        optionText: "Tell him you don't remember the rules and go shopping instead",
        result: "The kid sneers at you. 'Knew you'd be too scared.' Your cheeks burn as you walk away.",
        aftermath: "Shop [Settlement]",
        trash: false,
        add: false
      },{
        optionText: "Accept the challenge &bull; [I] [L] 4",
        result: [
          {
            result: "<strong>Succeed:</strong> You break his Glacier Facade with your Fame Fatale, and it's all over after that.",
            aftermath: "3 Caps &bull; Shop [Settlement]",
            trash: false,
            add: false
          },{
            result: "<strong>Fail:</strong> He traps you with Grubhole so fast you can actually feel the sting of defeat.",
            aftermath: "Lose 3 Caps",
            trash: false,
            add: false
          }
        ]
      }
    ]
  },{
    id: "s8",
    location: "settlement",
    title: "",
    text: "Several super mutants are being used as beasts of burden outside of town. Their masters are cruel, but the plots of earth are ripe with well tended crops.",
    options: [
      {
        optionText: "FORCED if you are a <em>Super Mutant</em>",
        result: "'Looks like we got another one,' the closest man shouts, running toward you.",
        aftermath: "Draw and fight [Human]",
        trash: false,
        add: false
      },{
        optionText: "Exploit the prosperity in the market",
        result: "The food surplus has left the local merchants feeling far less stringy",
        aftermath: "Shop [Settlement]+1; gain 1 Cap for each sold item",
        trash: false,
        add: false
      },{
        optionText: "Free the super mutants &bull; [S] [C] 4",
        result: [
          {
            result: "<strong>Succeed:</strong> With a combination of pleading and threats, you convince the inhabitants to free the creatures. The mutants escape into the wilderness.",
            aftermath: "2 XP &bull; Shop [Settlement]",
            trash: true,
            add: [12]
          },{
            result: "<strong>Fail:</strong> The value of the labor proves too great. You are driven out of the settlement.",
            aftermath: "Move 1 space",
            trash: false,
            add: false
          }
        ]
      }
    ]
  }
]