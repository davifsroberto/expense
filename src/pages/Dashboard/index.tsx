import Router from "next/router";

import { TemplateContainer } from "../../components/templates";
import { Button } from "../../components/atoms/Button";
import { Card } from "./Card";

export const Dashboard = () => {
  const expense = [
    { id: "0", title: "Netflix", category: "streamming", cost: 39.99 },
    { id: "1", title: "Amazon", category: "streamming", cost: 9.99 },
    { id: "2", title: "Internet", category: "web", cost: 79.99 },
    { id: "3", title: "Spotify", category: "streamming", cost: 9.99 },
  ];

  const handleNavigateToAddNewExpense = () => {
    Router.push("/dashboard/add");
  };

  return (
    <TemplateContainer>
      <header className="flex h-1/6 w-full max-w-screen-lg items-center justify-between">
        <span className="text-2xl font-bold">Expense Tracker</span>

        <nav className="flex gap-4">
          <Button onClick={handleNavigateToAddNewExpense}>
            Add New Expense
          </Button>
          <Button variant="ghost">Log Off</Button>
        </nav>
      </header>

      <article className="grid h-5/6 w-full max-w-screen-lg grid-cols-3 content-start gap-4 overflow-y-scroll bg-purple-50 p-4">
        {expense?.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            category={item.category}
            cost={item.cost}
          />
        ))}
      </article>
    </TemplateContainer>
  );
};
