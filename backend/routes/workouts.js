
const express = require('express')
const {
  getWorkouts, 
  getWorkout, 
  createWorkout, 
  deleteWorkout, 
  updateWorkout
} = require('../controllers/workoutController')

const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// require auth for all workout route s
router.use(requireAuth)

// GET all workouts
router.get('/', getWorkouts)

// GET a single workout
router.get('/:id', getWorkout)

// POST a new workout
router.post('/', createWorkout)

// DELETE a workout
router.delete('/:id', deleteWorkout)

// UPDATE a workout
router.patch('/:id', updateWorkout)

module.exports = router



// const express = require('express')

// const router = express.Router()

// // GET all workouts
// router.get('/', (req, res) => {
//   res.json({mssg: 'GET all workouts'})
// })

// // GET a single workout
// router.get('/:id', (req, res) => {
//   res.json({mssg: 'GET a single workout'})
// })

// // POST a new workout
// router.post('/', async (req, res) => {
//   const {title, load, reps} = req.body
  
//   try {
//     // 200 code is for successful
//     const workout = await Workout.create({title, load, reps})
//     res.status(200).json(workout)
//   } catch (error) {
//     // 400 is the code of error
//     res.status(400).json({error: error.message})
//   }
// })

// // DELETE a workout
// router.delete('/:id', (req, res) => {
//   res.json({mssg: 'DELETE a workout'})
// })

// // UPDATE a workout
// router.patch('/:id', (req, res) => {
//   res.json({mssg: 'UPDATE a workout'})
// })

// module.exports = router



