import { router } from "../trpc";
import { create } from "./service";

export const categoriesRouter = router({
  create,
});
