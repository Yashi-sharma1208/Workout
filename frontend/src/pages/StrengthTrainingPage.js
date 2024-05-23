import React, { useState } from 'react';
import pullUpsImage from './assests/pull-ups.png';
import bentOverRowImage from './assests/bent over row.png';
import bicepsCurlsImage from './assests/Biceps curl.png';
import kickbacksImage from './assests/Kickbacks.png';
import Bench_press from './assests/Bench_press.png';
import pushUpsImage from './assests/push-ups.png';
import guide1Image from './assests/guide1Image.png';
import guide2Image from './assests/guide2Image.png';
import guide3Image from './assests/guide3Image.png';
import guide4Image from './assests/guide4Image.png';
import guide5Image from './assests/guide5Image.png';
import guide6Image from './assests/guide6Image.png';


const StrengthTrainingPage = () => {

  const [details, setDetails] = useState({
    benchPress: false,
    pushUps: false,
    guide3: false, // Corrected the state key name
    guide4: false, // Corrected the state key name
    guide5: false, // Corrected the state key name
    guide6: false // Corrected the state key name
  });

  const handleSeeMore = (guide) => {
    setDetails((prevState) => ({
      ...prevState,
      [guide]: !prevState[guide],
    }));
  };
  

  return (
    <div className="container">
      <h1 className="center1">Strength Training</h1>

      <h2 className="center2">Chest Exercises</h2>

      <div className="exercise">
        <h3>Bench Press</h3>
        <a href='https://www.youtube.com/watch?v=SCVCLChPQFY'>
          <img src={Bench_press} alt="Bench Press" />
        </a>
        <p>
          The bench press is a classic compound exercise that primarily targets the chest muscles, along with the shoulders and triceps. To perform a bench press, lie flat on a bench, grasp the barbell with a wide grip, lower it to your chest, then press it back up to the starting position.
        </p>
      </div>

      <div className="exercise">
        <h3>Push-Ups</h3>
        <a href='https://www.youtube.com/watch?v=_l3ySVKYVJ8'>
          <img src={pushUpsImage} alt="Push-Ups" />
        </a>
        <p>
          Push-ups are a versatile bodyweight exercise that targets the chest, shoulders, and triceps. Start in a plank position with your hands shoulder-width apart, lower your body until your chest nearly touches the ground, then push back up to the starting position.
        </p>
      </div>


      <h2 className="center2">Back Exercises</h2>
      
      <div className="exercise">
        <h3>Pull-Ups</h3>
        <a href='https://www.youtube.com/watch?v=aAggnpPyR6E'>
          <img src={pullUpsImage} alt="Pull-Ups" />
        </a>
        <p>
          Pull-ups are an excellent compound exercise that primarily targets the muscles of the back, including the latissimus dorsi and rhomboids. Grip the pull-up bar with your palms facing away from you, hands shoulder-width apart, and pull your body up until your chin clears the bar.
        </p>
      </div>

      <div className="exercise">
        <h3>Bent-Over Row</h3>
        <a href='https://www.youtube.com/watch?v=SFkJb1F6dgk'>
          <img src={bentOverRowImage} alt="Bent-Over Row" />
        </a>
        <p>
          The bent-over row is a compound exercise that targets the muscles of the upper back, including the latissimus dorsi, rhomboids, and traps. Hold a barbell with an overhand grip, hinge at the hips to bend forward, and pull the barbell towards your lower chest while keeping your back straight.
        </p>
      </div>

      <h2 className="center2">Arm Exercises</h2>
      <div className="exercise">
        <h3>Biceps Curls</h3>
        <a href='https://www.youtube.com/watch?v=MqvN10OF5fo'>
          <img src={bicepsCurlsImage} alt="Biceps Curls" />
        </a>
        <p>
          Biceps curls are isolation exercises that primarily target the biceps brachii muscles. Hold a dumbbell in each hand, palms facing forward, and curl the weights towards your shoulders while keeping your elbows close to your body. Lower the weights back down with control.
        </p>
      </div>

      <div className="exercise">
        <h3>Kickbacks</h3>
        <a href='https://www.youtube.com/watch?v=ShCYaoHmWmk'>
          <img src={kickbacksImage} alt="Kickbacks" />
        </a>
        <p>
          Kickbacks are effective exercises for targeting the triceps muscles. Hold a dumbbell in one hand, hinge forward at the hips, and extend your arm straight back, squeezing your triceps at the top of the movement. Lower the weight back down with control and repeat.
        </p>
        <h5>Please click on the image to view the video tutorial</h5>
      </div>

        {/* Guides */}
        <h1 className="center11">Guides</h1>
      <div className="guides">

        <div className="guide">
          <img src={guide1Image} alt="Guide 1" className="guide-image" />
          <h3>3 Day Split Workout – The Complete Guide (2024)</h3>
          {details.benchPress && (
            <p>
              A 3 day split is a workout plan that you work out 3 times a week. The purpose of a 3 day split is to target different muscle groups in each session, and to work them out in an isolated way. 

It is designed to train different muscle groups every day so that you can rest and maximize strength gains while you’re working out. It can be a great balance between results and being time efficient.
             </p>
          )}
          <button onClick={() => handleSeeMore('benchPress')}>{details.benchPress ? 'See Less' : 'See More'}</button>
        </div>

        <div className="guide">
          <img src={guide2Image} alt="Guide 2" className="guide-image" />
          <h3>4 Day Workout Split – The Complete Guide (2024)</h3>
          {details.pushUps && (
            <p>
              The four day split workout is a workout plan that involves 4 weekly gym sessions. Each session targets a specific set of muscles. It tries to maximize exertion on the target muscle groups while allowing other muscles to recover on days when they aren’t being used. It’s also worth checking out the 2 Day Workout Split or 3 Day Workout Split if having only 2-3 workouts per week fits your schedule better, or our 5 Day Workout Split if you prefer.


            </p>
          )}
          <button onClick={() => handleSeeMore('pushUps')}>{details.pushUps ? 'See Less' : 'See More'}</button>
        </div>

        <div className="guide">
          <img src={guide3Image} alt="Guide 3" className="guide-image" />
          <h3>5 Day Split Workout – The Complete Guide (2024)</h3>
          {details.guide3 && (
            <p>
              A 5 day split is a workout routine where you split your weekly training into 5 days, typically splitting each workout session into a different muscle group. 
              This training method aims to maximize work on a specific muscle group during a training session, while giving it enough time to recover before the next session, typically the following week.
              A 5 day workout split is like any other program however, you will still need to have consistent training, proper recovery and a great nutrition, in order to achieve your muscle building goals.
            </p>
          )}
          <button onClick={() => handleSeeMore('guide3')}>{details.guide3 ? 'See Less' : 'See More'}</button>
        </div>

        <div className="guide">
          <img src={guide4Image} alt="Guide 4" className="guide-image" />
          <h3>Bro Split – The Ultimate Workout Program Guide</h3>
          {details.guide4 && (
            <p>
              The bro split workout routine is nothing more than an approach to organizing your training, and there are many ways to go about that.
              As you probably noticed, with the bro split, you devote each workout to one or two muscle groups. Typically, you train each muscle group once every seven days and do a total of three to six weekly workouts.
              One of the great things about the bro split is that you can vary the training frequency, depending on how often you can (or want to) train. You can also organize your weekly workouts in numerous ways. If you prefer to have shorter and more frequent workouts, the bro split can accommodate.
              If you don’t want to train chest on Monday, but on Thursday, you can do it. The scheduling flexibility is fantastic.

            </p>
          )}
          <button onClick={() => handleSeeMore('guide4')}>{details.guide4 ? 'See Less' : 'See More'}</button>
        </div>

        <div className="guide">
          <img src={guide5Image} alt="Guide 5" className="guide-image" />
          <h3>The Upper / Lower Split – Complete Workout Program Guide</h3>
          {details.guide5 && (
            <p>
              The upper/lower split is among the most popular ways to organize your training. The idea behind it is very simple: You split your training into upper body exercise days and lower body exercise days. The most common way is to spread your weekly training volume across four workouts – two upper, and two lower.
              People tend to have multiple variations of an Upper or a Lower routine, so that they can perform different exercises and workout muscle groups in different intensities depending on the workout.


            </p>
          )}
          <button onClick={() => handleSeeMore('guide5')}>{details.guide5 ? 'See Less' : 'See More'}</button>
        </div>

        <div className="guide">
          <img src={guide6Image} alt="Guide 6" className="guide-image" />
          <h3>Push Pull Legs (PPL) – The Ultimate Workout Program Guide</h3>
          {details.guide6 && (
            <p>
              This training method has been around for a while, and many people today swear by its efficacy and usefulness. The Push-Pull Legs split is a way of organizing your weekly workouts by dividing your training into three categories: push exercises, pull exercises, and legs exercises.

With this split, you combine different muscle groups with similar functions and train them together. Instead of training them separately, you can bundle them together, work them hard, and then give them sufficient time to recover before training them again.
            </p>
          )}
          <button onClick={() => handleSeeMore('guide6')}>{details.guide6 ? 'See Less' : 'See More'}</button>
        </div>
      </div>
      
    </div>
  );
};

export default StrengthTrainingPage;
