import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../shared/country.service';
import { Country } from '../../country';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public countries: Country[] = [];

  constructor(private _countryService: CountryService, private router: Router) { }

  async ngOnInit() {
    await this.readCountries();
  }

  async readCountries() {
    try {
      const data = await this._countryService.readCountries().toPromise();
      console.log(data);
      this.countries = (data as { msg: Country[] }).msg;
    } catch (error) {
      console.log(error);
    }
  }

  doUpdate(country: Country) {
    this._countryService.setter(country);
    this.router.navigate(['/createUpdate']);
  }

  doDelete(country: Country) {
    console.log('Deleting country:', country);
  
    if (country._id) {
      console.log('Country ID:', country._id);
  
      this._countryService.deleteCountry(country._id).subscribe(
        data => {
          this.countries.splice(this.countries.indexOf(country), 1);
          console.log('Delete success:', data);
        },
        error => {
          console.error('Delete error:', error);
        }
      );
    } else {
      console.log('Country ID is undefined');
    }
  }
}