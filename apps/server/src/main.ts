import { NestFactory } from "@nestjs/core";

import { AppModule } from "./app.module";

const PORT = 4201;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.listen(PORT);
  console.log(
    `Application is running on port ${PORT} (http://localhost:${PORT}/graphql)`
  );
}

bootstrap();
