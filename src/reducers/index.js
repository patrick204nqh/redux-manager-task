const initialState = [
  {
    id: 1,
    title: 'Learn ReactJS',
    description: "Let's learn React JS today",
    status: 'Completed',
  },
  {
    id: 2,
    title: 'Learn Redux',
    description: "Let's learn Redux today",
    status: 'In Progress',
  },
  {
    id: 3,
    title: 'Learn MERN',
    description: "Let's learn MERN this is my next step!",
    status: 'Unstarted',
  },
];

const tasks = (state = { tasks: initialState }, action) => {
  return state;
};

export default tasks;
