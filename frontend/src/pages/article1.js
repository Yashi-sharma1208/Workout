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
        So, you’re looking for some simple and effective home workout routines? But you’re unsure where to start and if home training is even worth it.

If so, read on because we are diving into eight fantastic home workouts for all levels and some tips to make your training more effective.
        </p>
        <h4>1.Dumbbell Push/Pull/Legs Split</h4>
        <p>The push/pull/legs split is popular because it’s effective, flexible, and easy to understand. It organizes your training into three types of workouts:

Push, where you train the chest, shoulders, and triceps
Pull, where you train the back and biceps
Legs, where you train the muscles of the lower body
The following is a 3-day version, where trainees typically take a day to recover between workouts.
        </p>
        <h4>2. Resistance Bands + Dumbbells Upper/Lower Split</h4>
        <p>
        The upper/lower split is another popular way to organize your weekly training. Here, the ideal frequency is four weekly workouts: two for the upper body and two for the legs.

Upper-body workouts tend to be longer because there are more muscle groups to train. In contrast, leg sessions are quicker.
Duration: 60-70 minutes for upper body sessions, 45-55 minutes for lower body workouts
         </p>
         <h4>3. Full-Body 3-Day Split</h4>
        <p>
        Full-body training has been around for a long time and is still popular today. The approach works particularly well for beginners because they can accumulate enough volume to grow. 

Also, trainees get to perform the core compound lifts more frequently to build the necessary skills and get stronger more quickly.

As the name suggests, the goal of full-body training is to directly train the majority of large muscle groups during each session.
         </p>
         <h4>4. Beginner Bodyweight Muscle-Builder (Full Body)</h4>
        <p>
        Bodyweight squats and similar exercises might often seem ineffective. After all, how can your body weight provide the same resistance and, by extension, tension for your muscles as a barbell loaded with 200, 300, or even 400+ lbs?

The truth is that bodyweight workouts can be effective, especially for beginners, so long as trainees:
        <ul>
            <li>Focus on progressive overload (gradually doing more demanding workouts)</li>
            <li>Train with proper form</li>
            <li>Feel the correct muscles activating on each rep</li>
        </ul>
                 </p>

         <h4>5. Advanced Bodyweight Home Workout Routine for Growth</h4>
        <p>
        Putting together a bodyweight routine for growth for advanced trainees is more difficult but not impossible. Here are a few things it needs to cover:

        <ul>
            <li>Training volume generally needs to be higher</li>
            <li>The movements need to be more challenging to create the same stimulus with fewer reps</li>
            <li>Trainees must get closer to failure more frequently</li>
        </ul>
        As far as at-home workout routines go, this is a bit more challenging because it requires some basic equipment. 

However, if you’re a fan of bodyweight training and enjoy home workouts, the setup won’t cost that much. You could get a pull-up bar for a door frame or a wall-mounted one. Dip stands also don’t cost much and don’t take up a lot of space
         </p>
        
      </div>
    </div>
  );
};

export default Article1;
