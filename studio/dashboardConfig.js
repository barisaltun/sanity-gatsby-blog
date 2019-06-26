export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5d1322e91758676c70cbb524',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-dvweuvqi',
                  apiId: '20f2332e-0c0b-42fb-8a11-8bcd38df0284'
                },
                {
                  buildHookId: '5d1322ea1c924f6178ab2039',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-yeqfqx5h',
                  apiId: '89109027-428a-4503-98e1-af96d25b9d24'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/barisaltun/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-yeqfqx5h.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
