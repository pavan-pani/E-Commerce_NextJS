import nodemailer from 'nodemailer'
import User from '@/models/userModel'
import bcryptjs from 'bcryptjs';

export const sendEmail = async ({ email, emailType, userId }: any) => {
    try {
        //craete has token
        console.log("date for mailer ", email, emailType, userId );
        
        const hashToken = await bcryptjs.hash(userId.toString(), 10,)
        console.log("hashToken ", hashToken);

        if (emailType === 'VERIFY') {
            await User.findByIdAndUpdate(userId, {
                verfiedToken: hashToken,
                verfiedTokenExpiry: Date.now() + 3600000
            }, { new: true, runValidators: true })
        }
        else if (emailType === 'RESET') {
            await User.findByIdAndUpdate(userId, {
                forgotPasswordToken: hashToken,
                forgotPasswordTokenExpiry: Date.now() + 3600000
            }, { new: true, runValidators: true })
        }

        const transport = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: "7c5bf0ebcfcc74",
                pass: "3bdbdbb9377864"
            }
        });

        const mailOptions = {
            from: 'test@gmail.com',
            to: email,
            subject: emailType === 'VERIFY' ? "Verify your emial" : "Reset your password",
            html: `<p>Click <a href="${process.env.DOMAIN}"/verifyemail?token=${hashToken}">here</a> to ${emailType === 'VERIFY' ? "Verify your emial" : "Reset your password"}</p>`
        }

        const mailRes = await transport.sendMail(mailOptions)

    } catch (error: any) {
        throw new Error(error.meaage)
    }
}