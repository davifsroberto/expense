import { Button } from "../../components/atoms/Button";
import { InputText } from "../../components/molecules/InputText";
import { Link } from "../../components/molecules/Link";
import { SidebarHero } from "../../components/organism/SidebarHero";
import {
  TemplateContainer,
  TemplateContent,
  TemplateMainHeroSection,
} from "../../components/templates";

export const DashboardAdd = () => {
  return (
    <TemplateContainer>
      <TemplateContent className="grid h-full w-full  max-w-screen-lg grid-cols-2">
        <SidebarHero />

        <TemplateMainHeroSection>
          <h2 className="text-3xl font-bold">Add new expense</h2>

          <form className="flex w-full max-w-xs flex-col gap-4">
            <InputText label="Expense" type="text" />

            <InputText label="Categoty" type="text" />

            <InputText label="Value" type="number" />

            <Button>Add</Button>
          </form>

          <Link href="/dashboard">Back</Link>
        </TemplateMainHeroSection>
      </TemplateContent>
    </TemplateContainer>
  );
};
