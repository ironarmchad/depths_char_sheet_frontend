import { Component, OnInit } from '@angular/core';
import {SecretService} from '../_services/secret.service';

@Component({
  selector: 'app-secret',
  templateUrl: './secret.component.html',
  styleUrls: ['./secret.component.scss']
})
export class SecretComponent implements OnInit {
  secret: string;

  constructor(private secretService: SecretService) { }

  ngOnInit() {
    this.secretService.secret().subscribe(secret => this.secret = secret['answer']);
  }

}
