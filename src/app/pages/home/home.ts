import { Component } from '@angular/core';
import { Navbar } from '../../navbar/navbar';
import { Card } from '../../card/card';
import { Form } from '../../componet/form/form';

import { Footer } from '../../footer/footer';
import { Contact } from '../contact/contact';
import { Combination } from "../../component/combination/combination";
import { Bannner } from "../../component/bannner/bannner";

@Component({
  selector: 'app-home',
  imports: [Card, Combination, Footer, Bannner],

  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
