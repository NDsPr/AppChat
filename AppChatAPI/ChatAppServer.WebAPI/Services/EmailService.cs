﻿using System.Net;
using System.Net.Mail;

public interface IEmailService
{
    Task SendWelcomeEmail(string email, string username);
    Task SendResetEmail(string email, string token);
    Task SendPasswordChangeEmail(string email, string username);
    Task SendResetSuccessEmail(string email, string username);
    Task SendEmailConfirmationAsync(string email, string firstName, string lastName);
    Task SendEmailConfirmationTokenAsync(string email, string firstName, string lastName, string token);
}

public class EmailService : IEmailService
{
    private readonly IConfiguration _configuration;

    public EmailService(IConfiguration configuration)
    {
        _configuration = configuration;
    }

    public async Task SendWelcomeEmail(string email, string username)
    {
        var welcomeMessage = GenerateWelcomeMessage(username);
        await SendEmailAsync(email, "Welcome", welcomeMessage);
    }

    public async Task SendResetEmail(string email, string token)
    {
        var resetLink = $"{_configuration["AppSettings:ClientURL"]}/reset-password?token={token}";
        var resetMessage = GenerateResetMessage(resetLink);
        await SendEmailAsync(email, "Password Reset", resetMessage);
    }

    public async Task SendPasswordChangeEmail(string email, string username)
    {
        var changePasswordMessage = GenerateChangePasswordMessage(username);
        await SendEmailAsync(email, "Password Changed", changePasswordMessage);
    }

    public async Task SendResetSuccessEmail(string email, string username)
    {
        var resetSuccessMessage = GenerateResetSuccessMessage(username);
        await SendEmailAsync(email, "Password Reset Successfully", resetSuccessMessage);
    }

    public async Task SendEmailConfirmationAsync(string email, string firstName, string lastName)
    {
        var confirmationMessage = GenerateEmailConfirmationMessage(firstName, lastName);
        await SendEmailAsync(email, "Email Confirmation", confirmationMessage);
    }

    public async Task SendEmailConfirmationTokenAsync(string email, string firstName, string lastName, string token)
    {
        var confirmationLink = $"{_configuration["AppSettings:ClientURL"]}/confirm-email?token={token}";
        var confirmationMessage = GenerateEmailConfirmationTokenMessage(firstName, lastName, confirmationLink);
        await SendEmailAsync(email, "Email Confirmation", confirmationMessage);
    }

    private async Task SendEmailAsync(string email, string subject, string body)
    {
        var mailMessage = new MailMessage
        {
            From = new MailAddress("no-reply@yourapp.com"),
            Subject = subject,
            Body = body,
            IsBodyHtml = true,
        };
        mailMessage.To.Add(email);

        using var smtpClient = new SmtpClient(_configuration["Smtp:Host"], int.Parse(_configuration["Smtp:Port"]))
        {
            Credentials = new NetworkCredential(_configuration["Smtp:Username"], _configuration["Smtp:Password"]),
            EnableSsl = true
        };

        await smtpClient.SendMailAsync(mailMessage);
    }

