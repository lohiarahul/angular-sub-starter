import {
  Component,
  OnInit
} from '@angular/core';

import { AppState } from '../app.service';
import { Title } from './title';
import { XLargeDirective } from './x-large';

@Component({
  /**
   * The selector is what angular internally uses
   * for `document.querySelectorAll(selector)` in our index.html
   * where, in this case, selector is the string 'home'.
   */
  selector: 'home',  // <home></home>
  /**
   * We need to tell Angular's Dependency Injection which providers are in our app.
   */
  providers: [
    Title
  ],
  /**
   * Our list of styles in our component. We may add more to compose many styles together.
   */
  styleUrls: ['./subHome.component.css'],
  /**
   * Every Angular template is first compiled by the browser before Angular runs it's compiler.
   */
  template : ` This is the sub component<img [src]="imagePath1" />
  <img [src]="imagePath2" />`
})
export class SubHomeComponent implements OnInit {
  /**
   * Set our default values
   */
  public localState = { value: '' };
  public imagePath1 = '../../assets/img/bigfile.jpg';
  public imagePath2 = 'assets/img/bigfile.jpg';
  /**
   * TypeScript public modifiers
   */
  constructor(
    public appState: AppState,
    public title: Title
  ) { }

  public ngOnInit() {
    console.log('hello `Home` component');
    /**
   * this.title.getData().subscribe(data => this.data = data);
   */
  }

  public submitState(value: string) {
    console.log('submitState', value);
    this.appState.set('value', value);
    this.localState.value = '';
  }
}
