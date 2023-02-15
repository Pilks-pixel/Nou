// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import sendgrid from "@sendgrid/mail";


sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async function sendEmail(req, res) {
  try {
    const {customerName, email, deadline, description, branding, webDesign, print, other} = req.body.formData
    console.log('body: ', {customerName, email, deadline, description, branding, webDesign, print, other})

      await sendgrid.send({
      // to: 'noudesign.horten@gmail.com',
      to: 'peterpilkington@hotmail.com',
      from: 'peterpilkington@hotmail.com',
      subject: `New enquiry from ${customerName}`,
      html: `<div>
              <h3>You've got a new mail from ${customerName}, their email is: ✉️${email} </h3>
              <p>Message:</p>
              <p>${description}</p>
              <br>
              <p>Deadline:</p>
              <p>${deadline}:</p>
              <p>They are interested in branding:${branding}, web design: ${webDesign}, print: ${print}, other: ${other}.</p>
            </div>`
    })

    
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }
  
  return res.status(200).json('contact query successfully sent');


}
