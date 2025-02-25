import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/canvas-editor-docs/',
  title: 'canvas-editor',
  description: 'rich text editor by canvas/svg',
  themeConfig: {
    algolia: {
      appId: 'RWSVW6F3S5',
      apiKey: 'e462fffb4d2e9ab4a78c29e0b457ab33',
      indexName: 'hufe',
    },
    logo: '/favicon.png',
    nav: [{
      text: '指南',
      link: '/guide/start',
      activeMatch: '/guide/'
    }, {
      text: 'Demo',
      link: 'https://hufe.club/canvas-editor'
    }],
    sidebar: [
      {
        text: '开始',
        items: [
          { text: '入门', link: '/guide/start' },
          { text: '配置', link: '/guide/option' },
          { text: '国际化', link: '/guide/i18n' },
          { text: '数据结构', link: '/guide/schema' }
        ]
      },
      {
        text: '命令',
        items: [
          { text: '执行动作命令', link: '/guide/command-execute' },
          { text: '获取数据命令', link: '/guide/command-get' }
        ]
      },
      {
        text: '监听',
        items: [
          { text: '事件监听', link: '/guide/listener' }
        ]
      },
      {
        text: '快捷键',
        items: [
          { text: '内部快捷键', link: '/guide/shortcut-internal' },
          { text: '自定义快捷键', link: '/guide/shortcut-custom' },
        ]
      },
      {
        text: '右键菜单',
        items: [
          { text: '内部右键菜单', link: '/guide/contextmenu-internal' },
          { text: '自定义右键菜单', link: '/guide/contextmenu-custom' }
        ]
      },
      {
        text: 'API',
        items: [
          { text: '全局API', link: '/guide/api' }
        ]
      },
      {
        text: '插件',
        items: [
          { text: '自定义插件', link: '/guide/plugin' }
        ]
      }
    ],
    socialLinks: [{
      icon: 'github',
      link: 'https://github.com/Hufe921/canvas-editor'
    }],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2021-present Hufe'
    }
  }
})