const prisma = require("../../utils/dbClient");

async function getAll(req, res) {
	const allDocs = await prisma.doctor.findMany();
    res.json({allDoctors: allDocs})
}

module.exports = { getAll };
