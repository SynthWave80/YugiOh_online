import { createTRPCRouter } from "@/server/api/trpc";
import { cardsRouter } from "@/server/api/routers/cards";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  cards: cardsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
