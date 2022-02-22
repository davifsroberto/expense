import tw from 'tailwind-styled-components'

export const TemplateContainer = tw.article`
  flex flex-col h-screen w-screen items-center bg-gray-50
`

export const TemplateContent = tw.section`
  grid h-full w-full  max-w-screen-lg grid-cols-2
`

export const TemplateMainHeroSection = tw.main`
  flex flex-col items-center justify-center gap-16
`
