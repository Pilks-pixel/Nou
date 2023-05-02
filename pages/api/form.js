
const nodemailer = require("nodemailer");
const emailAddress = process.env.EMAIL_ADDRESS;
const pass = process.env.PASSWORD;
// create transporter to enable SMTP requests
let transporter = nodemailer.createTransport({
	service: "hotmail",
	auth: {
		user: emailAddress,
		pass: pass,
	},
});

export default async function sendEmail(req, res) {

	// Email body & data from form request
	const {
		customerName,
		email,
		deadline,
		description,
		branding,
		webDesign,
		print,
		other,
	} = req.body.formData;
	
	const mailOptions = {
		from: emailAddress,
		to: emailAddress,
		subject: `New message from ${customerName}`,
		text: description,
		html: `<div>
		<h3>You've got a new mail from ${customerName}, their email is: ✉️${email} </h3>
		<p>Message:</p>
		<h4>${description}</h4>
		<br>
		<h4>Deadline:</h4>
		<p>${deadline}:</p>
		<br>
		<h4>They are interested in</h4>
		<ul>
		<li>branding: ${branding}</li>
		<li>web design: ${webDesign}</li>
		<li>print: ${print}</li>
		<li>other: ${other}</li>
		</ul>
		</div>`,
	};
	

	try {
		console.log({email}, {pass})

		await transporter.sendMail(mailOptions)
		// res.status(200).json({sucess: `message sent`})
		res.status(200).json({sucess: `${emailAddress} ${pass} sent`})
	} catch (error) {
		console.log(email, {pass}, 'error')
		res.status(404).json({error: `Connection refused `})
	}

}


