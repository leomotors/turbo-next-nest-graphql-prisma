import { Button } from "@org/design";

import { MyPage } from "$core/@types";

const IndexPage: MyPage = () => {
  return (
    <main className="flex h-screen flex-col items-center justify-center gap-4 p-8 text-center transition-colors">
      <h1 className="text-6xl font-bold text-blue-600 dark:text-blue-500">
        Turbo Next Nest GraphQL Prisma
      </h1>

      <p className="text-4xl font-bold">My personal stack for production app</p>

      <a href="https://github.com/Leomotors/turbo-next-nest-graphql-prisma">
        <Button>GitHub</Button>
      </a>
    </main>
  );
};

export default IndexPage;
