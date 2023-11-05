
import title from "./title.js";
import userOperations from "./studentOperations.js";
import { thankYou } from "./engraphic.js";

async function studentManagementSystem(): Promise<void> {
  console.clear();
  await title();
  await userOperations();
  console.log(thankYou);
}

studentManagementSystem();