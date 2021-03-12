import { Component, OnInit } from '@angular/core';
import { ListTechnologiesService } from '../../services/list-technologies/list-technologies.service';

@Component({
  selector: 'app-list-technologies',
  templateUrl: './list-technologies.component.html',
  styleUrls: ['./list-technologies.component.scss']
})
export class ListTechnologiesComponent implements OnInit {

  techs: any = [];
  favouriteTechs: any = [];
  isFavourite = false;

  constructor(
    private listTechService: ListTechnologiesService
  ) { }

  ngOnInit(): void {
    this.getTechs();
  }

  /**
   * Funcion para obtener la lista de tecnologias y verificar si en el localstorage alguna ha sido seleccionada
   * como favorita
   */
  async getTechs(): Promise<any> {
    try {
      this.techs = await this.listTechService.getListTechnologies();
      const FAVOURITE_TECHS = localStorage.getItem('favourite_techs');
      this.favouriteTechs = JSON.parse(FAVOURITE_TECHS);
      if (FAVOURITE_TECHS !== null) {
        const RESULT_FAV = this.techs.map(tech => {
          const RESLT_FIND = this.favouriteTechs.find(favourite => favourite.tech === tech.tech);
          if (RESLT_FIND !== undefined) {
            tech.is_favourite = true;
          }
          return tech;
        });
        this.techs = RESULT_FAV;
      }
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * Funcion para filtrar los elementos de acuerdo a lo escrito
   *
   */
  applyFilter(event: Event): any {
    const FILTER_VALUE = (event.target as HTMLInputElement).value.trim().toLowerCase();
    if (FILTER_VALUE === '') {
      this.getTechs();
    } else {
      const RESULT_FILTER = this.techs.filter(tech => {
        if (tech.tech.trim().toLowerCase().includes(FILTER_VALUE) || tech.type.trim().toLowerCase().includes(FILTER_VALUE)) {
          return tech;
        }
      });
      this.techs = RESULT_FILTER;
    }
  }

  /**
   * Funcion para ordenar los elementos de forma ascendente por el nombre
   */
  orderAsc(): any {
    this.techs = this.techs.sort((a, b) => {
      if (a.tech > b.tech) {
        return 1;
      }
      if (a.tech < b.tech) {
        return -1;
      }
      return 0;
    });
  }

  /**
   * Funcion para ordenar los elementos de forma descendente por el nombre
   */
  orderDesc(): any {
    this.techs = this.techs.sort((a, b) => {
      if (b.tech > a.tech) {
        return 1;
      }
      if (b.tech < a.tech) {
        return -1;
      }
      return 0;
    });
  }

  /**
   * Funcion para marcar una tecnologia como favorita y agregarla al localstorage
   *
   */
  favouriteTech(tech): any {
    tech.is_favourite = true;
    this.favouriteTechs = this.favouriteTechs === null ? [] : this.favouriteTechs;
    this.favouriteTechs.push(tech);
    localStorage.setItem('favourite_techs', JSON.stringify(this.favouriteTechs));
    this.isFavourite = true;
  }

  /**
   * Funcion para desmarcar una tecnologia como favorita y removerla del localstorage
   *
   */
  removeFavouriteTech(tech): any {
    delete tech.is_favourite;
    const INDEX_TECH = this.favouriteTechs.indexOf(tech);
    this.favouriteTechs.splice(INDEX_TECH, 1);
    localStorage.setItem('favourite_techs', JSON.stringify(this.favouriteTechs));
    this.isFavourite = true;
  }

}
