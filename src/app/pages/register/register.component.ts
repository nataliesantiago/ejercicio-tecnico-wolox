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
  regex_caract_numeros = /[ &#,+()$~%.'":*?¿<>{}=!¡_ÁÉÍÓÚ°|;ºªa-zA-Z\/\\\-\[\]]+/g;
  regexSpecialChar = /[�&#,+()$~%.'":*?¿<>{}=!¡_ÁÉÍÓÚ°|;ºª\/\\\-\[\]]+/g;
  regexOnlyLetter = /[a-zA-Z\s]/g;
  regexOnlyNumber = /[0-9]/g;
  regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/g;
  sendForm: boolean = false;
  countries: any = [];
  departments: any = [];

  constructor(
    private formBuilder: FormBuilder, 
    private registerService: RegisterService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.initMessagesForm();
    this.countries = COUNTRIES;
  }

  /**
   * funcion para inicializar el formulario de creacion
   */
  initForm(): any {
    this.registerForm = this.formBuilder.group(
      {
        userName: ['', [Validators.required, Validators.maxLength(30)]],
        lastName: ['', [Validators.required, Validators.maxLength(30)]],
        country: ['', Validators.required],
        department: ['', Validators.required],
        email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
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

  initMessagesForm() {
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

  validateFieldForm() {
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

      const VALUE_PHONE = group.controls['phone'];
      if (this.regexOnlyLetter.test(VALUE_PHONE.value)) {
        VALUE_PHONE.setErrors({ pattern: true });
      }

      const PASSWORD = group.controls['password'];
      const CONFIRM_PASSWORD = group.controls['confirmPassword'];
      if (PASSWORD.value !== CONFIRM_PASSWORD.value) {
        CONFIRM_PASSWORD.setErrors({ nomatch: true });
      }
    };
  }

  filterDepartments(countryId) {
    this.departments = DEPARTMENTS.filter((department) => department.country_id == countryId);
  }

  async saveRegister() {
    this.sendForm = true;
    if (!this.registerForm.invalid) {
      const DATA = this.registerForm.value;
      const COUNTRY = COUNTRIES.find((country) => country.country_id === parseInt(DATA.country));
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

  getError(key, error) {
    const keyError = Object.keys(error)[0];
    const errorFound = this.formMessage[key].find((typeError) => typeError.type === keyError);
    return errorFound.message;
  }

  get userName() {
    return this.registerForm.get('userName');
  }
  get lastName() {
    return this.registerForm.get('lastName');
  }
  get country() {
    return this.registerForm.get('country');
  }
  get department() {
    return this.registerForm.get('department');
  }
  get email() {
    return this.registerForm.get('email');
  }
  get phone() {
    return this.registerForm.get('phone');
  }
  get password() {
    return this.registerForm.get('password');
  }
  get confirmPassword() {
    return this.registerForm.get('confirmPassword');
  }
  get terms() {
    return this.registerForm.get('terms');
  }
}
