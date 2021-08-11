const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const doctors = [
	{
		firstName: "Mantus",
		lastName: "Tabogin",
		specialty: "Magnum Dongs",
	},
	{
		firstName: "Dr.",
		lastName: "Zeus",
		specialty: "Stories",
	},
	{
		firstName: "Doctor",
		lastName: "Nick",
		specialty: "People of Springfield",
	},
];
const appointments = [
	{
		practiceName: "Paddy's GP",
		date: "21/03/2022",
		reason: "Too much cheese",
	},
	{
		practiceName: "Paddy's GP",
		date: "22/03/2022",
		reason: "Ate too much",
	},
];

async function main() {
	const promisesArray = doctors.map(async (dr) => {
		return await prisma.doctor.create({ data: dr });
	});

	const newDoctors = await Promise.all(promisesArray);
	console.log(newDoctors);

	const apptmntPromises = appointments.map(async (aptmnt) => {
		return await prisma.appointment.create({
			data: {
				...aptmnt,
				doctor: {
					connect: { id: 1 },
				},
			},
		});
	});

	const newAppointments = await Promise.all(apptmntPromises);
	console.log(newAppointments);
}

main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
