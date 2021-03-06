## Description
Build CRUD in the controllers and practice writing Prisma queries that involve relationships between models

## Instructions
- Create an express app from scratch.
- Remember to include Prisma, Dotenv and Morgan as dependecies
- Create a new Database in ElephatSQL, and grab the URL:
    -- in ElephantSQL
    -- in the details section.
- Create a shadow Database in ElephatSQL, and grab the URL too!
- Build the models for Doctor and Appointment . 
- Build the controllers for Doctor and Appointment

Build the models with the following attributes:

Doctor:
- First name
- Last name
- Specialty
- Doctor has many appointments

Appointment
- Practice name
- Date
- Time
- Reason
- Appointment belongs to Doctor

Create a seed file with some mock data. Don't spend too much time on this!

Build these routes and controllers for the appointment resource that work with the following fetch requests:
    -- Full CRUD base routes
        -- When you create an appointment, it should have a doctor assigned
    -- /appointments?filter=type&value=value that returns appointments by filter
        -- /appointments?order=recent returns appointments order by date
        -- /appointment/doctors should return all doctors with appointments
@here
Build these routes and controllers for the doctor resource that work with the following fetch requests:
    -- Full CRUD base routes
    -- /doctors/:id/appointments returns the appointments from specific doctor
        -- /doctors/:id/practice returns a list of places where the doctor has appoinments
        -- /doctors/most-busy returns the doctor with the most appointments booked
        -- /doctors/total-hours returns the total amount of time in appontments, ssuming each appointment is 30 mins

Tips
- Use ElephantSQL to test your SQL queries and see if they are returning what you want before adding them to the code.
- Use the docs extensively. You;; find there the answers to all this queries.

Challenge 1
Add validations in your controllers that sends a useful message back to the client when there's an error, with suggestions as to what they could do differently.

1. create express-generator --no-view --git
2. npm init
3. npm i prisma
4. npx prisma init