import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  username: string = '';
  errorMessage: string | null = null;
  successMessage: string | null = null;

  constructor(private authService: AuthService) {
  }

  onForgotPassword(): void {
    if (!this.username) {
      this.errorMessage = 'Tên đăng nhập là bắt buộc';
      return;
    }
    this.authService.forgotPassword(this.username).subscribe({
      next: response => {
        this.successMessage = "Email đặt lại mật khẩu đã gửi. Vui lòng kiểm tra hộp thư đến của bạn.";
        this.errorMessage = null;
      },
      error: error => {
        if (error.status === 400 && error.error.errors) {
          console.log('Lỗi xác thực:', error.error.errors);
        }
        this.errorMessage = error.error.title || 'Không gửi được email đặt lại mật khẩu.';
        this.successMessage = null;
      }
    });
  }
}
