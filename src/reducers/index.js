const initialState = [
  {
    id: 1,
    title: 'Learn ReactJS',
    description: "Let's learn React JS today",
    status: 'In Progress',
  },
  {
    id: 2,
    title: 'Learn Redux',
    description: "Let's learn Redux today",
    status: 'In Progress',
  },
];

const tasks = (state = { tasks: initialState }, action) => {
  return state;
};

export default tasks;
