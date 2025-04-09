import { routes } from "@/routes/routes";
import { redirect } from "next/navigation";

const HomePage = async () => {
  redirect(routes.root.buildings.root);
};

export default HomePage;
