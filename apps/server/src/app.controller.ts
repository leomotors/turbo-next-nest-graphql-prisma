import { Controller, Get, Redirect } from "@nestjs/common";

@Controller()
export class AppController {
  @Get()
  @Redirect("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
  get() {
    return;
  }
}
