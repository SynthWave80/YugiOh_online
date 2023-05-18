import { object, z } from "zod";
import { cards } from "@/utils/cardsInterface";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { error } from "console";

export const cardsRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.yuGiOhDb.findMany({
      where: {
        NOT: {
          id: {
            in: [0, 3],
          },
        },
      },
      take: 100,
      distinct: ["id"],
    });
  }),

  getCard: publicProcedure.input(z.number()).query(({ ctx, input }) => {
    return ctx.prisma.yuGiOhDb.findUnique({
      where: { id: input },
    });
  }),

  createCard: publicProcedure
    .input(
      z.object({
        id: z.number(),
        CardName: z.string(),
        CardType: z.string(),
        Attribute: z.string(),
        Property: z.string(),
        Types: z.string(),
        Level: z.number(),
        ATK: z.number(),
        DEF: z.number(),
        Link: z.number(),
        PendulumScale: z.number(),
        Description: z.string(),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.yuGiOhDb.create({
        data: input,
      });
    }),

  // impossible to update if the name is the primary key
  updateCard: publicProcedure
    .input(
      z.object({
        id: z.number(),
        CardName: z.string(),
        CardType: z.string(),
        Attribute: z.string(),
        Property: z.string(),
        Types: z.string(),
        Level: z.number(),
        ATK: z.number(),
        DEF: z.number(),
        Link: z.number(),
        PendulumScale: z.number(),
        Description: z.string(),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.yuGiOhDb.update({
        where: { id: input.id },
        data: input,
      });
    }),

  deleteCard: publicProcedure.input(z.number()).mutation(({ ctx, input }) => {
    return ctx.prisma.yuGiOhDb.delete({
      where: { id: input },
    });
  }),

  getCardsLike: publicProcedure.input(z.string()).query(({ ctx, input }) => {
    if (input.length > 1) {
      return ctx.prisma.yuGiOhDb.findMany({
        where: {
          CardName: { contains: input },
        },
      });
    } else {
      return null;
    }
  }),
});
