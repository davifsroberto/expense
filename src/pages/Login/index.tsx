import { Button } from '../../components/atoms/Button'
import { InputText } from '../../components/molecules/InputText'
import { Link } from '../../components/molecules/Link'
import { SidebarHero } from '../../components/organism/SidebarHero'
import {
  TemplateContainer,
  TemplateContent,
  TemplateMainHeroSection
} from '../../components/templates'

export const Login = () => {
  return (
    <TemplateContainer>
      <TemplateContent className="grid h-full w-full  max-w-screen-lg grid-cols-2">
        <SidebarHero />

        <TemplateMainHeroSection>
          <h2 className="text-3xl font-bold">Manage Your Spending</h2>

          <form className="flex w-full max-w-xs flex-col gap-4">
            <InputText label="Mail" type="email" />

            <InputText label="Password" type="password" />

            <Button>Sing Up</Button>
          </form>

          <Link href="/register">Sing Up</Link>
        </TemplateMainHeroSection>
      </TemplateContent>
    </TemplateContainer>
  )
}
