
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

export default function sendEmail(req, res) {
	if (req.method === "POST") {

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
			 transporter.sendMail(mailOptions, (error, info) => {
				if (error) {
					console.error(error);
					res.status(500).json({ error: "Error sending email" });
				} else {
					console.log("Email sent: " + info.response);
					res.status(250).json({ success: `message delivered to ${info.accepted}` });
				}
			});


		} catch (error) {
			res.status(500).json({ error: "Error sending email" });
		}
	} else {
		res.status(405).json({ error: "Method not allowed" });
	}
}