    private string GenerateWelcomeMessage(string username)
    {
        return $@"
        <html>
        <head>
            <style>
                body {{ font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f4f4f4; }}
                .container {{ width: 100%; padding: 20px; background-color: #ffffff; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); border-radius: 10px; max-width: 600px; margin: 20px auto; }}
                .header {{ background-color: #329cd1; color: white; padding: 10px 0; text-align: center; border-radius: 10px 10px 0 0; }}
                .content {{ padding: 20px; }}
                .content h2 {{ color: #333333; }}
                .content p {{ line-height: 1.6; color: #666666; }}
                .footer {{ margin-top: 20px; text-align: center; font-size: 12px; color: #999999; }}
                .footer a {{ color: #329cd1; text-decoration: none; }}
            </style>
        </head>
        <body>
            <div class='container'>
                <div class='header'>
                    <h1>Welcome to Harmony Chat</h1>
                </div>
               <div class='content'>
                    <h2>Chào {username},</h2>
                    <p>Cảm ơn bạn đã đăng ký tại trang web của chúng tôi! Chúng tôi rất vui khi có bạn tham gia.</p>
                    <p>Nếu bạn có bất kỳ câu hỏi nào, vui lòng <a href='mailto:dhhceramic@gmail.com'>liên hệ với chúng tôi</a>.</p>
                    <br>
                    <p>Trân trọng,</p>
                    <p>Đội ngũ Appchat</p>
               </div>
               <div class='footer'>
                    <p>&copy; {DateTime.Now.Year} Appchat. Bảo lưu tất cả quyền.</p>
                    <p><a href='https://yourapp.com/privacy'>Chính sách bảo mật</a> | <a href='https://yourapp.com/terms'>Điều khoản dịch vụ</a></p>
               </div>
            </div>
        </body>
        </html>";
    }

    private string GenerateResetMessage(string resetLink)
    {
        return $@"
        <html>
        <head>
            <style>
                body {{ font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f4f4f4; }}
                .container {{ width: 100%; padding: 20px; background-color: #ffffff; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); border-radius: 10px; max-width: 600px; margin: 20px auto; }}
                .header {{ background-color: #329cd1; color: white; padding: 10px 0; text-align: center; border-radius: 10px 10px 0 0; }}
                .content {{ padding: 20px; }}
                .content h2 {{ color: #333333; }}
                .content p {{ line-height: 1.6; color: #666666; }}
                .footer {{ margin-top: 20px; text-align: center; font-size: 12px; color: #999999; }}
                .footer a {{ color: #329cd1; text-decoration: none; }}
                .button {{ display: inline-block; padding: 10px 20px; margin: 20px 0; font-size: 16px; color: #ffffff; background-color: #329cd1; border-radius: 5px; text-decoration: none; color: white; }}
            </style>
        </head>
        <body>
            <div class='container'>
                <div class='header'>
                    <h1>Password Reset Request</h1>
                </div>
                <div class='content'>
                    <h2>Chào,</h2>
                    <p>Chúng tôi đã nhận được yêu cầu đặt lại mật khẩu của bạn. Nhấn vào nút dưới đây để đặt lại mật khẩu.</p>
                    <p><a href='{resetLink}' class='button' style='color: white;'>Đặt lại mật khẩu</a></p>
                    <p>Nếu bạn không yêu cầu đặt lại mật khẩu, vui lòng bỏ qua email này.</p>
                    <br>
                    <p>Trân trọng,</p>
                    <p>Đội ngũ Appchat</p>
                </div>
                <div class='footer'>
                    <p>&copy; {DateTime.Now.Year} Appchat. Bảo lưu tất cả quyền.</p>
                    <p><a href='https://yourapp.com/privacy'>Chính sách bảo mật</a> | <a href='https://yourapp.com/terms'>Điều khoản dịch vụ</a></p>
                </div>
            </div>
        </body>
        </html>";
    }

    private string GenerateChangePasswordMessage(string username)
    {
        return $@"
        <html>
        <head>
            <style>
                body {{ font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f4f4f4; }}
                .container {{ width: 100%; padding: 20px; background-color: #ffffff; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); border-radius: 10px; max-width: 600px; margin: 20px auto; }}
                .header {{ background-color: #329cd1; color: white; padding: 10px 0; text-align: center; border-radius: 10px 10px 0 0; }}
                .content {{ padding: 20px; }}
                .content h2 {{ color: #333333; }}
                .content p {{ line-height: 1.6; color: #666666; }}
                .footer {{ margin-top: 20px; text-align: center; font-size: 12px; color: #999999; }}
                .footer a {{ color: #329cd1; text-decoration: none; }}
            </style>
        </head>
        <body>
            <div class='container'>
                <div class='header'>
                    <h1>Password Changed</h1>
                </div>
                <div class='content'>
                    <h2>Chào {username},</h2>
                    <p>Mật khẩu của bạn đã được thay đổi thành công. Nếu bạn không thực hiện thay đổi này, vui lòng liên hệ ngay với bộ phận hỗ trợ của chúng tôi.</p>
                    <br>
                    <p>Trân trọng,</p>
                    <p>Đội ngũ Appchat</p>
                </div>
                <div class='footer'>
                    <p>&copy; {DateTime.Now.Year} Appchat. Bảo lưu tất cả quyền.</p>
                    <p><a href='https://yourapp.com/privacy'>Chính sách bảo mật</a> | <a href='https://yourapp.com/terms'>Điều khoản dịch vụ</a></p>
                </div>
            </div>
        </body>
        </html>";
    }

    private string GenerateResetSuccessMessage(string username)
    {
        return $@"
        <html>
        <head>
            <style>
                body {{ font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f4f4f4; }}
                .container {{ width: 100%; padding: 20px; background-color: #ffffff; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); border-radius: 10px; max-width: 600px; margin: 20px auto; }}
                .header {{ background-color: #329cd1; color: white; padding: 10px 0; text-align: center; border-radius: 10px 10px 0 0; }}
                .content {{ padding: 20px; }}
                .content h2 {{ color: #333333; }}
                .content p {{ line-height: 1.6; color: #666666; }}
                .footer {{ margin-top: 20px; text-align: center; font-size: 12px; color: #999999; }}
                .footer a {{ color: #329cd1; text-decoration: none; }}
            </style>
        </head>
        <body>
            <div class='container'>
                <div class='header'>
                    <h1>Password Reset Successfully</h1>
                </div>
                <div class='content'>
                    <h2>Chào {username},</h2>
                    <p>Mật khẩu của bạn đã được đặt lại thành công. Nếu bạn không yêu cầu thay đổi này, vui lòng liên hệ ngay với bộ phận hỗ trợ của chúng tôi.</p>
                    <br>
                    <p>Trân trọng,</p>
                    <p>Đội ngũ Appchat</p>
                </div>
                <div class='footer'>
                    <p>&copy; {DateTime.Now.Year} Appchat. Bảo lưu tất cả quyền.</p>
                    <p><a href='https://yourapp.com/privacy'>Chính sách bảo mật</a> | <a href='https://yourapp.com/terms'>Điều khoản dịch vụ</a></p>
                </div>
            </div>
        </body>
        </html>";
    }

    private string GenerateEmailConfirmationMessage(string firstName, string lastName)
    {
        return $@"
        <html>
        <head>
            <style>
                body {{ font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f4f4f4; }}
                .container {{ width: 100%; padding: 20px; background-color: #ffffff; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); border-radius: 10px; max-width: 600px; margin: 20px auto; }}
                .header {{ background-color: #329cd1; color: white; padding: 10px 0; text-align: center; border-radius: 10px 10px 0 0; }}
                .content {{ padding: 20px; }}
                .content h2 {{ color: #333333; }}
                .content p {{ line-height: 1.6; color: #666666; }}
                .footer {{ margin-top: 20px; text-align: center; font-size: 12px; color: #999999; }}
                .footer a {{ color: #329cd1; text-decoration: none; }}
            </style>
        </head>
        <body>
            <div class='container'>
                <div class='header'>
                    <h1>Email Confirmation</h1>
                </div>
                <div class='content'>
                    <h2>Chào {firstName} {lastName},</h2>
                    <p>Email của bạn đã được thay đổi thành công. Nếu bạn không thực hiện thay đổi này, vui lòng liên hệ ngay với bộ phận hỗ trợ của chúng tôi.</p>
                    <br>
                    <p>Trân trọng,</p>
                    <p>Đội ngũ Appchat</p>
                </div>
                <div class='footer'>
                    <p>&copy; {DateTime.Now.Year} Appchat. Bảo lưu tất cả quyền.</p>
                    <p><a href='https://yourapp.com/privacy'>Chính sách bảo mật</a> | <a href='https://yourapp.com/terms'>Điều khoản dịch vụ</a></p>
                </div>
            </div>
        </body>
        </html>";
    }

    private string GenerateEmailConfirmationTokenMessage(string firstName, string lastName, string confirmationLink)
    {
        return $@"
    <html>
    <head>
        <style>
            body {{ font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f4f4f4; }}
            .container {{ width: 100%; padding: 20px; background-color: #ffffff; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); border-radius: 10px; max-width: 600px; margin: 20px auto; }}
            .header {{ background-color: #329cd1; color: white; padding: 10px 0; text-align: center; border-radius: 10px 10px 0 0; }}
            .content {{ padding: 20px; }}
            .content h2 {{ color: #333333; }}
            .content p {{ line-height: 1.6; color: #666666; }}
            .footer {{ margin-top: 20px; text-align: center; font-size: 12px; color: #999999; }}
            .footer a {{ color: #329cd1; text-decoration: none; }}
            .button {{ display: inline-block; padding: 10px 20px; margin: 20px 0; font-size: 16px; color: #ffffff; background-color: #329cd1; border-radius: 5px; text-decoration: none; color: white; }}
        </style>
    </head>
    <body>
        <div class='container'>
            <div class='header'>
                <h1>Email Confirmation</h1>
            </div>
            <div class='content'>
        <h2>Chào {firstName} {lastName},</h2>
            <p>Cảm ơn bạn đã đăng ký. Vui lòng nhấn vào nút dưới đây để xác nhận địa chỉ email của bạn.</p>
            <p><a href='{confirmationLink}' class='button' style='color: white;'>Xác nhận Email</a></p>
            <br>
            <p>Trân trọng,</p>
            <p>Đội ngũ App chat</p>
        </div>
        <div class='footer'>
            <p>&copy; {DateTime.Now.Year} Appchat. Bảo lưu tất cả quyền.</p>
            <p><a href='https://yourapp.com/privacy'>Chính sách bảo mật</a> | <a href='https://yourapp.com/terms'>Điều khoản dịch vụ</a></p>
        </div>

        </div>
    </body>
    </html>";
    }
}
