export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5d59d8e3b94627a55160c34b',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-z7yn9tt7',
                  apiId: '57d146b5-7989-462d-a6ec-c435135dcaaa'
                },
                {
                  buildHookId: '5d59d8e3ed8ddb6f976a68a8',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-dqrmjubn',
                  apiId: '1043ec2a-0068-4398-952b-f1e3c86ea043'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/esmith7196/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-dqrmjubn.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
