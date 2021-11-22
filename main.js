function main() {
    // game object containing conversation data and methods
    const game = {
        _conversationData: {
            _greeting: [
                    'Hello', 'Hi', 'Hey', 'Good morning', 'It\'s nice to meet you',
                    'It\'s a pleasure to meet you', 'It\'s good to see you again', 'what\'s up', 'Sup?', 'How\'s it going?', 'How are you?', 'How have you been?', 'What\'s new?'
            ],
            _continuation: [
                'That is cool!', 'Thanks for sharing', 'Sounds good', 'Really love it', 'Nice to hear it', 'What a wonderful thing you\'ve told me', 'How astonishing', 'Oh really?', 'Well, it is none of my buisiness I guess', 'Wow, i like it', 'How good of you', 
            ],
            _fact: [
                "Three presidents, all Founding Fathers—John Adams, Thomas Jefferson, and James Monroe—died on July 4. Presidents Adams and Jefferson also died the same year, 1826; President Monroe died in 1831. Coincidence? You decide. (constitutioncenter.org)",
                "The Barbie doll’s full name is Barbara Millicent Roberts, from Willows, Wisconsin. Her birthday is March 9, 1959, when she was first displayed at the New York Toy Fair. (barbiemedia.com)",
                "There actually aren’t “57 varieties” of Heinz ketchup, and never were. Company founder H.J. Heinz thought his product should have a number, and he liked 57. Hint: Hit the glass bottle on the “57,” not the bottom, to get the ketchup to flow. (heinz.com)",
                "One of President John Tyler’s grandsons is still alive today—and he was born in 1790. How is this possible? President Tyler, the 10th US president, was 63 when his son Lyon Tyler was born in 1853; Lyon’s son was born when he was 75. President Tyler’s living grandson, Harrison Tyler is 92. Lyon’s other son Lyon Jr. passed away in 2020 at the age of 95. The Tyler family still maintains the President’s home, Sherwood Forest Plantation in Virginia. (sherwoodforest.org)",
                "The tallest man ever recorded was American giant Robert Wadlow (1918–1940), who stood 8 feet 11 inches. Wadlow’s size was the result of abnormally enlarged pituitary gland. (guinnessworldrecords.com)",
                "The tallest living man is 37-year-old Sultan Kosen, from Turkey, who is 8 feet, 2.8 inches, who set the record in 2009. His growth is also due to a pituitary issue. (guinnessworldrecords.com)",
                "The oldest person ever to have lived (whose age could be authenticated), a French woman named Jeanne Louise Calment, was 122 years old when she died in 1997. (guinnessworldrecord.com)",
                "Sliced bread was first manufactured by machine and sold in the 1920s by the Chillicothe Baking Company in Missouri. It was the greatest thing since…unsliced bread? (chllicothenews.com)",
                "The Earl of Sandwich, John Montagu, who lived in the 1700s, reportedly invented the sandwich so he wouldn’t have to leave his gambling table to eat. (pbs.org)",
                "The first college football game was played on November 6, 1869, between Rutgers and Princeton (then known as the College of New Jersey) in New Brunswick, New Jersey. Rutgers won. (ncaa.com)",
                "Experiments in universities have actually been carried out to figure out how many licks it takes to get to the center of a Tootsie Pop, both with machine and human lickers (because this is important scientific knowledge!). The results ranged from 252 to 411. (tootsie.com)",
                "The Four Corners is the only spot in the US where you can stand in four states at once: Utah, Colorado, Arizona and New Mexico. ",
                "Canada is south of Detroit (just look at a map).",
                "The original name for the search engine Google was Backrub. It was renamed Google after the googol, which is the number one followed by 100 zeros. (about.google)",
                "The oldest-known living land animal is a tortoise named Jonathan, who is 187 years old. He was born in 1832 and has lived on the island of St. Helena in the Atlantic Ocean since 1882. (guinnessworldrecords.com)",
                "Bats are the only mammal that can actually fly.",
                "Wombats are the only animal whose poop is cube-shaped. This is due to how its intestines form the feces. The animals then stack the cubes to mark their territory. (bbc.com)",
                "The most common wild bird in the world isn’t the sparrow or blue jay—it’s the red-billed quelea, which live in Africa and have an estimated population of 1.5 billion. (audubon.org)",
                "The heart of the blue whale, the largest animal on earth, is five feet long and weighs 400 pounds. The whale in total weighs 40,000 pounds. (nationalgeographic.com)",
                "For comparison, an elephant’s heart weighs around 30 pounds. And a human heart? A mere 10 ounces.",
                "Elephants can’t jump. (smithsonianmag.com)",
                "Octopuses have three hearts.",
                "Cows don’t actually have four stomachs; they have one stomach with four compartments. (fda.gov)",
                "The platypus doesn’t have a stomach at all: Their esophagus goes straight to their intestines. (nationalgeographic.com)",
                "This is one animal myth that’s true: Eating parts of a pufferfish can kill you because, in a defense mechanism to ward off predators, it contains a deadly chemical called tetrodotoxin. There’s enough in one pufferfish to kill 30 people—and there’s no antidote. Still, pufferfish, called fugu, is a highly-prized delicacy in Japan, but can only be prepared by well-trained chefs. (nationalgeographic.com)",
                "Polar bears have black skin. And actually, their fur isn’t white—it’s see-through, so it appears white as it reflects light.",
                "Tigers’ skin is actually striped, just like their fur. Also, no two fur patterns are alike.",
                "Flamingoes are only pink because of chemicals called carotenoids in the algae and fish (which also eat the algae) they eat; their feathers are grayish white when they’re born.",
                "Mosquitoes are the deadliest animal in the world: They kill more people than any other creature, due to the diseases they carry. (cdc.gov)",
                "What do Miss Piggy and Yoda have in common? They were both voiced by the same person, puppeteer Frank Oz.",
                "Psycho was the first movie to show a toilet flushing. (npr.com)",
                "One of the most famous movie lines in history was never said. We often quote, “Play it again, Sam,” from Casablanca; but the real line is, “Play it, Sam. Play ‘As Time Goes By.’” ",
                "The green code in The Matrix was actually created from symbols in the code designer’s wife’s sushi cookbook. (cnet.com)",
                "The wedding of Princess Diana and Prince Charles was watched by 750 million people worldwide in 1981; sadly, 2.5 billion watched her funeral in 1997. (bbc.com)",
                "With 3.572 billion viewers, half the world’s population watched the 2018 FIFA World Cup of soccer (or football, as many international fans call it), which is held every four years. That number is on par with the 2016 Summer Olympics; but only a quarter of the world watched the less-popular Winter Olympics in 2018. (fifa.com)",
                "There are no muscles in your fingers: Their function is controlled by muscles in your palms and arms. (assh.org)",
                "The hardest working muscle in your body is your heart: It pumps more than 2,000 gallons of blood a day and beats more than 2.5 billion times in a 70-year life span. (heart.org)",
                "It’s impossible to hum while holding your nose (just try it!).",
                "Skin is the body’s largest organ.",
                "The earth’s circumference is 24,900 miles. (nasa.gov)",
                "All of an adult human’s blood vessels, if laid out end to end, would be about 100,000 miles, so they could encircle the earth four times. (fi.edu)",
                "According to recent research, the human nose can distinguish at least a trillion different odors. (nature.com)",
                "The longest fingernails ever were over 28 feet in total. American Lee Redmond started growing them in 1979 and set the record in 2008. Sadly, she lost her nails in a car crash in 2009. (guinnessworldrecords.com)",
                "The origin of the word “sinister” reflects a historical bias against left-handed people. It comes from the Latin word for “left,” which was also seen to be unlucky or evil. (merriam-webster.com) ",
                "There is not one letter “q” in any US state name, the only letter in the alphabet to be missing. “J” and “z” are only represented once each, in New Jersey and Arizona.",
                "The word “strengths” is the longest word in the English language with only one vowel. (guinnessworldrecords.com)",
                "Cartoonist Mort Walker, creator of Beetle Bailey, came up with names for the things we often see in comics and cartoons: “briffit” is the dust cloud a character makes when he runs away quickly; “plewds” are the beads of sweat when a character is under duress; and “grawlix” are symbols such as “#@*%” that stand in for curse words. (merriam-webster.com)",
                "A mash-up of two words to make a new word (such as breakfast and lunch into brunch, or motel from motor and hotel) is called a portmanteau. In case you’re wondering, the word “portmanteau” itself is not a portmanteau; it’s a compound word that refers to a duel-sided suitcase. (merriam-webster.com) ",
                "The dog ate John Steinbeck’s homework—literally. The author’s pup chewed up an early version of Of Mice and Men. “I was pretty mad, but the poor fellow may have been acting critically,” he wrote.",
                "Among lost works, this story might be even worse: Ernest Hemingway’s first wife, Hadley, left a suitcase full of the author’s writing on a train. When she went back to get it, it was gone. “I had never seen anyone hurt by a thing other than death or unbearable suffering except Hadley when she told me about the things being gone,” Hemingway wrote in A Moveable Feast.",
                "The original title of Jane Austen’s Pride and Prejudice was First Impressions. (jasna.org)",
                "Mary Shelley wrote Frankenstein when she 18, during a ghost story competition while staying in Switzerland with writers Percy Shelley (her lover) and Lord Byron. (penguinrandomhouse.com)",
                "German chocolate cake doesn’t come from Germany. It was named for a person, Sam German, who created a type of baking chocolate for Baker’s in 1852. (npr.org)",
                "Hawaiian pizza was created in Ontario, Canada, by Greek immigrant Sam Panopoulos in 1962. (cbc.ca)",
                "Almost all commercially grown artichokes, 99.9 percent, come from California. One town in particular, Castroville, is nicknamed “the Artichoke Capital of the World.” (visitcalifornia.com)",
                "The different colors of Froot Loops cereal all taste the same—they’re not individual flavors. (time.com)",
                "What’s inside a Kit Kat? Broken Kit Kats that are damaged during production—they get ground up and go between the wafers inside, along with cocoa and sugar. That’s a way to not let anything go to waste! (today.com)",
                "Pound cake got its name because the original recipe required a pound each of butter, flour, sugar and eggs. That’s a lot of cake—but it was meant to last for a long time.",
                "The difference between jam and jelly is that jam is made with mashed up fruit while jelly is made with fruit juice. (bonapetit.com)",
                "Preserves are like jam but made with more whole fruit. Marmalade is preserves made from citrus fruit.",
                "Flamin’ Hot Cheetos were developed by a janitor at Frito-Lay, Richard Montanez, who got the idea after putting chili powder on some reject Cheetos and then pitched it to the CEO. He’s now a successful executive and motivational speaker, and a movie is in the works about his life. (cnbc.com)",
                "Coca-Cola actually sells soup in a can. Bistrone is a nourishing meal on the go, available in two flavors in Japan. (worldofcoca-cola.com)",
                "The biggest pizza ever created was 13,580 square feet, made in Rome, Italy, in 2012. The pizza was gluten-free and named “Ottavia” after a roman emperor. (guinnessworldrecords.com)",
                "The tallest building in the world is the Burg Khalifa in Dubai, standing at over 2,700 feet. (skyscrapercenter.com)",
                "The tallest building in the US is One World Trade Center in New York, which comes in at number six on the worldwide list. It stands at exactly 1,776 feet as a nod to the date of the Declaration of Independence.",
                "The Empire State Building in New York was the tallest building in the world from 1931 until 1971, and was the first building of over 100 floors.",
                "Contrary to popular belief, it’s really, really hard to see the Great Wall of China from space, particularly with the naked eye. (nasa.gov)",
                "The first footprints on the moon will remain there for a million years. (nasa.gov)",
                "Days on Venus are longer than years. Due to its slow axis rotation, it takes 243 Earth days to spin once; but it only takes 225 Earth days to go around the sun. (nasa.gov) ",
                "Humans could never “land” on Jupiter, Saturn, Uranus or Neptune because they are made of gas and have no solid surface. (natgeokids.com)",
                "But you could ice skate on one of Jupiter’s moons, Europa, which is covered in ice. An Axel jump would take you 22 feet in the air! (nasa.gov)",
                "Our modern interpretation of Santa Claus with a red outfit and white beard is due in large part to holiday Coca-Cola ads that began in 1931. (coca-cola.com)",
                "Queen Victoria’s husband, Prince Albert, wasn’t the first to introduce Christmas trees to Britain from his native Germany—Queen Charlotte did that in the late 1700s. But, Victoria and Albert are credited with popularizing the custom in the mid-1800s. (royal.uk)",
                "Buckingham Palace in London, England, has 775 rooms, including 78 bathrooms. (royal.uk)",
                "The White House in Washington, DC, has 132 rooms, including 35 bathrooms. (whitehouse.gov)",
                "It takes 570 gallons to paint the exterior of the White House. (whitehouse.gov)",
                "The teddy bear is named after President Theodore Roosevelt. After he refused to shoot a captured black bear on a hunt, a stuffed-animal maker decided to create a bear and name it after the president. (nps.gov)",
                "Lincoln Logs were created by John Lloyd Wright, son of famous architect Frank Lloyd Wright, in the 1920s. They were named after Abraham Lincoln, who grew up in a log cabin. (nps.gov)",
                "Play-Doh started out as a wallpaper cleaner before the head of the struggling company realized the non-toxic material made a good modeling clay for children and rebranded it. (museumofplay.org)",
                "In the 1940s, a retired schoolteacher came up with Candyland to entertain children who were hospitalized from polio. Because its color system required no reading, young kids could easily play. (toyhalloffame.org) ",
                "People started wearing pajamas, originally spelled “pyjamas,” instead of nightgowns so they’d be prepared to run outside in public during World War I air raids in England. (bbc.co.uk)",
                "At Medieval Times dinner attractions, you eat with your hands because people didn’t use utensils in the middle ages. (medievaltimes.com)",
                "Freelancers originally referred to self-employed, sword-wielding mercenaries: literally “free lancers.” (merriam-webster.com)",
                "We shake hands to show we’re unarmed. (bbc.co.uk)",
                "Although no longer connected to the beer company, Guinness World Records was founded by the managing director of Guinness Brewery in the 1950s. (guinnessworldrecords.com).",
                "Michelin stars are highly coveted by elite and upscale restaurants the world over—but they’re actually given out by the Michelin tire company, the same one whose mascot is the marshmallow-like Michelin Man. If you want to get fancy, pronounce it in the original French, “mich-LEH.” (michelin.com)",
                "More people visit France than any other country (Spain is second; the US third). (e-unwto.org)",
                "You can still stay at the world’s oldest hotel, Nisiyama Onsen Keiunkan in Japan, which was founded in 705 AD. (guinnessworldrecord.com)",
                "The longest place name in the word, at 85 letters, is “Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu,” New Zealand. Locals just call it Taumata Hill. (newzealand.com)",
                "The coldest temperature ever recorded occurred in Antarctica, -144 Fahrenheit, as reported by researchers in a scientific journal in 2018.",
                "The hottest temperature ever recorded occurred in Furnace Creek, Death Valley, California, at 134 degrees Fahrenheit on July 10, 1913. (public.wmo.int)",
                "Japan records the most earthquakes of any country in the world; but the most earthquakes actually occurs in Indonesia. (usgs.gov)",
                "Each year 16 million thunderstorms happen around the world, and at any given moment, there are about 2,000 thunderstorms in progress. (nssl.noaa.gov)",
                "Sweden has 267,570 islands, the most of any country in the world.",
                "Australia contains a number of pink lakes, but the most stunning is the Pepto Bismol-colored Lake Hillier. The color may be the result of certain algae. (australia.com)",
                "At over 29,000 feet tall, Mt. Everest is the highest point on Earth, but it doesn’t compare to the deepest point on Earth, the Mariana Trench, which is over 36,000 feet deep—nearly seven miles—in the Pacific Ocean.",
                "This isn’t exactly a “fun” fact, but there are over 200 dead bodies of climbers on Mt. Everest because it’s so difficult to bring them down. (outsideonline.com)",
                "Only two people have ever swum the entire length of the 2,350-mile Mississippi River: Slovenian long-distance swimmer Martin Strel in 2002 and American former Navy SEAL Chris Ring in 2015. Strel swam for 68 days in a row; Ring took one day off a week, taking 181 days. (strel-swimming.com)",
                "Visitors are not allowed to scatter loved ones’ ashes at Disney World or Disneyland. This is apparently a problem, particularly around the Haunted Mansion attraction. (wsj.com)",
                "The man who designed the Pringles can, Fred Bauer, is buried in one—or at least some of his ashes are. (npr.org)",
                "There’s a world record for the holder of the most world records: Ashrita Furman, who’s set more than 600 records and currently holds more than 200. His records have ranged from fastest mile on a pogo stick, longest time to hula hoop underwater and greatest distance traveled on a bicycle balancing a milk bottle on the head. (guinnessworldrecords.com)",
            ],
            _question: [
                    "Do you think the big toe feels self-conscious about being the “BIG” toe? ",
                    "Why do we use leaf-blowers instead of leaf-suckers? ",
                    "Why didn’t the 3 Little Piggies build a house underground?",
                    "Captain America has a shield, but where’s his sword?",
                    "When you eat a gummy bear, do you eat the head or the feet first?",
                    "If he had been bitten by a radioactive man, would Spiderman’s name have been Manman?",
                    "Do zombies eat brains because they’re hungry for knowledge?",
                    "Why is the chicken even crossing the road? Where are its owners?",
                    "Do window cleaners get tired of seeing their own reflections all day?",
                    "How come solar panels don’t overheat?",
                    "If you can cook an egg on really hot concrete, why don’t we make an omelet?",
                    "If you could teleport to any bathroom in the world, which one would you choose?",
                    "If they’re called chicken wings, where did all the feathers go?",
                    "Do car tires get tired?",
                    "When tree leaves change color, do they say “new look, who dis?”",
                    "Do elves have to use double the q-tips to clean their ears?",
                    "Why do they call them pig-tails if pigs only have 1 tail?",
                    "What sound does a flute make if you sneeze into it?",
                    "If a balloon pops in a vacuum, can you hear it?",
                    "If 100 people poked your belly at the same time, would you burst?",
                    "What exactly does puppy breath smell like?",
                    "If your sibling turned into a dog, would you walk him/her?",
                    "If newborns smell good, shouldn’t our smell improve as we age?",
                    "If dragons can breathe fire, what happens when they accidentally sneeze?",
                    "What do rocks taste like?",
                    "If blood tastes metallic, does that mean vampires like to snack on metal?",
                    "Why is it called “loose change” if heavier than paper money?",
                    "If there’s a rabbit on the moon, where is its carrot?",
                    "When someone is sad, we say they’re blue, so if someone is really sad are they dark blue?",
                    "Does having stage fright mean you’re afraid of raised wooden platforms?",
                    "If the important thing is to get up after falling, why don’t we just learn better balance?",
                    "Why are they called headphones if you don’t use them to talk?",
                    "If a candle melts and evaporates, does that mean we inhaled an entire candle through our nose?",
                    "If bananas have a peel, does that mean we’re skinning it to eat its insides?",
                    "When people say someone lost their marbles, why don’t they help look for them?",
                    "Do doctors say “ahh” and check their throats when they’re brushing their teeth in the morning?",
                    "How do you change the water on a waterbed so it doesn’t grow algae?",
                    "If blue is the color of the sky, then what’s the color of the land?",
                    "If your refrigerator is still running, is it because it’s trying to lose weight?",
                    "Did you remember to turn the stove off? Are you positive?",
                    "If hair is dead, why doesn’t it all fall off when the wind blows?",
                    "If one twin closes their eyes, does the other twin get scared of the dark?",
                    "When you crack your knuckles, is that just the sound of your bones screaming?",
                    "What happens to tea bags if you let them sit in water all day?",
                    "If you eat a spoonful of ground coffee, do you get more or less caffeine?",
                    "If you roll a dice down a mountain, will that give you better odds?",
                    "Why do they call it popcorn ceiling? Shouldn’t it be called kernel ceiling?",
                    "If grasslands exist, are there also weedlands?",
                    "Where do witches go to remove their warts?",
                    "Are donut holes just an excuse to eat more donuts?",
                    "If sunglasses are for protection, why do they make people look suspicious. ",
                    "What would happen if it got hotter instead of colder at night?",
                    "If the moon is made of cheese, where are the giant crackers?",
                    "If you scream and no sound comes out, is it really a scream?",
                    "What if the alphabet started with the letter Z?",
                    "When you talk in your sleep, is that your true self trying to come out?",
                    "Do dentists just really like making you uncomfortable by asking you questions while you can’t speak?",
                    "If we enjoy stepping on puddles, why don’t we step on lakes?",
                    "Are tears just built up salt escaping our body?",
                    "If you could talk to animals, would you tell them all your secrets?",
                    "If you had to change your name to any superhero, which one would you choose?",
                    "If you could shapeshift, how often would you impersonate Chris Hemsworth?",
                    "If you could name a star, would you choose an animal name or a human name?",
                    "Why is it called a pineapple if looks more like a papaya?",
                    "Why do we call people a “jack of all trades” but they don’t actually trade?",
                    "If they can make a wheel of cheese, can they also make a tire of cheese?",
                    "If a mom tells a bad joke, do we call it a mom joke or a dad mom joke?",
                    "Who referees the referees?",
                    "If you could 3D print food, would you still need to add spices to it?",
                    "Are boxers just adult children who were never told hitting is wrong?",
                    "Should expecting parents prepare for the baby by setting alarms every 2 hours?",
                    "If violin bows are made from horsehair, what would an instrument made from unicorn hair be called?",
                    "If a white flag means surrender, does a black flag mean attack?",
                    "If he had lived, would Blackbeard have changed his name to Whitebeard when he got old? ",
                    "Do high-speed trains run out of breath?",
                    "If we can bounce on the moon, why don’t we put a giant bouncy house up there?",
                    "Why do people say I got your back if danger usually comes right at your front?",
                    "If wine is just grape juice, does that mean beer is wheat juice?",
                    "Why is it called a monkey wrench if it’s shaped nothing like a monkey?",
                    "Why is it called peanut butter if there is no butter involved?",
                    "If plants grow bigger with love, why don’t farmers use that secret to grow enormous vegetables?",
                    "When the sun sets is it because it’s shy and hiding away?",
                    "If there’s a New Zealand, where did the Old Zealand go?",
                    "If all the planets are named after Roman gods, who chose the name Earth?",
                    "When your heart breaks, what can you eat to glue it back together?",
                    "Why are Pokemon called “pocket monsters” when most of them are too big to actually fit in your pocket?",
                    "When people go soul-searching does it mean they’re ghost-hunting?",
                    "How can the fruit salad ambrosia be the food of the gods if marshmallows weren’t invented yet?",
                    "Were The Beatles named after a specific beetle species or just beetles in general?",
                    "When you’re saying goodbye to someone, why do they call it waving if there’s no water involved?",
                    "If a butterfly’s wings can cause a hurricane, why don’t we name hurricanes after the butterfly that caused it?",
                    "When people say “so long” what are they talking about? The length of their next visit?",
                    "If you bite your nails, does it mean you’re just really hungry?",
                    "If the pen is mightier than the sword, why didn’t knights carry giant pens around?",
                    "Is fog just clouds that got too close to the ground?",
                    "What do elephants do if they have an itch in their trunk?",
                    "Why don’t flashdrives actually flash?",
                    "Why are the X-Men not called X-People since there are also women in the team?",
                    "Do spiders really need 8 legs or are they just greedy?",
                    "Why do they say “one size fits all” when it clearly doesn’t fit a baby? "
                ],
        },
        // getters for all components, return random component
        get greeting() {
            return this._conversationData._greeting;
        },
        get question() {
            return this._conversationData._question;
        },
        get fact() {
            return this._conversationData._fact;
        },
        get continuation() {
            return this._conversationData._continuation;
        },
        // takes in array of phrases and returns random phrase
        getRandomPhrase(phraseArray) {
            return phraseArray[Math.floor(Math.random() * phraseArray.length)];
        },
        // this method combines random phrases in a correct way depending on situation
        createPhrase() {
            let counter = 0;
            return () => {
                const fact = this.getRandomPhrase(this.fact);
                const question = this.getRandomPhrase(this.question);
                const continuation = this.getRandomPhrase(this.continuation);
                if (counter === 0) {
                    counter++;
                    return `${fact}\n\n${question}`;
                }
                return `${continuation}\n\n${fact}\n\n${question}`;
            };
        },
        // method to greet user in the beginning of the game
        greetUser(cb) {
            const readline = require('readline').createInterface({
                input: process.stdin,
                output: process.stdout
            });

            readline.question(`What's your name? `, name => {
                const greeting = this.getRandomPhrase(this.greeting);
                // different behavior if greeting is a question or not
                if (greeting.endsWith('?')) {
                    console.log(greeting.slice(0, -1) + `, ${name}?`);
                } else {
                    console.log(greeting + `, ${name}.`);
                };
                readline.close();
                cb();
            });
        }
    };

    // game logic
    game.greetUser(() => {
        const phraseCreator = game.createPhrase();
        iteration(phraseCreator);
    });
    
    // function implementing every iteration of conversation. Takes in creator function to build phrase to act as user prompt
    function iteration(creator) {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
        readline.question(`${creator()} `, data => {
            readline.close();
            if (data.toLowerCase() !== 'quit') { // using recursion to repeat the function while user doesn't enter 'quit' phrase
                iteration(creator);
            };
        });
    };
};

main();

