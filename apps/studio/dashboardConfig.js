export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'tclaes/Eat-For'
      }
    },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '608efddad84cb5c0744ac9ed',
                  title: 'Sanity Studio',
                  name: 'eat-for-studio',
                  apiId: '9e43b709-bc62-45f7-be6d-9afb0fbd8e83'
                },
                {
                  buildHookId: '608efddbfc4283d18af3ea76',
                  title: 'Website',
                  name: 'eat-for',
                  apiId: '77cbe861-8a0e-4e04-b0bd-86f663d70d68'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tclaes/Eat-For',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://eat-for.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
