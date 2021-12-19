import { Component, OnInit } from '@angular/core';
import { CharacterInterface, CharacterResponseInterface } from './models/Icharacters';
import { RequestService } from './service/request.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestExampleComponent  implements OnInit {

  public characterList: CharacterInterface[] = []; 

  constructor(private requestService: RequestService { }

  ngOnInit(): void {

    this.requestService.getCharacters()
    .subscribe(( data: CharacterResponseInterface) => {
      const results: CharacterInterface[] = data.results;

      const formattedResults = results.map(({ id, name, image }) => ({
        id,
        name,
        image,
      }));
      this.characterList = formattedResults;
    });
  }
}
  
