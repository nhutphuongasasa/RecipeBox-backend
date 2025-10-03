"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatingRepository = void 0;
class RatingRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createRating(rating) {
        return await this.prisma.rating.create({ data: rating });
    }
    async updateRating(id, rating) {
        return await this.prisma.rating.update({ where: { id }, data: rating });
    }
    async deleteRating(id) {
        return await this.prisma.rating.delete({ where: { id } });
    }
    async getRatingById(id) {
        return await this.prisma.rating.findUnique({ where: { id } });
    }
}
exports.RatingRepository = RatingRepository;
//# sourceMappingURL=index.js.map