"use strict";
exports.__esModule = true;
exports.cardsRouter = void 0;
var zod_1 = require("zod");
var trpc_1 = require("@/server/api/trpc");
exports.cardsRouter = trpc_1.createTRPCRouter({
    hello: trpc_1.publicProcedure
        .input(zod_1.z.object({ text: zod_1.z.string() }))
        .query(function (_a) {
        var input = _a.input;
        return {
            greeting: "Hello " + input.text
        };
    }),
    getAll: trpc_1.publicProcedure.query(function (_a) {
        var ctx = _a.ctx;
        return ctx.prisma.yuGiOhDb.findMany({
            where: {
                NOT: {
                    id: {
                        "in": [0, 3]
                    }
                }
            },
            take: 100,
            distinct: ["id"]
        });
    }),
    getCard: trpc_1.publicProcedure.input(zod_1.z.number()).query(function (_a) {
        var ctx = _a.ctx, input = _a.input;
        return ctx.prisma.yuGiOhDb.findUnique({
            where: { id: input }
        });
    }),
    createCard: trpc_1.publicProcedure
        .input(zod_1.z.object({
        id: zod_1.z.number(),
        CardName: zod_1.z.string(),
        CardType: zod_1.z.string(),
        Attribute: zod_1.z.string(),
        Property: zod_1.z.string(),
        Types: zod_1.z.string(),
        Level: zod_1.z.number(),
        ATK: zod_1.z.number(),
        DEF: zod_1.z.number(),
        Link: zod_1.z.number(),
        PendulumScale: zod_1.z.number(),
        Description: zod_1.z.string()
    }))
        .mutation(function (_a) {
        var ctx = _a.ctx, input = _a.input;
        return ctx.prisma.yuGiOhDb.create({
            data: input
        });
    }),
    // impossible to update if the name is the primary key
    updateCard: trpc_1.publicProcedure
        .input(zod_1.z.object({
        id: zod_1.z.number(),
        CardName: zod_1.z.string(),
        CardType: zod_1.z.string(),
        Attribute: zod_1.z.string(),
        Property: zod_1.z.string(),
        Types: zod_1.z.string(),
        Level: zod_1.z.number(),
        ATK: zod_1.z.number(),
        DEF: zod_1.z.number(),
        Link: zod_1.z.number(),
        PendulumScale: zod_1.z.number(),
        Description: zod_1.z.string()
    }))
        .mutation(function (_a) {
        var ctx = _a.ctx, input = _a.input;
        return ctx.prisma.yuGiOhDb.update({
            where: { id: input.id },
            data: input
        });
    }),
    deleteCard: trpc_1.publicProcedure.input(zod_1.z.number()).mutation(function (_a) {
        var ctx = _a.ctx, input = _a.input;
        return ctx.prisma.yuGiOhDb["delete"]({
            where: { id: input }
        });
    }),
    getCardsLike: trpc_1.publicProcedure.input(zod_1.z.string()).query(function (_a) {
        var ctx = _a.ctx, input = _a.input;
        return ctx.prisma.yuGiOhDb.findMany({
            where: {
                CardName: { contains: input }
            }
        });
    })
});
