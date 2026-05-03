import type { FC } from "hono/jsx";
import { Layout } from "../components/Layout";
import { Icon } from "../components/Icon";

export const Home: FC = () => {
  return (
    <Layout title="Home — Projek Bre">
      <div class="max-w-5xl mx-auto">
        <h1 class="flex items-center gap-2 text-[1.75rem] font-bold mb-4">
          <Icon name="Rocket" size={28} />
          Projek Bre
        </h1>
        <p>Setup done. Ready to build.</p>
      </div>
    </Layout>
  );
};
