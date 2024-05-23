// Article1.js

import React from 'react';
import article1Image from './assests/article1.png';


const Article1 = () => {
  return (
    <div className="article-container">
      <h2 className="article-heading">Best Home Workout for Men: 8 Recommendations for All Levels</h2>
      <div className="article-content">
        <img src={article1Image} alt="Article 1" className="article-image" />
        <h4>Written by Philip Stefanov</h4>
        <p className="article-text">
        Ab training is somewhat controversial. On the one hand, we have people who love doing ab workouts for core strength and definition. 

But on the other hand, some folks think that big compound lifts like squats are enough to train the abs and make them grow.

So, who is right here? Like any muscle in the body, your abs benefit from direct work. Look at it this way:

You wouldn’t skip bicep curls because you do back exercises, would you? Then why treat your abs differently?

To that end, let’s review 14 of the best exercises for a killer upper abs workout.
        </p>
        <h4>1. Cable Crunch</h4>
        <p>Weighted cable crunches are one of the simplest exercises for the upper abs. The biggest advantage of the movement is that you can adjust the resistance to fit your current abilities and gradually increase the difficulty by using more weight.

A higher resistance would allow you to provide the necessary stimulus without doing 20, 30, or even 40+ reps per set (1).
        </p>
        <h4>2. Plank-to-Toe Touch</h4>
        <p>
        The plank-to-toe touch is an advanced variation of the classic exercise that develops the core, chest, arms, upper back, and lower body. 

How to:
        <ul>
            <li>Get down on all fours and extend your body into a high plank position with your legs straight, your feet a few inches apart, your upper body engaged, and your back neutral.</li>
            <li>Place your hands slightly more than shoulder-width apart, similar to how you would for push-ups.</li>
            <li>Take a deep breath and engage your abs.</li>
            <li>Push your buttocks toward the ceiling to fold your body while keeping your back neutral.</li>
            <li>Simultaneously lift your right hand off the ground and reach diagonally across your body to tap the tip of your left foot.</li>
            <li>Bring your hand to the starting position as you lower your buttocks to the starting position and exhale.</li>
            <li>Take another breath and lift your buttocks, bringing your left hand to the tip of your right foot.</li>
            <li>Keep alternating between left and right until you’re done.</li>

        </ul>

         </p>
         <h4>3. V Up</h4>
        <p>
        V-ups are a more advanced variation of classic sit-ups. Instead of only raising your torso from a lying to an upright position, you lift your upper and lower body simultaneously, folding yourself.

When seen from the side, your body should resemble the letter V at the top of each rep, hence the movement’s name.
         </p>
         <h4>4. Hanging Knee Raise</h4>
        <p>
        Start with slow reps and lift your knees as high as possible in one fluid motion. An error trainees make is to jerk their knees up, which robs their abs of tension.

Slow reps will make the exercise more challenging, but each repetition will be more stimulative for your core muscles.
         </p>

         <h4>5. Hanging Leg Raises (Toes to Bar)</h4>
        <p>
        Like knee raises, slow and controlled reps work best. Raising your legs slowly allows you to keep the tension on your abdominal muscles, which causes a stronger stimulus and better results.

Aside from robbing your upper and lower abs of tension, moving your legs up and down quickly can cause your lower back to arch, leading to stress and pain.
        
         </p>
        
      </div>
    </div>
  );
};

export default Article1;
