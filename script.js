// Text Adventure Game
const enter = "Please enter 1 or 2 for your answer";

const gameOver = "Sorry, no Chicken Gravy for Percy!";

const start = `Meow!
I'm Percy the Cat, a former stray who's finally found his furever Home and my Favorite Human! My new home even comes with my most favorite treat of all time - Chicken Gravy!

While I love sleeping on the comfy cushion at the foot of Favorite Human's bed and messing with my "best frenemy" Toby (aka What A Dumb Dog), I still like to explore my farm to make sure the borders are secure. Ordinarily I'd take my time, but today is Chicken Gravy Day -if I don't make it home soon, I'm going to miss out on this week's treat!

Click 'OK' to start the game.`;

const q1 = `Percy ordinarily doesn't cross to the other side of the creek, but today he hitched a ride on the hay wagon - no wet feet for him! However, it's becoming clear that if he want to make it home in time for his treat, he's going to have to cross the creek on his own. Does he:
1. Jump across the stones in the creek, even if it means getting a toe or two wet?
OR
2. Jump from one large tree branch on his side to another large tree branch on the other side?
${enter}`;

const gameOver1 = `Percy takes a running leap from his branch - such a beautiful soaring leap! Unfortunately the branch he chose to land on was weakened in last week's storm. The branch gives way beneath him, and he tumbles into the creek. He hits a current and can't scramble out until he's at the far end of the farm. It's going to be a long, wet trip home with no hope of making it in time for Chicken Gravy. ${gameOver}`;

const q2 = `Percy studies the tree branches on the opposite side of the creek closely. It looks like they've had some recent wind damage and might not take his weight. "Better wet toes than a full dunk," Percy thinks as he takes the stepping stones. 

Percy hears dogs barking as he nears the hedge at the top of the field. That darn neighbor dog has wandered onto Percy's territory again! And today he's brought a couple of friends for good measure. Usually he'd put that mangy mutt in his place. But three on one isn't really a fair fight, is it? Every good fighter knows when to pick his battles, and today is not the day. Does Percy:
1. Climb the nearest tree and hang out until the dogs move on their way
OR
2. Make a break for the hole in the hedge
${enter}`;

const gameOver2 = `Unfortunately, the dogs have caught Percy's scent, and he's now trapped in the tree. It looks like they plan to stay awhile. Percy settles down for a nap and hopes he dreams about the Chicken Gravy he won't be eating today. ${gameOver}`;

const q3 = `Percy races across the field with the speed of Streaky the Super Cat, squeezing through the gap in the hedge! He hears a loud yelp behind him and turns to see the ringleader is caught in hole in the hedge - just as Percy knew he would be! Percy saunters back to give the mangy mutt a wicked scratch on the nose before turning towards home.

As Percy gets further up the field a bewitching smell hits his nose. Is that... CATNIP? Does he
1.  Continue on his way home
OR
2. Find the Catnip patch
${enter}`;

const gameOver3 = `Curiosity gets the better of Percy, and he discovers that lo and behold it IS a catnip patch! He awakens 5 hours later sprawled in the crushed catnip needing a snack and wondering when it got so dark. As he staggers towards home, he realizes that he's missed his Chicken Gravy. ${gameOver}`;

const q4 = `Time is of the essence and his favorite snack is on the line. He makes a mental note to check this area thoroughly tomorrow. 

As Percy runs past the barn, he hears a loud, "SQUEAK, SQUEAK!!" It's the mouse with one eye, and he has no idea Percy is in the area as he forages for a snack. Speaking of snacks, Percy's been meaning to make one of him for some time. Now's the perfect chance, and Percy's not going to miss it... or is he?
1. It's too close to Chicken Gravy time - leave the Pirate Mouse for another day
OR
2. Catch the Pirate Mouse for a tasty pre-Chicken Gravy snack
${enter}`;

const gameOver4 = `This is too good of an opportunity to pass up. Just as Percy is about to pounce, the Pirate Mouse realizes his peril and bolts for the storage room. As Percy rushes to corner his prey, he knocks over the stone that propped the door open. He hears a loud thud as the door slams shut behind him. He knows from past experience there's no way to get out until the cows are fed tomorrow. Percy may not get Chicken Gravy, but at least he'll have Mouse Pâté to comfort him. ${gameOver}`;

const q5 = `Percy's not missing his Chicken Gravy, even for that wannabe Pirate Mouse. "Next time, Mouse," he thinks as he nears the house. 

Percy's so close now he can almost taste the Chicken Gravy - he just has to choose which way he's going to get inside. The path to the cat perch by the window is clear, but the window is further from the room with the Chicken Gravy. The back door opens to the room with the Chicken Gravy, and there's no Toby in sight. Does Percy
1. Go to the back door
OR
2. Go to the window perch
${enter}`;

const gameOver5 = `As Percy races for the promised land, Toby jumps out from around the corner of the porch. He grabs Percy by the back of his neck and carries him off to the doghouse. Not only is Percy not getting delicious Chicken Gravy today, he's covered in dog drool and reeks of stinky dog breath. Oh, the indignity! ${gameOver}`;

const win = `Toby has a tendency to hide out of sight, just around the porch corner. Unless Favorite Human is waiting right by the door for his knock, Percy may have to make a run for it - lest he gets captured by that annoying dog. Percy climbs up the perch, and Favorite Human sees him sitting in the window. She opens the window and says, "There you are, Mr. Tyranny, I was getting worried -you'd better head to the kitchen for your Chicken Gravy!" Percy hightails it to the kitchen and helps himself to some delicious Chicken Gravy - YUM!! Delicious mission accomplished!`;

// Alerts the user to start the game
alert(start);

// Sets the value of userInput to the user's entry
let userInput = prompt(q1);

// NESTED CONDITIONAL STATEMENTS
// 1ST Conditional Statement
// NOTE: Prompts returns the value entered as a string. That is why double equals == is used instead of triple equals (AKA Strict Equality)
if (userInput == 1){
  userInput = prompt(q2);
  
  // 2ND Conditional Statement
  if (userInput == 2){
      userInput = prompt(q3);
      
      // 3RD Conditional Statement
      if (userInput == 1){
          userInput = prompt(q4);
          
          // 4TH Conditional Statement
          if (userInput == 1){
              userInput = prompt(q5);
              
              // 5TH Conditional Statement
              if (userInput == 2){
                  alert(win);
                  
                } else {
                    alert(gameOver5);
                }
                
            } else {
                alert(gameOver4);
            }
            
        } else {
            alert(gameOver3);
        }
        
    } else {
        alert(gameOver2);
    }
    
} else {
    alert(gameOver1);
}
    
