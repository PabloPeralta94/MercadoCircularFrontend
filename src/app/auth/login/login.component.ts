import { Component, OnInit } from '@angular/core';
import { TokenService } from '../../services/token.service';
import { AuthService } from 'src/app/services/auth.service';
import { Route, Router } from '@angular/router';
import { LoginUsuario } from 'src/app/interfaces/login-usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLogged = false;
  isLoginFail = false;
  loginUsuario: LoginUsuario;
  nombreUsuario: string;
  password: string;
  roles: string[] = [];
  errMsj: string;

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.isLoginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  onLogin(): void {
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
    this.authService.login(this.loginUsuario).subscribe(
      data => {
        this.isLogged = true;

        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.nombreUsuario);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;
        console.log('Bienvenido ' + data.nombreUsuario); // Log success message
        this.router.navigate(['/']);
      },
      err => {
        this.isLogged = false;
        this.errMsj = err.error.message;
        console.error(this.errMsj); // Log error message
        this.router.navigate(['/']);
      }
    );
  }

}
