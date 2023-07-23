module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: 'myController.index',
    config: {
      policies: [],
      auth: false
    },
  },
  {
    method: 'GET',
    path: '/get-projects',
    handler: 'ourBerry.get_projects',
    config: {
      policies: [],
      auth: false
    },
  },
  {
    method: 'GET',
    path: '/get-project-details',
    handler: 'ourBerry.get_project_details',
    config: {
      policies: [],
      auth: false
    },
  },
];
