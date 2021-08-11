const prisma = require("../../utils/dbClient");

async function getAll(req, res) {
	const allAppointments = await prisma.appointment.findMany();
	res.json({ allAppointments: allAppointments });
}
async function postOne(req, res) {
	const { doctorId, ...newAppointment } = req.body;

	const madeAppointment = await prisma.appointment.create({
		data: { ...newAppointment, doctor: { connect: { id: doctorId } } },
	});
	res.json({ madeAppointment: madeAppointment });
}

module.exports = { getAll, postOne };
