import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { COUNTRIES, DEPARTMENTS } from './countries';
import { RegisterService } from '../../services/register/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  formMessage: any;
  regexSpecialChar = /[�&#,+()$~%.'":*?¿<>{}=!¡_ÁÉÍÓÚ°|;ºª\/\\\-\[\]]+/g;
  regexOnlyLetter = /[a-zA-Z\s]/g;
  regexOnlyNumber = /[0-9]/g;
  regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/g;
  sendForm = false;
  countries: any = [];
  departments: any = [];

  constructor(private formBuilder: FormBuilder, private registerService: RegisterService, private router: Router) {}

  ngOnInit(): void {
    this.initForm();
    this.initMessagesForm();
    this.countries = COUNTRIES;

    if (this.registerService.isAuthenticated()) {
      this.router.navigate(['listado-tecnologias']);
    }
  }

  /**
   * funcion para inicializar el formulario de registro
   */
  initForm(): any {
    this.registerForm = this.formBuilder.group(
      {
        userName: ['', [Validators.required, Validators.maxLength(30)]],
        lastName: ['', [Validators.required, Validators.maxLength(30)]],
        country: ['', Validators.required],
        department: ['', Validators.required],
        email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
        phone: ['', [Validators.required, Validators.maxLength(10)]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
        terms: ['', Validators.required],
      },
      {
        validator: this.validateFieldForm(),
      }
    );
  }

  /**
   * Funcion para inicializar los mensajes correspondientes a los errores que puede tener el formulario
   */
  initMessagesForm(): any {
    this.formMessage = {
      userName: [
        { type: 'required', message: 'El campo es obligatorio' },
        { type: 'caracter', message: 'Este campo no permite caracteres especiales' },
        { type: 'maxlength', message: 'Este campo debe tener máximo 30 caracteres' },
        { type: 'pattern', message: 'Este campo no permite números' },
      ],
      lastName: [
        { type: 'required', message: 'El campo es obligatorio' },
        { type: 'caracter', message: 'Este campo no permite caracteres especiales' },
        { type: 'maxlength', message: 'Este campo debe tener máximo 30 caracteres' },
        { type: 'pattern', message: 'Este campo no permite números' },
      ],
      country: [{ type: 'required', message: 'El campo es obligatorio' }],
      department: [{ type: 'required', message: 'El campo es obligatorio' }],
      email: [
        { type: 'required', message: 'El campo es obligatorio' },
        { type: 'pattern', message: 'El correo eléctronico no tiene un formato valido' },
      ],
      phone: [
        { type: 'required', message: 'El campo es obligatorio' },
        { type: 'maxlength', message: 'El número de celular debe ser de 10 dígitos, sin espacios' },
        { type: 'caracter', message: 'Este campo no permite caracteres especiales' },
        { type: 'pattern', message: 'Este campo no permite letras' },
      ],
      password: [
        { type: 'required', message: 'El campo es obligatorio' },
        { type: 'minlength', message: 'La contraseña debe tener minimo 6 caracteres' },
        { type: 'pattern', message: 'La contraseña debe ser alfanumerica' },
      ],
      confirmPassword: [
        { type: 'required', message: 'El campo es obligatorio' },
        { type: 'nomatch', message: 'La contraseña no coincide' },
      ],
      terms: [{ type: 'required', message: 'El campo es obligatorio' }],
    };
  }

  /**
   * Funcion para realizar validaciones de los campos que sean necesarios, de acuerdo a las reglas mencionadas
   */
  validateFieldForm(): any {
    return (group) => {
      const FIELD_WITHOUT_CHAR = ['userName', 'lastName', 'phone'];
      FIELD_WITHOUT_CHAR.forEach((element) => {
        if (group.controls[element] !== undefined) {
          const VALUE = group.controls[element].value;
          if (this.regexSpecialChar.test(VALUE)) {
            group.controls[element].setErrors({ caracter: true });
          }
        }
      });

      const FIELD_ONLY_LETTER = ['userName', 'lastName'];
      FIELD_ONLY_LETTER.forEach((element) => {
        if (group.controls[element] !== undefined) {
          const VALUE = group.controls[element].value;
          if (this.regexOnlyNumber.test(VALUE)) {
            group.controls[element].setErrors({ pattern: true });
          }
        }
      });

      const VALUE_PHONE = group.controls.phone;
      if (this.regexOnlyLetter.test(VALUE_PHONE.value)) {
        VALUE_PHONE.setErrors({ pattern: true });
      }

      const PASSWORD = group.controls.password;
      const CONFIRM_PASSWORD = group.controls.confirmPassword;
      if (PASSWORD.value !== CONFIRM_PASSWORD.value) {
        CONFIRM_PASSWORD.setErrors({ nomatch: true });
      }
    };
  }

  /**
   * Funcion para filtrar los departamentos de acuerdo al pais seleccionado
   */
  filterDepartments(countryId): any {
    // tslint:disable-next-line: radix
    this.departments = DEPARTMENTS.filter((department) => department.country_id === parseInt(countryId));
  }

  /**
   * Funcion que llama al servicio de registro y al obtener respuesta correcta se
   * almacena en localstorage
   */
  async saveRegister(): Promise<any> {
    this.sendForm = true;
    if (!this.registerForm.invalid) {
      const DATA = this.registerForm.value;
      // tslint:disable-next-line: radix
      const COUNTRY = COUNTRIES.find((country) => country.country_id === parseInt(DATA.country));
      // tslint:disable-next-line: radix
      const DEPARTMENT = DEPARTMENTS.find((department) => department.department_id === parseInt(DATA.department));

      const USER = {
        name: DATA.userName,
        last_name: DATA.lastName,
        country: COUNTRY.country_value,
        province: DEPARTMENT.department_value,
        mail: DATA.email,
        phone: DATA.phone,
        password: DATA.password,
      };

      try {
        const RESULT_REGISTER = await this.registerService.registerUser(USER);
        localStorage.setItem('user', JSON.stringify(RESULT_REGISTER));
        this.router.navigate(['listado-tecnologias']);
      } catch (error) {
        console.log(error);
      }
    }
  }

  /**
   * Funcion para obtener el error correspondiente de cada campo
   */
  getError(key, error): any {
    const keyError = Object.keys(error)[0];
    const errorFound = this.formMessage[key].find((typeError) => typeError.type === keyError);
    return errorFound.message;
  }

  get userName(): any {
    return this.registerForm.get('userName');
  }
  get lastName(): any {
    return this.registerForm.get('lastName');
  }
  get country(): any {
    return this.registerForm.get('country');
  }
  get department(): any {
    return this.registerForm.get('department');
  }
  get email(): any {
    return this.registerForm.get('email');
  }
  get phone(): any {
    return this.registerForm.get('phone');
  }
  get password(): any {
    return this.registerForm.get('password');
  }
  get confirmPassword(): any {
    return this.registerForm.get('confirmPassword');
  }
  get terms(): any {
    return this.registerForm.get('terms');
  }
}
