import { MOCK_EXERCISES } from './mocks';

export default (req, res) => {
  const { exerciseId } = req.query;
  const exercise = MOCK_EXERCISES.find(item => item.id === Number(exerciseId));
  
  if (!exercise) {
    res.statusCode = 404;
    return res.end();
  }

  res.statusCode = 200;
  res.json(exercise);
};
