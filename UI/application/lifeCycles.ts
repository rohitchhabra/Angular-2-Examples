import {
  Component,
  Input,
  OnInit,
  OnChanges,
  DoCheck,
  OnDestroy,
  AfterViewInit,
  AfterViewChecked,
  AfterContentInit,
  AfterContentChecked
} from '@angular/core';

@Component({
 selector: 'my-parent',
  providers: [],
  template: `
    <div>
      <input type="text" #input />
      <input type="button" value="add" (click)="add(input.value); input.value = ''" />
    </div>
    <div>
      <ol>
        <my-child *ngFor="let log of logs; let i = index" [log]="log" [index]="i" (onDelete)="remove($event)"></my-child>
      </ol>
    </div>`
    
    })
export class LifeCycles implements OnInit, DoCheck, OnDestroy, AfterContentInit, AfterContentChecked, AfterViewChecked {


     @Input() data:any;
  logs = [];
  
  constructor() {
    this.logs.push('----- Initialized -----');
  }
  
  // 入力値の初期化後に実行
  ngOnInit() {
    console.log(this.data);
    this.logs.push('ngOnInit');
  }
  
  // 入力値の変更時に実行
  ngOnChanges(changes) {
    console.log(changes);
    this.logs.push('ngOnChanges');
  }
  
  // 何かしらの変更の度に実行
  ngDoCheck() {
    this.logs.push('ngDoCheck');
  }
  
  // コンポーネントに属するビューの初期化後に実行
  ngAfterContentInit() {
    this.logs.push('ngAfterContentInit');
  }
  
  // コンポーネントに属するビューの変更時に実行
  ngAfterContentChecked() {
    this.logs.push('ngAfterContentChecked');
  }
  
  // 子コンポーネントの初期化後に実行
  ngAfterViewInit() {
    this.logs.push('ngAfterViewInit');
  }
  
  // 子コンポーネントの変更時に実行
  ngAfterViewChecked() {
    this.logs.push('ngAfterViewChecked');
  }
  
  // コンポーネントが削除される前に実行
  ngOnDestroy() {
    this.logs.push('ngOnDestroy');
  }
  
  
  add(str) {
    this.logs.push(`----- input: "${str}" -----`);
  }
  
  remove(index) {
    this.logs.splice(index, 1);
  }
  
}