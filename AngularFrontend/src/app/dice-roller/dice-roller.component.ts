import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { interval, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';


@Component({
selector: 'app-dice-roller',
templateUrl: './dice-roller.component.html',
styleUrls: ['./dice-roller.component.scss']
})
export class DiceRollerComponent {
numRolls:any=10
rolls: number[] = [];
rolling$: Subject<boolean> = new Subject<boolean>();


constructor(private fb: FormBuilder) {
}

form: FormGroup = this.fb.group({
  numRolls: [null, [Validators.required]]
});

rollDice(numRolls: number): void {
this.rolls = [];
this.rolling$.next(true);
if (this.form) {
  numRolls= this.form.get('numRolls')!.value;
}

interval(200)
.pipe(takeUntil(this.rolling$))
.subscribe(() => {
this.rolls = Array.from({ length: numRolls }, () => Math.floor(Math.random() * 6) + 1);
});

setTimeout(() => {
this.rolling$.next(false);
}, 2000);
}
}




