import { Component } from '@angular/core';
import { Navbar } from '../../navbar/navbar';
import { Bannner } from "../../component/bannner/bannner";

@Component({
  selector: 'app-about',
  imports: [ Bannner],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {

}
