import MOCK_COMMENTS from './mocks';

export default (req, res) => {
  const { exerciseId } = req.query;
  /**
   * You can test this using either 1 or 2 as the exerciseId
   * Example URL: /feedback-review/1
   */
  const comments = MOCK_COMMENTS.filter((item) => item.exerciseId === Number(exerciseId));

  res.statusCode = 200;
  res.json(comments);
};
